import { useState } from 'react';
import { AlertCircle, CheckCircle2, Eye, CheckSquare, Search } from 'lucide-react';

const MOCK_SUBMISSIONS = [
  { id: 1, course: '1ro Secundaria - A', subject: 'Prácticas del Lenguaje', teacher: 'Prof. Gómez, A.', status: 'pending', progress: '15/30' },
  { id: 2, course: '3ro Secundaria - B', subject: 'Matemática', teacher: 'Prof. López, E.', status: 'submitted', progress: '28/28' },
  { id: 3, course: '6to Secundaria - A', subject: 'Física', teacher: 'Prof. Rodríguez, M.', status: 'approved', progress: '32/32' },
  { id: 4, course: '2do Secundaria - C', subject: 'Historia', teacher: 'Prof. Martínez, J.', status: 'pending', progress: '0/25' },
];

export default function ControlPlanillas() {
  const [submissions, setSubmissions] = useState(MOCK_SUBMISSIONS);

  const handleApprove = (id: number) => {
    setSubmissions(submissions.map(s => s.id === id ? { ...s, status: 'approved' } : s));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Control de Calificaciones</h2>
          <p className="text-gray-500">Auditoría y publicación de boletines (1er Trimestre)</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar curso o docente..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-green"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-4 font-semibold">Curso / Materia</th>
                <th className="p-4 font-semibold">Docente</th>
                <th className="p-4 font-semibold text-center">Carga</th>
                <th className="p-4 font-semibold text-center">Estado</th>
                <th className="p-4 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {submissions.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-gray-800">{row.course}</p>
                    <p className="text-xs text-gray-500">{row.subject}</p>
                  </td>
                  <td className="p-4 text-sm text-gray-700">{row.teacher}</td>
                  <td className="p-4 text-center text-sm font-medium text-gray-600">{row.progress}</td>
                  <td className="p-4 text-center">
                    {row.status === 'pending' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        <AlertCircle size={12} /> Pendiente
                      </span>
                    )}
                    {row.status === 'submitted' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        <CheckCircle2 size={12} /> Entregado
                      </span>
                    )}
                    {row.status === 'approved' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-brand-light text-brand-dark border border-brand-green/30">
                        <CheckSquare size={12} /> Aprobado
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-brand-green transition-colors" title="Revisar notas">
                      <Eye size={18} />
                    </button>
                    {row.status === 'submitted' && (
                      <button 
                        onClick={() => handleApprove(row.id)}
                        className="px-3 py-1.5 bg-brand-green text-white text-xs font-bold rounded hover:bg-brand-dark transition-colors"
                      >
                        Aprobar
                      </button>
                    )}
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