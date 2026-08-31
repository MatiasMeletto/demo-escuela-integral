import { createContext, useContext, useState, type ReactNode } from 'react';

type Role = 'alumno' | 'padre' | 'profesor' | 'administrador' | null;

interface AuthContextType {
  role: Role;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>(null);

  const login = (username: string, password: string) => {
    if (password.trim() !== '') return false;
    
    const normalizedUser = username.toLowerCase().trim();
    if (['alumno', 'padre', 'profesor', 'administrador'].includes(normalizedUser)) {
      setRole(normalizedUser as Role);
      return true;
    }
    return false;
  };

  const logout = () => setRole(null);

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  return context;
}