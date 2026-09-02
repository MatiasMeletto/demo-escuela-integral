import { Save, Search, Check, AlertCircle, FileSpreadsheet } from 'lucide-react';

const MOCK_STUDENTS = [
  { id: 1, name: 'Álvarez, Martina', q1: '8', q2: '9', rite: 'TEA', obs: 'Excelente participación en clase.' },
  { id: 2, name: 'Domínguez, Lucas', q1: '6', q2: '5', rite: 'TEP', obs: 'Falta entregar TP2. Requiere apoyo.' },
  { id: 3, name: 'Gómez, Sofía', q1: '9', q2: '10', rite: 'TEA', obs: '' },
  { id: 4, name: 'Pérez, Tomás', q1: '4', q2: '', rite: 'TED', obs: 'Inasistencias reiteradas afectan rendimiento.' },
];

export default function CargaPlanillas() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Carga de Planillas y Observaciones</h2>
          <p className="text-gray-500">Matemática Avanzada - 6to Secundaria (Ciclo 2026)</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-sm font-medium text-gray-400">
            <Check size={16} /> Guardado hace 2 min
          </span>
          <button className="px-5 py-2.5 bg-brand-green text-white rounded-lg font-bold flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-sm">
            <Save size={18} /> Guardar Cambios
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        {/* Barra de herramientas de la tabla */}
        <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50 items-center">
          <div className="p-2 bg-brand-light text-brand-green rounded">
            <FileSpreadsheet size={20} />
          </div>
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar alumno..." 
              className="w-full pl-9 pr-4 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-brand-green"
            />
          </div>
        </div>

        {/* Grilla Interactiva */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-3 font-semibold w-12 text-center">N°</th>
                <th className="p-3 font-semibold min-w-[200px]">Alumno</th>
                <th className="p-3 font-semibold text-center w-24 border-l border-gray-100">1° Trim</th>
                <th className="p-3 font-semibold text-center w-24 border-l border-gray-100">2° Trim</th>
                <th className="p-3 font-semibold text-center w-32 border-l border-gray-100 bg-brand-light/50">Valoración RITE</th>
                <th className="p-3 font-semibold border-l border-gray-100">Observaciones Docentes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_STUDENTS.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50/50 focus-within:bg-brand-light/20 transition-colors">
                  <td className="p-3 text-center text-sm font-medium text-gray-400">{student.id}</td>
                  <td className="p-3 font-medium text-gray-800">{student.name}</td>
                  <td className="p-2 border-l border-gray-100">
                    <input type="text" defaultValue={student.q1} className="w-full text-center py-1.5 bg-gray-50 border border-gray-200 rounded text-gray-700 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none" />
                  </td>
                  <td className="p-2 border-l border-gray-100">
                    <input type="text" defaultValue={student.q2} className="w-full text-center py-1.5 bg-gray-50 border border-gray-200 rounded text-gray-700 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none" />
                  </td>
                  <td className="p-2 border-l border-gray-100 bg-brand-light/20">
                    <select defaultValue={student.rite} className="w-full py-1.5 px-2 bg-white border border-gray-300 rounded text-sm font-medium focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none">
                      <option value="TEA">TEA</option>
                      <option value="TEP">TEP</option>
                      <option value="TED">TED</option>
                      <option value="-">Sin evaluar</option>
                    </select>
                  </td>
                  <td className="p-2 border-l border-gray-100">
                    <div className="flex items-center gap-2">
                      <input type="text" defaultValue={student.obs} placeholder="Añadir observación..." className="w-full py-1.5 px-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none" />
                      {student.rite === 'TED' && !student.obs && (
                        <span title="Observación obligatoria para TED" className="inline-flex">
                          <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                        </span>
                      )}
                    </div>
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