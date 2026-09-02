import { Clock, Users, ChevronRight } from 'lucide-react';

const MOCK_COURSES = [
  { id: 1, name: 'Matemática Avanzada', teacher: 'Prof. García', schedule: 'Lun y Mié - 08:00 a 10:00', progress: 75, color: 'border-blue-600' },
  { id: 2, name: 'Historia Argentina', teacher: 'Prof. López', schedule: 'Mar y Jue - 10:15 a 12:15', progress: 60, color: 'border-amber-600' },
  { id: 3, name: 'Literatura', teacher: 'Prof. Martínez', schedule: 'Viernes - 08:00 a 11:00', progress: 90, color: 'border-purple-600' },
  { id: 4, name: 'Física', teacher: 'Prof. Rodríguez', schedule: 'Lunes - 10:15 a 12:15', progress: 45, color: 'border-yellow-400' },
];

export default function Courses() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Mis Cursos</h2>
        <p className="text-gray-500">Material de estudio y aulas virtuales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_COURSES.map((course) => (
          <div key={course.id} className={`bg-white rounded-xl shadow-sm border-2 ${course.color} overflow-hidden flex flex-col hover:shadow-md transition-shadow`}>
            {/* Cabecera de la tarjeta */}
            <div className="p-5 flex-1">
              <h3 className="font-bold text-lg text-gray-800 mb-1">{course.name}</h3>
              
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} className="text-gray-400" />
                  <span>{course.teacher}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} className="text-gray-400" />
                  <span>{course.schedule}</span>
                </div>
              </div>
            </div>
            
            {/* Footer de la tarjeta con acción */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <button className="w-full flex items-center justify-between text-sm font-semibold text-brand-dark hover:text-brand-green transition-colors">
                <span>Ingresar a Tareas</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}