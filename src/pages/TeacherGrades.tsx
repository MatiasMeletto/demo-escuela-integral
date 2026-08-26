import { Save, Search, Filter } from 'lucide-react';

const MOCK_STUDENTS = [
  { id: 1, name: 'Álvarez, Martina', q1: '8', q2: '9', q3: '' },
  { id: 2, name: 'Domínguez, Lucas', q1: '6', q2: '7', q3: '' },
  { id: 3, name: 'Gómez, Sofía', q1: '9', q2: '10', q3: '' },
  { id: 4, name: 'Pérez, Tomás', q1: '8', q2: '9', q3: '' },
  { id: 5, name: 'Romero, Valentina', q1: '10', q2: '9', q3: '' },
];

export default function TeacherGrades() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Carga de Calificaciones</h2>
          <p className="text-gray-500">Matemática Avanzada - 6to Secundaria</p>
        </div>
        <button className="px-5 py-2.5 bg-brand-green text-white rounded-lg font-bold flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-sm">
          <Save size={18} /> Guardar Cambios
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Barra de herramientas */}
        <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar alumno..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50">
            <Filter size={16} /> Trimestre Actual
          </button>
        </div>

        {/* Grilla Editable */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-4 font-semibold w-16 text-center">N°</th>
                <th className="p-4 font-semibold">Apellido y Nombre</th>
                <th className="p-4 font-semibold text-center w-28 border-l border-gray-100">1° Trim</th>
                <th className="p-4 font-semibold text-center w-28 border-l border-gray-100">2° Trim</th>
                <th className="p-4 font-semibold text-center w-28 border-l border-gray-100 bg-brand-light text-brand-dark">3° Trim</th>
                <th className="p-4 font-semibold text-center w-28 border-l border-gray-100">Promedio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_STUDENTS.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 text-center text-sm font-medium text-gray-400">{student.id}</td>
                  <td className="p-4 font-medium text-gray-800">{student.name}</td>
                  <td className="p-3 border-l border-gray-100">
                    <input type="text" defaultValue={student.q1} disabled className="w-full text-center py-1.5 bg-gray-50 border border-transparent rounded text-gray-500" />
                  </td>
                  <td className="p-3 border-l border-gray-100">
                    <input type="text" defaultValue={student.q2} disabled className="w-full text-center py-1.5 bg-gray-50 border border-transparent rounded text-gray-500" />
                  </td>
                  <td className="p-3 border-l border-gray-100 bg-brand-light/30">
                    <input type="text" defaultValue={student.q3} className="w-full text-center py-1.5 border border-gray-300 rounded bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none font-bold text-brand-dark" />
                  </td>
                  <td className="p-4 text-center font-bold text-gray-700 border-l border-gray-100">
                    {((Number(student.q1) + Number(student.q2)) / 2).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}