import { BookOpen } from 'lucide-react';

const MOCK_GRADES = [
  { id: 1, subject: 'Matemática Avanzada', teacher: 'Prof. García', q1: 8, q2: 9, q3: '-', final: '-' },
  { id: 2, subject: 'Historia Argentina', teacher: 'Prof. López', q1: 9, q2: 9, q3: '-', final: '-' },
  { id: 3, subject: 'Literatura', teacher: 'Prof. Martínez', q1: 7, q2: 8, q3: '-', final: '-' },
  { id: 4, subject: 'Física', teacher: 'Prof. Rodríguez', q1: 10, q2: 9, q3: '-', final: '-' },
  { id: 5, subject: 'Inglés', teacher: 'Prof. Smith', q1: 8, q2: 8, q3: '-', final: '-' },
];

export default function Grades() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Calificaciones</h2>
          <p className="text-gray-500">Boletín del Ciclo Lectivo Actual</p>
        </div>
        <button className="px-4 py-2 bg-brand-light text-brand-green border border-brand-green/20 rounded font-medium hover:bg-brand-green hover:text-white transition-colors">
          Descargar Boletín (PDF)
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-green text-white text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Materia / Docente</th>
                <th className="p-4 font-semibold text-center w-24">1° Trim</th>
                <th className="p-4 font-semibold text-center w-24">2° Trim</th>
                <th className="p-4 font-semibold text-center w-24">3° Trim</th>
                <th className="p-4 font-semibold text-center w-24">Final</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_GRADES.map((grade) => (
                <tr key={grade.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded text-gray-500">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{grade.subject}</p>
                        <p className="text-xs text-gray-500">{grade.teacher}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center font-medium text-gray-700">{grade.q1}</td>
                  <td className="p-4 text-center font-medium text-gray-700">{grade.q2}</td>
                  <td className="p-4 text-center text-gray-400">{grade.q3}</td>
                  <td className="p-4 text-center font-bold text-brand-green">{grade.final}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}