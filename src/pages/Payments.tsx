import { AlertCircle, CheckCircle2, Download, ExternalLink } from 'lucide-react';

const MOCK_INVOICES = [
  { id: 'FAC-001', month: 'Marzo 2026', amount: '$ 45.000', status: 'PAID', date: '10/03/2026' },
  { id: 'FAC-002', month: 'Abril 2026', amount: '$ 45.000', status: 'PAID', date: '08/04/2026' },
  { id: 'FAC-003', month: 'Mayo 2026', amount: '$ 45.000', status: 'PAID', date: '10/05/2026' },
  { id: 'FAC-004', month: 'Junio 2026', amount: '$ 45.000', status: 'PENDING', date: 'Vence el 10/06/2026' },
];

export default function Payments() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Pagos y Aranceles</h2>
        <p className="text-gray-500">Estado de cuenta y comprobantes</p>
      </div>

      {/* Alerta de Deuda */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl flex items-start justify-between">
        <div className="flex gap-3">
          <AlertCircle className="text-red-500 mt-0.5" size={20} />
          <div>
            <h3 className="text-red-800 font-bold">Cuota Pendiente</h3>
            <p className="text-red-600 text-sm">La cuota del mes de Junio vence en 5 días.</p>
          </div>
        </div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium text-sm flex items-center gap-2 transition-colors">
          Pagar con Mercado Pago <ExternalLink size={16} />
        </button>
      </div>

      {/* Historial de Pagos */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-bold text-gray-700">Historial de Facturación</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 text-xs uppercase tracking-wider border-b">
                <th className="p-4 font-semibold">Comprobante</th>
                <th className="p-4 font-semibold">Período</th>
                <th className="p-4 font-semibold">Monto</th>
                <th className="p-4 font-semibold">Estado</th>
                <th className="p-4 font-semibold text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_INVOICES.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono text-sm text-gray-500">{invoice.id}</td>
                  <td className="p-4 font-medium text-gray-800">{invoice.month}</td>
                  <td className="p-4 font-bold text-gray-800">{invoice.amount}</td>
                  <td className="p-4">
                    {invoice.status === 'PAID' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle2 size={12} /> Pagado
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Pendiente
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-brand-green transition-colors" title="Descargar comprobante">
                      <Download size={20} />
                    </button>
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