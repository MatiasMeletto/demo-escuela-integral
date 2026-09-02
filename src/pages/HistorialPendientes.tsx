import { Search, Bookmark, Clock, CheckCircle } from 'lucide-react';

const MOCK_PENDING = [
  { id: 1, subject: 'Física', originalYear: '2do Secundaria (2024)', status: 'pending', nextExam: 'Diciembre 2026', book: 'Libro 43, Folio 12' },
  { id: 2, subject: 'Historia Argentina', originalYear: '3ro Secundaria (2025)', status: 'enrolled', nextExam: 'Noviembre 2026 (Mesa Especial)', book: '-' },
  { id: 3, subject: 'Inglés', originalYear: '1ro Secundaria (2023)', status: 'approved', nextExam: 'Aprobada (Julio 2025)', book: 'Libro 40, Folio 89' },
];

export default function HistorialPendientes() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Historial de Materias Pendientes</h2>
          <p className="text-gray-500">Gestión de previas y equivalencias</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por DNI o Apellido..." 
            className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-green"
          />
        </div>
      </div>

      {/* Cabecera del Alumno Seleccionado */}
      <div className="bg-brand-dark text-white p-5 rounded-xl flex items-center justify-between shadow-sm">
        <div>
          <h3 className="text-lg font-bold">Pérez, Tomás</h3>
          <p className="text-brand-light text-sm">4to Secundaria - Turno Mañana | DNI: 45.123.456</p>
        </div>
        <div className="text-right">
          <span className="block text-2xl font-bold text-brand-accent">2</span>
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-light">Previas Activas</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="p-4 font-semibold">Materia Adeudada</th>
                <th className="p-4 font-semibold">Año de Origen</th>
                <th className="p-4 font-semibold text-center">Estado de Mesa</th>
                <th className="p-4 font-semibold text-center">Próximo Llamado</th>
                <th className="p-4 font-semibold">Registro de Acta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_PENDING.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-bold text-gray-800 flex items-center gap-2">
                    <Bookmark size={16} className="text-gray-400" /> {item.subject}
                  </td>
                  <td className="p-4 text-sm text-gray-600">{item.originalYear}</td>
                  <td className="p-4 text-center">
                    {item.status === 'pending' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-100">
                        No Inscripto
                      </span>
                    )}
                    {item.status === 'enrolled' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100">
                        Inscripto
                      </span>
                    )}
                    {item.status === 'approved' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
                        <CheckCircle size={12} className="mr-1" /> Aprobada
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-center text-sm font-medium">
                    {item.status === 'approved' ? (
                      <span className="text-gray-400">{item.nextExam}</span>
                    ) : (
                      <span className="flex items-center justify-center gap-1.5 text-brand-dark">
                        <Clock size={14} /> {item.nextExam}
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-gray-500 font-mono">{item.book}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}