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
        
        <Route path="*" element={<div className="text-center text-gray-500 mt-20">Módulo en construcción para este rol.</div>} />
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