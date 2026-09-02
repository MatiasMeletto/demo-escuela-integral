import { BookOpen, CheckSquare, Clock, Users, Calendar, Settings, FileSpreadsheet, CheckCircle, Inbox } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Panel Docente</h2>
        <p className="text-gray-500">Resumen operativo y tareas pendientes</p>
      </div>

      {/* Sección: Panel de Acceso Rápido */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">Panel de acceso rápido</h3>
          <button className="text-sm font-medium text-brand-green flex items-center gap-1.5 hover:underline">
            <Settings size={16} /> Modificar
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/planillas/cargar" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-green hover:shadow-md transition-all text-brand-dark">
            <FileSpreadsheet size={24} className="mb-2 text-brand-green" />
            <span className="text-sm font-medium">Cargar Planillas</span>
          </Link>
          <Link to="/tareas/gestionar" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-green hover:shadow-md transition-all text-brand-dark">
            <CheckCircle size={24} className="mb-2 text-brand-green" />
            <span className="text-sm font-medium">Gestión Tareas</span>
          </Link>
          <Link to="/mensajeria/inbox" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-green hover:shadow-md transition-all text-brand-dark">
            <Inbox size={24} className="mb-2 text-brand-green" />
            <span className="text-sm font-medium">Bandeja Entrada</span>
          </Link>
          <Link to="/agenda" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-green hover:shadow-md transition-all text-brand-dark">
            <Calendar size={24} className="mb-2 text-brand-green" />
            <span className="text-sm font-medium">Agenda</span>
          </Link>
        </div>
      </div>

      {/* Sección: Panel de Gestión y Métricas */}
      <div className="pt-6 border-t border-gray-200 space-y-6">
        <h3 className="text-lg font-bold text-gray-800">Panel de gestión y métricas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-brand-light text-brand-green rounded-lg">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Clases de Hoy</p>
              <p className="text-2xl font-bold text-gray-800">3</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
              <CheckSquare size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Por Corregir</p>
              <p className="text-2xl font-bold text-gray-800">28</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Alumnos a cargo</p>
              <p className="text-2xl font-bold text-gray-800">95</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100 bg-gray-50">
              <h3 className="font-bold text-gray-800">Agenda de Hoy</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { time: '08:00 - 10:00', class: 'Matemática Avanzada', year: '6to Secundaria', room: 'Aula 4B', status: 'Finalizado' },
                { time: '10:15 - 12:15', class: 'Física', year: '5to Secundaria', room: 'Laboratorio 1', status: 'En curso' },
                { time: '13:00 - 15:00', class: 'Matemática Básica', year: '1er Año', room: 'Aula 2A', status: 'Pendiente' },
              ].map((item, idx) => (
                <div key={idx} className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="text-center font-bold text-brand-green bg-brand-light px-3 py-2 rounded-lg">
                      {item.time.split(' - ')[0]}<br/>
                      <span className="text-xs font-medium text-gray-500">{item.time.split(' - ')[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{item.class}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                        <Users size={14} /> {item.year} | <Clock size={14} /> {item.room}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      item.status === 'En curso' ? 'bg-brand-green text-white' :
                      item.status === 'Finalizado' ? 'bg-gray-200 text-gray-600' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-brand-green text-white rounded-xl shadow-sm p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Clase Actual</h3>
              <p className="text-sm text-brand-light mb-4">La clase de Física ha comenzado. Registre la asistencia y novedades del aula.</p>
              <button className="w-full py-2 bg-white text-brand-green font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Abrir Planilla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}