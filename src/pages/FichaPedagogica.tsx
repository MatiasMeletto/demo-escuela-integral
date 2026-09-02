import { User, Brain, FileText, Calendar, PlusCircle } from 'lucide-react';

const MOCK_INTERVENTIONS = [
  { id: 1, date: '15/08/2026', type: 'Entrevista a Padres', professional: 'Lic. Ruiz (Psicopedagoga)', notes: 'Se acordó esquema de apoyo escolar para Matemática. La familia se compromete a supervisar tareas.' },
  { id: 2, date: '02/06/2026', type: 'Observación Áulica', professional: 'Lic. Ruiz (Psicopedagoga)', notes: 'Dificultad sostenida en la concentración durante la primera hora de clase. Se sugiere reubicación en primera fila.' },
];

export default function FichaPedagogica() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Ficha Pedagógica (E.O.E)</h2>
          <p className="text-gray-500">Equipo de Orientación Escolar</p>
        </div>
        <button className="px-4 py-2 bg-brand-green text-white font-bold rounded-lg flex items-center gap-2 hover:bg-brand-dark transition-colors">
          <PlusCircle size={18} /> Nueva Intervención
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna Izquierda: Perfil del Alumno */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
              <User size={48} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Domínguez, Lucas</h3>
            <p className="text-brand-green font-medium mb-4">3ro Secundaria - B</p>
            
            <div className="text-left space-y-3 mt-6 pt-6 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Legajo Interno</p>
                <p className="text-sm font-medium text-gray-800">#4829-2023</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Diagnóstico P.P.I</p>
                <span className="inline-block mt-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-200">
                  Déficit de Atención (TDAH)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Historial y Detalles */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tarjeta de Resumen Pedagógico */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
              <Brain className="text-brand-green" size={20} />
              <h3 className="font-bold text-gray-800">Perfil de Aprendizaje</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              El alumno presenta habilidades destacadas en comprensión lectora y expresión oral. Sin embargo, muestra labilidad atencional en tareas que requieren razonamiento lógico-matemático prolongado. Requiere consignas cortas, claras y supervisión periódica para completar las actividades en tiempo y forma.
            </p>
          </div>

          {/* Historial de Intervenciones */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-gray-100">
              <FileText className="text-brand-green" size={20} />
              <h3 className="font-bold text-gray-800">Registro de Intervenciones</h3>
            </div>
            
            <div className="space-y-6">
              {MOCK_INTERVENTIONS.map((intervention) => (
                <div key={intervention.id} className="relative pl-6 border-l-2 border-brand-light">
                  <div className="absolute w-3 h-3 bg-brand-green rounded-full -left-[7px] top-1"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-800 text-sm">{intervention.type}</h4>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <Calendar size={12} /> {intervention.date}
                    </span>
                  </div>
                  <p className="text-xs text-brand-green font-medium mb-2">{intervention.professional}</p>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    {intervention.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}