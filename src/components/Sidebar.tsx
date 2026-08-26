import { Home, BookOpen, GraduationCap, CreditCard, Calendar, LogOut, Users, Settings, FileText, ClipboardList } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// 1. Definimos las propiedades que recibirá el Sidebar
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { role, logout } = useAuth();

  const menus = {
    alumno: [
      { name: 'Dashboard', icon: Home, path: '/' },
      { name: 'Mis Cursos', icon: BookOpen, path: '/cursos' },
      { name: 'Calificaciones', icon: GraduationCap, path: '/notas' },
      { name: 'Calendario', icon: Calendar, path: '/calendario' },
    ],
    padre: [
      { name: 'Resumen Familiar', icon: Home, path: '/' },
      { name: 'Rendimiento Académico', icon: GraduationCap, path: '/notas' },
      { name: 'Estado de Cuenta', icon: CreditCard, path: '/pagos' },
      { name: 'Autorizaciones', icon: FileText, path: '/autorizaciones' },
      { name: 'Calendario Escolar', icon: Calendar, path: '/calendario' },
    ],
    profesor: [
      { name: 'Panel Docente', icon: Home, path: '/' },
      { name: 'Mis Aulas', icon: BookOpen, path: '/cursos' },
      { name: 'Gestión de Notas', icon: ClipboardList, path: '/notas' },
      { name: 'Asistencia', icon: Users, path: '/asistencia' },
      { name: 'Calendario', icon: Calendar, path: '/calendario' },
    ],
    directivo: [
      { name: 'Métricas Generales', icon: Home, path: '/' },
      { name: 'Gestión de Usuarios', icon: Users, path: '/usuarios' },
      { name: 'Finanzas Institucionales', icon: CreditCard, path: '/finanzas' },
      { name: 'Cartelera Oficial', icon: FileText, path: '/cartelera' },
      { name: 'Configuración', icon: Settings, path: '/configuracion' },
    ]
  };

  const currentMenu = role ? menus[role] : menus.alumno;

  return (
    <aside 
      // 2. Se aplican clases condicionales para la transformación en el eje X
      className={`w-72 bg-brand-green text-white flex flex-col h-screen fixed shadow-xl z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="p-6 border-b border-brand-dark flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner flex-shrink-0">
          <span className="text-brand-green font-bold text-xl">EIC</span>
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-widest uppercase">Escuela Integral</h1>
          <h2 className="text-xs font-light tracking-widest uppercase text-brand-light">Católica</h2>
        </div>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        <p className="px-4 text-xs font-semibold text-brand-light/70 uppercase tracking-wider mb-4">
          Portal {role}
        </p>
        
        {currentMenu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={onClose} // 3. Cierra el menú al hacer clic en móvil
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-brand-dark shadow-md' 
                  : 'hover:bg-brand-dark/50 border-transparent'
              }`
            }
          >
            <item.icon size={20} />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-brand-dark">
        <button 
          onClick={() => {
            onClose();
            logout();
          }}
          className="flex items-center gap-3 px-4 py-2 w-full text-left hover:bg-brand-dark rounded-lg transition-colors text-brand-light"
        >
          <LogOut size={20} />
          <span className="font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}