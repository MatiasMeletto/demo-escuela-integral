import { useState } from 'react';
import { FileText, CheckCircle2, PenTool } from 'lucide-react';

const MOCK_AUTH = [
  { id: 1, title: 'Excursión a La Rural', student: 'Tomás Pérez', date: '23/11/2025', status: 'pending', desc: 'Autorización para asistir al predio La Rural en el marco del Día en Familia.' },
  { id: 2, title: 'Uso de Imagen Institucional', student: 'Tomás Pérez', date: 'Anual 2026', status: 'signed', desc: 'Consentimiento para publicación de fotos en redes oficiales del colegio.' },
  { id: 3, title: 'Retiro Anticipado - Torneo Deportivo', student: 'Sofía Pérez', date: '15/10/2025', status: 'signed', desc: 'Autorización para retirarse a las 14:00hs con el transporte escolar.' },
];

export default function Authorizations() {
  const [auths, setAuths] = useState(MOCK_AUTH);

  const handleSign = (id: number) => {
    setAuths(auths.map(a => a.id === id ? { ...a, status: 'signed' } : a));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Autorizaciones y Permisos</h2>
        <p className="text-gray-500">Firma digital de documentos institucionales</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          {auths.map((auth) => (
            <div key={auth.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50 transition-colors">
              <div className="flex gap-4 items-start">
                <div className={`p-3 rounded-xl mt-1 ${auth.status === 'signed' ? 'bg-green-50 text-green-600' : 'bg-brand-light text-brand-green'}`}>
                  {auth.status === 'signed' ? <CheckCircle2 size={24} /> : <FileText size={24} />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-800 text-lg">{auth.title}</h3>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {auth.student}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{auth.desc}</p>
                  <p className="text-xs font-medium text-gray-400">Fecha/Período: {auth.date}</p>
                </div>
              </div>

              <div className="flex-shrink-0 flex items-center justify-end">
                {auth.status === 'pending' ? (
                  <button 
                    onClick={() => handleSign(auth.id)}
                    className="px-6 py-2.5 bg-brand-green text-white font-bold rounded-lg flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-sm"
                  >
                    <PenTool size={16} /> Firmar Permiso
                  </button>
                ) : (
                  <div className="px-6 py-2.5 border border-green-200 bg-green-50 text-green-700 font-bold rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={16} /> Firmado Digitalmente
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}