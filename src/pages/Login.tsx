import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { School } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Credenciales inválidas. Ingrese un rol válido y deje la contraseña en blanco.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-brand-green p-8 text-center text-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <School className="text-brand-green" size={32} />
          </div>
          <h1 className="text-2xl font-bold tracking-widest uppercase">Escuela Integral</h1>
          <h2 className="text-sm font-light tracking-widest uppercase text-brand-light">Católica</h2>
        </div>
        
        <div className="p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Acceso a la Plataforma</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usuario (Rol)</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="alumno, padre, profesor o administrador"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Dejar en blanco para la demo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none"
              />
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <button 
              type="submit"
              className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-brand-dark transition-colors mt-4"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}