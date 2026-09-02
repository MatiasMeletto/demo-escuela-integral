import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';

// Vistas Generales
import Dashboard from './pages/Dashboard';
import DirectivoDashboard from './pages/DirectivoDashboard';
import Courses from './pages/Courses';
import CalendarView from './pages/CalendarView';

// Vistas de Alumno/Padre
import Grades from './pages/Grades';
import Payments from './pages/Payments';
import ParentDashboard from './pages/ParentDashboard';
import Authorizations from './pages/Authorizations';

// Vistas de Profesor
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherGrades from './pages/TeacherGrades';
import GestionTareas from './pages/GestionTareas';
import CargaPlanillas from './pages/CargaPlanillas';
import AgendaDocente from './pages/AgendaDocente';
import MensajeriaInbox from './pages/MensajeriaInbox';

// Vistas de Administrador
import ControlPlanillas from './pages/ControlPlanillas';
import AsistenciaDiaria from './pages/AsistenciaDiaria';
import FichaPedagogica from './pages/FichaPedagogica';
import HistorialPendientes from './pages/HistorialPendientes';


function AppRoutes() {
  const { role } = useAuth();

  if (!role) {
    return <Login />;
  }

  // Componentes Condicionales basados en el Rol
  const DashboardComponent = 
    role === 'administrador' ? <DirectivoDashboard /> : 
    role === 'profesor' ? <TeacherDashboard /> : 
    role === 'padre' ? <ParentDashboard /> : 
    <Dashboard />;

  const GradesComponent = 
    role === 'profesor' ? <TeacherGrades /> : 
    <Grades />;

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={DashboardComponent} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/notas" element={GradesComponent} />
        <Route path="/pagos" element={<Payments />} />
        <Route path="/calendario" element={<CalendarView />} />
        
        {/* Rutas exclusivas del rol Padre */}
        <Route path="/autorizaciones" element={<Authorizations />} />

        <Route path="/planillas/cargar" element={<CargaPlanillas />} />
        <Route path="/tareas/gestionar" element={<GestionTareas />} />
        <Route path="/mensajeria/inbox" element={<MensajeriaInbox />} />
        <Route path="/agenda" element={<AgendaDocente />} />

        <Route path="/planillas/control" element={<ControlPlanillas />} />
        <Route path="/inasistencia/diario" element={<AsistenciaDiaria />} />
        <Route path="/eoe/ficha" element={<FichaPedagogica />} />
        <Route path="/pendientes/historial" element={<HistorialPendientes />} />
        
        <Route path="*" element={<div className="text-center text-gray-500 mt-20">Módulo no construido en la demo.</div>} />
      </Routes>
    </MainLayout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}