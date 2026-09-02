import { Plus, Paperclip, Users, Clock, CheckCircle, FileText, Search, MoreVertical } from 'lucide-react';

const MOCK_TASKS = [
  { id: 1, title: 'Trabajo Práctico N° 3: Ecuaciones', course: '6to Secundaria', dueDate: 'Mañana, 23:59 hs', delivered: 24, total: 30, status: 'active' },
  { id: 2, title: 'Lectura: Capítulo 4 y Cuestionario', course: '6to Secundaria', dueDate: 'Viernes, 12:00 hs', delivered: 5, total: 30, status: 'active' },
  { id: 3, title: 'Evaluación Diagnóstica', course: '5to Secundaria', dueDate: 'Semana pasada', delivered: 28, total: 28, status: 'closed' },
];

export default function GestionTareas() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Tareas y Trabajos Prácticos</h2>
          <p className="text-gray-500">Gestión de entregas del aula virtual</p>
        </div>
        <button className="px-5 py-2.5 bg-brand-green text-white font-bold rounded-lg flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-sm">
          <Plus size={18} /> Crear Nueva Tarea
        </button>
      </div>

      {/* Buscador y Filtros */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar tarea..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-green"
          />
        </div>
        <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 outline-none focus:border-brand-green">
          <option>Todos los cursos</option>
          <option>6to Secundaria</option>
          <option>5to Secundaria</option>
        </select>
      </div>

      {/* Listado de Tareas */}
      <div className="grid grid-cols-1 gap-4">
        {MOCK_TASKS.map((task) => (
          <div key={task.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-green/50 transition-colors">
            
            <div className="flex gap-4 items-start flex-1">
              <div className={`p-3 rounded-xl mt-1 flex-shrink-0 ${task.status === 'active' ? 'bg-brand-light text-brand-green' : 'bg-gray-100 text-gray-500'}`}>
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">{task.title}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5 font-medium px-2 py-0.5 bg-gray-100 rounded text-gray-700">
                    {task.course}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gray-400" /> Vence: {task.dueDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Paperclip size={14} className="text-gray-400" /> 2 Adjuntos
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
              {/* Indicador de Entregas */}
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  <Users size={16} className="text-gray-400" />
                  <span className="text-sm font-bold text-gray-800">
                    Entregas: {task.delivered} / {task.total}
                  </span>
                </div>
                <div className="w-32 bg-gray-200 rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full ${task.delivered === task.total ? 'bg-green-500' : 'bg-brand-accent'}`} 
                    style={{ width: `${(task.delivered / task.total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
                  Corregir
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}