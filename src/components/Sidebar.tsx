import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Home, BookOpen, GraduationCap, CreditCard, Calendar, LogOut, Users, Settings, 
  FileText, ClipboardList, User, Table, Repeat, Bookmark, Mail, CalendarDays, 
  Map, Library, Activity, CheckSquare, Eye, Bell, MessageSquare, ClipboardType, 
  CheckCircle, HelpCircle, PieChart, Clock, Folder, UserMinus, Shield, ChevronDown, ChevronUp
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuItem = {
  name: string;
  icon: any;
  path?: string;
  subItems?: { name: string; path: string }[];
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { role, logout } = useAuth();
  const navigate = useNavigate();
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenus(prev => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const menus: Record<string, MenuItem[]> = {
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
      { name: 'Inicio', icon: Home, path: '/' },
      { name: 'Mis Datos', icon: User, path: '/perfil' },
      { name: 'Evaluaciones', icon: ClipboardList, path: '/evaluaciones' },
      { 
        name: 'Planillas', icon: Table,
        subItems: [
          { name: 'Cargar observaciones-calificaciones', path: '/planillas/cargar' },
          { name: 'Planilla en formato RITE', path: '/planillas/rite' },
          { name: 'Calificaciones de todos los períodos por materia', path: '/planillas/calificaciones-historico' }
        ]
      },
      {
        name: 'Recursantes-Intensificaciones', icon: Repeat,
        subItems: [
          { name: 'Carga de alumnos y notas', path: '/recursantes/carga' },
          { name: 'Reporte por materia de los períodos a intensificar', path: '/recursantes/reporte' }
        ]
      },
      { name: 'Calendario de Mesas', icon: Calendar, path: '/mesas' },
      {
        name: 'Mensajería', icon: Mail,
        subItems: [
          { name: 'Nuevo Mensaje', path: '/mensajeria/nuevo' },
          { name: 'Bandeja de Entrada', path: '/mensajeria/inbox' },
          { name: 'Enviados', path: '/mensajeria/enviados' },
          { name: 'Archivados', path: '/mensajeria/archivados' }
        ]
      },
      { name: 'Agenda', icon: CalendarDays, path: '/agenda' },
      { name: 'Programa Anual', icon: Map, path: '/programa' },
      { name: 'Biblioteca', icon: Library, path: '/biblioteca' },
      { name: 'Indicador de convivencia', icon: Activity, path: '/indicador-convivencia' },
      {
        name: 'Convivencia', icon: Users,
        subItems: [
          { name: 'Cargar', path: '/convivencia/cargar' },
          { name: 'Totales', path: '/convivencia/totales' },
          { name: 'Listado', path: '/convivencia/listado' }
        ]
      },
      {
        name: 'Cumplimiento', icon: CheckSquare,
        subItems: [
          { name: 'Cargar', path: '/cumplimiento/cargar' },
          { name: 'Listado', path: '/cumplimiento/listado' },
          { name: 'Reporte', path: '/cumplimiento/reporte' }
        ]
      },
      {
        name: 'Auditoría', icon: Eye,
        subItems: [
          { name: 'Confirmación de Notificaciones', path: '/auditoria/notificaciones' }
        ]
      },
      { name: 'Novedades', icon: Bell, path: '/novedades' },
      { name: 'Foro', icon: MessageSquare, path: '/foro' },
      { name: 'Formularios', icon: ClipboardType, path: '/formularios' },
      {
        name: 'Tareas', icon: CheckCircle,
        subItems: [
          { name: 'Crear y Corregir', path: '/tareas/gestionar' },
          { name: 'Listado de Notas', path: '/tareas/notas' }
        ]
      },
      {
        name: 'Encuestas', icon: HelpCircle,
        subItems: [
          { name: 'Crear y Administrar', path: '/encuestas/gestionar' },
          { name: 'Completar', path: '/encuestas/completar' }
        ]
      },
      {
        name: 'Reportes', icon: PieChart,
        subItems: [
          { name: 'Listado de Alumnos', path: '/reportes/alumnos' },
          { name: 'Calificaciones por materias', path: '/reportes/calificaciones' }
        ]
      },
      { name: 'Mis Horarios', icon: Clock, path: '/horarios' },
      { name: 'Mis Archivos', icon: Folder, path: '/archivos' },
      { name: 'Inasistencias / Personal Docente', icon: UserMinus, path: '/inasistencias-docente' }
    ],
    administrador: [
      { name: 'Inicio', icon: Home, path: '/' },
      { name: 'Mis Datos', icon: User, path: '/perfil' },
      { name: 'Usuarios', icon: Users, path: '/usuarios' },
      {
        name: 'Cursos', icon: BookOpen,
        subItems: [
          { name: 'Configuración', path: '/cursos/configuracion' },
          { name: 'Pasar alumnos de curso', path: '/cursos/promocion' }
        ]
      },
      { name: 'Evaluaciones', icon: ClipboardList, path: '/evaluaciones' },
      {
        name: 'Planillas', icon: Table,
        subItems: [
          { name: 'Cargar observaciones-calificaciones', path: '/planillas/cargar' },
          { name: 'Planilla en formato RITE', path: '/planillas/rite' },
          { name: 'Control y envío de observaciones-calificaciones por curso', path: '/planillas/control' },
          { name: 'Boletines Rite', path: '/planillas/boletines-rite' },
          { name: 'Cargar Matrículas y Legajos', path: '/planillas/matriculas' },
          { name: 'Evaluación al personal', path: '/planillas/evaluacion-personal' },
          { name: 'Calificaciones de todos los períodos por materia', path: '/planillas/calificaciones-historico' }
        ]
      },
      {
        name: 'Recursantes-Intensificaciones', icon: Repeat,
        subItems: [
          { name: 'Carga de alumnos y notas', path: '/recursantes/carga' },
          { name: 'Reporte por materia de los períodos a intensificar', path: '/recursantes/reporte' }
        ]
      },
      {
        name: 'Materias pendientes', icon: Bookmark,
        subItems: [
          { name: 'Carga de materias', path: '/pendientes/carga' },
          { name: 'Calendario de Mesas', path: '/pendientes/mesas' },
          { name: 'Impresión de Actas y Permisos', path: '/pendientes/actas' },
          { name: 'Historial por Alumno', path: '/pendientes/historial' }
        ]
      },
      {
        name: 'Mensajería', icon: Mail,
        subItems: [
          { name: 'Nuevo Mensaje', path: '/mensajeria/nuevo' },
          { name: 'Bandeja de Entrada', path: '/mensajeria/inbox' },
          { name: 'Enviados', path: '/mensajeria/enviados' },
          { name: 'Archivados', path: '/mensajeria/archivados' }
        ]
      },
      { name: 'Agenda', icon: CalendarDays, path: '/agenda' },
      { name: 'Programa Anual', icon: Map, path: '/programa' },
      { name: 'Biblioteca', icon: Library, path: '/biblioteca' },
      {
        name: 'Inasistencia', icon: UserMinus,
        subItems: [
          { name: 'Carga Individual por Alumno', path: '/inasistencia/individual' },
          { name: 'Carga Masiva por Curso', path: '/inasistencia/masiva' },
          { name: 'Carga del personal Docente', path: '/inasistencia/docente' },
          { name: 'Listado General de Alumnos y personal Docente', path: '/inasistencia/general' },
          { name: 'Listado Diario', path: '/inasistencia/diario' },
          { name: 'Reporte por Materia', path: '/inasistencia/reporte' },
          { name: 'Justificaciones', path: '/inasistencia/justificaciones' }
        ]
      },
      { name: 'Indicador de convivencia', icon: Activity, path: '/indicador-convivencia' },
      {
        name: 'Convivencia', icon: Users,
        subItems: [
          { name: 'Cargar', path: '/convivencia/cargar' },
          { name: 'Totales', path: '/convivencia/totales' },
          { name: 'Listado', path: '/convivencia/listado' }
        ]
      },
      {
        name: 'Cumplimiento', icon: CheckSquare,
        subItems: [
          { name: 'Cargar', path: '/cumplimiento/cargar' },
          { name: 'Listado', path: '/cumplimiento/listado' },
          { name: 'Reporte', path: '/cumplimiento/reporte' }
        ]
      },
      {
        name: 'Auditoría', icon: Eye,
        subItems: [
          { name: 'Ingresos y carga de datos', path: '/auditoria/ingresos' },
          { name: 'Mensajería Entre usuarios', path: '/auditoria/mensajeria-usuarios' },
          { name: 'Mensajes en General', path: '/auditoria/mensajes-general' },
          { name: 'Confirmación de Notificaciones', path: '/auditoria/notificaciones' }
        ]
      },
      { name: 'Novedades', icon: Bell, path: '/novedades' },
      { name: 'Foro', icon: MessageSquare, path: '/foro' },
      { name: 'Formularios', icon: ClipboardType, path: '/formularios' },
      {
        name: 'Tareas', icon: CheckCircle,
        subItems: [
          { name: 'Crear y Corregir', path: '/tareas/gestionar' },
          { name: 'Listado de Notas', path: '/tareas/notas' }
        ]
      },
      {
        name: 'Encuestas', icon: HelpCircle,
        subItems: [
          { name: 'Crear y Administrar', path: '/encuestas/gestionar' },
          { name: 'Completar', path: '/encuestas/completar' }
        ]
      },
      {
        name: 'Reportes', icon: PieChart,
        subItems: [
          { name: 'Listado de Alumnos', path: '/reportes/alumnos' },
          { name: 'Listado de Profesores y Preceptores', path: '/reportes/profesores' },
          { name: 'Responsables que no ingresaron', path: '/reportes/responsables-ausentes' },
          { name: 'Calificaciones por curso', path: '/reportes/calificaciones-curso' },
          { name: 'Calificaciones por materias', path: '/reportes/calificaciones-materia' }
        ]
      },
      { name: 'Mis Archivos', icon: Folder, path: '/archivos' },
      { name: 'Inasistencias / Personal Docente', icon: UserMinus, path: '/inasistencias-docente' },
      {
        name: 'Equipo Orientación Esc. (E.O.E)', icon: Shield,
        subItems: [
          { name: 'Ficha pedagógica', path: '/eoe/ficha' },
          { name: 'Boletines y Reg. Calificaciones', path: '/eoe/boletines' },
          { name: 'Reporte por materia de los períodos a intensificar', path: '/eoe/reporte-intensificar' }
        ]
      }
    ]
  };

  const currentMenu = role ? menus[role] : menus.alumno;

  return (
    <aside 
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

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
        <p className="px-4 text-xs font-semibold text-brand-light/70 uppercase tracking-wider mb-4">
          Portal {role}
        </p>
        
        {currentMenu.map((item) => (
          <div key={item.name} className="flex flex-col">
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleSubMenu(item.name)}
                  className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg transition-colors hover:bg-brand-dark/50"
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} />
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                  {openSubMenus[item.name] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {openSubMenus[item.name] && (
                  <div className="pl-11 pr-2 py-1 space-y-1 mt-1 border-l border-brand-light/20 ml-6">
                    {item.subItems.map(subItem => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive ? 'bg-brand-dark/80 text-white font-medium' : 'text-brand-light/80 hover:bg-brand-dark/40 hover:text-white'
                          }`
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={item.path as string}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-brand-dark shadow-md' 
                      : 'hover:bg-brand-dark/50'
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium text-sm">{item.name}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-brand-dark">
        <button 
          onClick={() => {
            onClose();
            logout();
            navigate('/');
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