import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import { Bell, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  const { role } = useAuth();

  // Mocks de información según rol activo
  const userProfiles = {
    alumno: { name: 'Tomás Pérez', subtitle: '6to Año - Secundaria' },
    padre: { name: 'Martín Pérez', subtitle: 'Tutor de Tomás Pérez' },
    profesor: { name: 'Prof. Ana García', subtitle: 'Departamento de Ciencias' },
    directivo: { name: 'Lic. Carlos Gómez', subtitle: 'Director Académico' },
  };

  const profile = role ? userProfiles[role] : userProfiles.alumno;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-72 flex flex-col">
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8 z-10">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-medium">Ciclo Lectivo 2026</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-brand-green transition-colors">
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-gray-700">{profile.name}</p>
                <p className="text-xs text-gray-500">{profile.subtitle}</p>
              </div>
              <div className="w-10 h-10 bg-brand-light text-brand-green rounded-full flex items-center justify-center font-bold uppercase">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}