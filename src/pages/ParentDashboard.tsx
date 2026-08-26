import { useState } from 'react';
import { User, GraduationCap, AlertCircle, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

const CHILDREN = [
  { id: 1, name: 'Tomás Pérez', grade: '6to Año - Secundaria', status: 'regular' },
  { id: 2, name: 'Sofía Pérez', grade: '3er Grado - Primaria', status: 'warning' }
];

export default function ParentDashboard() {
  const [activeChild, setActiveChild] = useState(CHILDREN[0]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Resumen Familiar</h2>
          <p className="text-gray-500">Supervisión académica y administrativa</p>
        </div>
        
        {/* Selector de Hijo */}
        <div className="relative">
          <button className="flex items-center gap-3 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors w-full md:w-64 justify-between">
            <div className="flex items-center gap-2 text-left">
              <div className="w-8 h-8 bg-brand-light text-brand-green rounded-full flex items-center justify-center font-bold">
                <User size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 leading-tight">{activeChild.name}</p>
                <p className="text-xs text-gray-500">{activeChild.grade}</p>
              </div>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Principal - Info del Alumno */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 flex-shrink-0">
              <User size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800">{activeChild.name}</h3>
              <p className="text-brand-green font-medium mb-3">{activeChild.grade}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-200">
                  Asistencia: 98%
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Promedio: 8.75
                </span>
                {activeChild.status === 'warning' && (
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-sm font-medium rounded-full border border-red-200">
                    Aviso de Conducta
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold border-b pb-2">
                <GraduationCap size={18} className="text-brand-green" />
                Rendimiento Reciente
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Física - Trabajo Práctico</span>
                  <span className="font-bold text-gray-800">9 (Nueve)</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Literatura - Evaluación</span>
                  <span className="font-bold text-gray-800">8 (Ocho)</span>
                </li>
              </ul>
              <button className="w-full mt-4 text-sm text-brand-green font-bold hover:underline">Ver Boletín Completo</button>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold border-b pb-2">
                <CalendarIcon size={18} className="text-brand-green" />
                Próximos Compromisos
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Examen Matemática</span>
                  <span className="text-gray-500 font-medium">Mañana, 08:00hs</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Día en Familia</span>
                  <span className="text-gray-500 font-medium">23/11/25</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Columna Lateral - Notificaciones Familiares */}
        <div className="space-y-6">
          <div className="bg-red-50 rounded-xl border border-red-100 p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-red-500 mt-0.5" size={20} />
              <div>
                <h3 className="font-bold text-red-800 mb-1">Vencimiento Próximo</h3>
                <p className="text-sm text-red-600 mb-3">La cuota mensual del grupo familiar vence en 5 días.</p>
                <button className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition-colors">
                  Ir a Pagos
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Comunicados</h3>
            <div className="space-y-4 text-sm">
              <div className="border-l-2 border-brand-accent pl-3">
                <p className="font-bold text-gray-800">Reunión de Padres (3ro Primaria)</p>
                <p className="text-gray-500 mt-1">Se cita a los tutores de Sofía Pérez el día Jueves a las 17:30hs.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}