import { UserX, AlertTriangle, UserCheck, Search } from 'lucide-react';

const MOCK_ABSENCES = [
  { id: 1, student: 'Álvarez, Martina', course: '6to Secundaria - A', reason: 'Enfermedad (Justificada)', total: 4, alert: false },
  { id: 2, student: 'Domínguez, Lucas', course: '3ro Secundaria - B', reason: 'Sin aviso', total: 12, alert: true },
  { id: 3, student: 'Gómez, Sofía', course: '2do Primaria - A', reason: 'Retiro anticipado', total: 2, alert: false },
  { id: 4, student: 'Pérez, Tomás', course: '1ro Secundaria - C', reason: 'Sin aviso', total: 16, alert: true },
];

export default function AsistenciaDiaria() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Listado Diario de Inasistencias</h2>
          <p className="text-gray-500">Monitoreo general - Hoy, 25 de Agosto</p>
        </div>
        <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
          Exportar Parte Diario
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-brand-light text-brand-green rounded-lg">
            <UserCheck size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Presentes</p>
            <p className="text-2xl font-bold text-gray-800">1,385</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-red-50 text-red-600 rounded-lg">
            <UserX size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Ausentes Hoy</p>
            <p className="text-2xl font-bold text-gray-800">35</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm flex items-center gap-4 bg-red-50/30">
          <div className="p-3 bg-red-100 text-red-600 rounded-lg">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p className="text-sm text-red-600 font-medium">Alertas Críticas (&gt;10 faltas)</p>
            <p className="text-2xl font-bold text-red-700">8 Alumnos</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Filtrar alumno o curso..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-green"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-4 font-semibold">Alumno</th>
                <th className="p-4 font-semibold">Curso</th>
                <th className="p-4 font-semibold">Motivo / Detalle</th>
                <th className="p-4 font-semibold text-center">Faltas Acumuladas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_ABSENCES.map((abs) => (
                <tr key={abs.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium text-gray-800">{abs.student}</td>
                  <td className="p-4 text-sm text-gray-600">{abs.course}</td>
                  <td className="p-4 text-sm text-gray-600">{abs.reason}</td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`font-bold ${abs.alert ? 'text-red-600' : 'text-gray-700'}`}>
                        {abs.total}
                      </span>
                      {abs.alert && (
                        <span title="Excede límite permitido" className="inline-flex">
                          <AlertTriangle size={16} className="text-red-500" />
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