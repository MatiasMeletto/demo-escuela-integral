import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Día en Familia',
    date: '23 de Noviembre, 2025',
    time: '13:00 - 19:00 hs',
    location: 'La Rural, Chivilcoy',
    type: 'Institucional',
    color: 'border-brand-green',
    bg: 'bg-brand-light'
  },
  {
    id: 2,
    title: 'Examen Final de Física',
    date: '28 de Noviembre, 2025',
    time: '10:15 hs',
    location: 'Aula 4B',
    type: 'Académico',
    color: 'border-blue-500',
    bg: 'bg-blue-50'
  },
  {
    id: 3,
    title: 'Vencimiento Cuota Diciembre',
    date: '10 de Diciembre, 2025',
    time: '23:59 hs',
    location: 'Portal de Pagos',
    type: 'Administrativo',
    color: 'border-red-500',
    bg: 'bg-red-50'
  }
];

export default function CalendarView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Calendario Académico</h2>
        <p className="text-gray-500">Eventos, exámenes y vencimientos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Simulación visual de calendario (Mes) */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 text-lg">Noviembre 2025</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded hover:bg-gray-100 flex items-center justify-center font-bold text-gray-500">&lt;</button>
              <button className="w-8 h-8 rounded hover:bg-gray-100 flex items-center justify-center font-bold text-gray-500">&gt;</button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map(day => (
              <div key={day} className="font-semibold text-gray-400 py-1">{day}</div>
            ))}
            {/* Días vacíos para alinear el inicio del mes */}
            {Array.from({ length: 6 }).map((_, i) => <div key={`empty-${i}`}></div>)}
            {/* Días del mes simulados */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i + 1} 
                className={`py-2 rounded-lg cursor-pointer ${
                  i + 1 === 23 ? 'bg-brand-green text-white font-bold shadow' : 
                  i + 1 === 28 ? 'bg-blue-100 text-blue-700 font-bold' : 
                  'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Lista de Eventos */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-gray-800 text-lg mb-4">Próximos Eventos</h3>
          
          {UPCOMING_EVENTS.map(event => (
            <div key={event.id} className={`bg-white rounded-xl shadow-sm border-l-1 ${event.color} border-y border-r border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-transform hover:-translate-y-1`}>
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-lg ${event.bg} mt-1`}>
                  <CalendarIcon className={event.color.replace('border-', 'text-')} size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{event.type}</span>
                  <h4 className="font-bold text-gray-800 text-lg">{event.title}</h4>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <CalendarIcon size={14} className="text-gray-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded text-sm font-medium hover:bg-gray-50 whitespace-nowrap">
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}