import { useState } from 'react';
import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import { Bell, User, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  const { role } = useAuth();
  // 1. Estado para controlar el menú en móviles
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userProfiles = {
    alumno: { name: 'Tomás Pérez', subtitle: '6to Año - Secundaria' },
    padre: { name: 'Martín Pérez', subtitle: 'Tutor de Tomás Pérez' },
    profesor: { name: 'Prof. Ana García', subtitle: 'Dpto. de Ciencias' },
    directivo: { name: 'Lic. Carlos Gómez', subtitle: 'Director Académico' },
  };

  const profile = role ? userProfiles[role] : userProfiles.alumno;

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      
      {/* 2. Fondo oscuro (Overlay) para móvil cuando el menú está abierto */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 3. Inyección del Sidebar con sus props */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* 4. Ajuste de márgenes: ml-0 en móvil, ml-72 en desktop */}
      <div className="flex-1 ml-0 md:ml-72 flex flex-col min-w-0">
        
        {/* Encabezado: ajustamos paddings y agregamos botón hamburguesa */}
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-4 md:px-8 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-gray-500 hover:text-brand-green md:hidden rounded-lg focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <span className="text-sm text-gray-500 font-medium hidden sm:block">Ciclo Lectivo 2026</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button className="relative p-2 text-gray-400 hover:text-brand-green transition-colors">
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 md:border-l border-gray-200 md:pl-6">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-gray-700">{profile.name}</p>
                <p className="text-xs text-gray-500">{profile.subtitle}</p>
              </div>
              <div className="w-10 h-10 bg-brand-light text-brand-green rounded-full flex items-center justify-center font-bold uppercase flex-shrink-0">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* 5. Ajuste de padding del contenedor principal para móviles */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}