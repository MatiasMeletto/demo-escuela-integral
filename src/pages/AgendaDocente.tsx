import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const WEEK_SCHEDULE = [
  { day: 'Lunes', date: '24 Ago', events: [
      { id: 1, type: 'class', title: 'Matemática Avanzada', time: '08:00 - 10:00', location: 'Aula 4B', badge: '6to Sec.' },
      { id: 2, type: 'exam', title: 'Evaluación Unidad 3', time: '10:15 - 12:15', location: 'Aula 2A', badge: '4to Sec.' }
    ]
  },
  { day: 'Martes', date: '25 Ago', events: [
      { id: 3, type: 'class', title: 'Física', time: '10:15 - 12:15', location: 'Laboratorio 1', badge: '5to Sec.' }
    ]
  },
  { day: 'Miércoles', date: '26 Ago', events: [
      { id: 4, type: 'meeting', title: 'Reunión de Departamento', time: '13:00 - 14:00', location: 'Sala de Profesores', badge: 'Institucional' },
      { id: 5, type: 'class', title: 'Matemática Básica', time: '14:30 - 16:30', location: 'Aula 1C', badge: '1er Año' }
    ]
  }
];

export default function AgendaDocente() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Planificación Semanal</h2>
          <p className="text-gray-500">Agenda académica y eventos institucionales</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm">
            <button className="p-2 text-gray-500 hover:text-brand-green hover:bg-gray-50 rounded-l-lg transition-colors"><ChevronLeft size={20} /></button>
            <span className="px-4 py-2 font-bold text-gray-700 text-sm border-x border-gray-200">24 Ago - 30 Ago</span>
            <button className="p-2 text-gray-500 hover:text-brand-green hover:bg-gray-50 rounded-r-lg transition-colors"><ChevronRight size={20} /></button>
          </div>
          <button className="px-4 py-2.5 bg-brand-green text-white rounded-lg font-bold flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-sm">
            <Plus size={18} /> Agregar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {WEEK_SCHEDULE.map((day) => (
          <div key={day.date} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-gray-800 text-lg">{day.day}</h3>
              <span className="text-sm font-medium text-gray-500">{day.date}</span>
            </div>
            
            <div className="p-4 flex-1 space-y-4">
              {day.events.length > 0 ? day.events.map((ev) => (
                <div 
                  key={ev.id} 
                  className={`p-4 rounded-lg border-1 shadow-sm ${
                    ev.type === 'class' ? 'bg-white border-brand-green' : 
                    ev.type === 'exam' ? 'bg-red-50 border-red-500' : 
                    'bg-amber-50 border-amber-500'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      ev.type === 'class' ? 'bg-brand-light text-brand-dark' : 
                      ev.type === 'exam' ? 'bg-red-100 text-red-700' : 
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {ev.badge}
                    </span>
                    {ev.type === 'exam' && <span className="text-xs font-bold text-red-600">EVALUACIÓN</span>}
                  </div>
                  
                  <h4 className="font-bold text-gray-800 mb-3">{ev.title}</h4>
                  
                  <div className="space-y-1.5 text-sm text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gray-400" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-gray-400" />
                      <span>{ev.location}</span>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 py-10">
                  <CalendarIcon size={32} className="mb-2 opacity-50" />
                  <p className="text-sm font-medium">Sin actividades</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}