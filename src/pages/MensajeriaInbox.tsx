import { Search, Edit, Star, Paperclip, MoreVertical, Archive, Inbox, Send } from 'lucide-react';

const MOCK_MESSAGES = [
  { id: 1, sender: 'Dirección Académica', subject: 'Cierre de Trimestre - Fechas Límite', preview: 'Estimados docentes, les recordamos que la fecha límite para la carga...', time: '10:30 hs', unread: true, hasAttachment: true },
  { id: 2, sender: 'Pérez, Martín (Tutor)', subject: 'Consulta sobre TP de Tomás', preview: 'Buenos días profesor, le escribo para consultarle sobre la bibliografía...', time: 'Ayer', unread: true, hasAttachment: false },
  { id: 3, sender: 'Secretaría Institucional', subject: 'Reunión de Personal Docente', preview: 'Se convoca a todo el plantel docente a la reunión plenaria del día...', time: '23 Ago', unread: false, hasAttachment: true },
  { id: 4, sender: 'Gómez, Sofía (Alumna)', subject: 'Duda sobre Ecuaciones', preview: 'Profe, no logro resolver el punto 4 del trabajo práctico, me da un...', time: '20 Ago', unread: false, hasAttachment: false },
];

export default function MensajeriaInbox() {
  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Mensajería Institucional</h2>
          <p className="text-gray-500">Bandeja de entrada principal</p>
        </div>
        <button className="px-5 py-2.5 bg-brand-green text-white rounded-lg font-bold flex items-center gap-2 hover:bg-brand-dark transition-colors shadow-sm">
          <Edit size={18} /> Nuevo Mensaje
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row flex-1 min-h-0">
        
        {/* Panel Lateral de Carpetas */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-100 p-4 bg-gray-50/50 flex flex-col gap-2 flex-shrink-0">
          <button className="flex items-center justify-between px-4 py-2.5 bg-brand-light text-brand-dark font-bold rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <Inbox size={18} />
              <span>Entrada</span>
            </div>
            <span className="bg-brand-green text-white text-xs px-2 py-0.5 rounded-full">2</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <Send size={18} />
              <span>Enviados</span>
            </div>
          </button>
          <button className="flex items-center justify-between px-4 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <Archive size={18} />
              <span>Archivados</span>
            </div>
          </button>
        </div>

        {/* Lista de Mensajes */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="p-4 border-b border-gray-100 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Buscar en correos..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-brand-green"
              />
            </div>
          </div>

          <div className="overflow-y-auto flex-1">
            <div className="divide-y divide-gray-100">
              {MOCK_MESSAGES.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors ${msg.unread ? 'bg-brand-light/10' : ''}`}
                >
                  <div className="flex-shrink-0 text-gray-300 hover:text-amber-400 transition-colors">
                    <Star size={18} />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <div className={`w-48 truncate ${msg.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                      {msg.sender}
                    </div>
                    <div className="flex-1 truncate text-sm">
                      <span className={`${msg.unread ? 'font-bold text-gray-800' : 'font-medium text-gray-800'}`}>
                        {msg.subject}
                      </span>
                      <span className="text-gray-500 hidden sm:inline"> - {msg.preview}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {msg.hasAttachment && <Paperclip size={16} className="text-gray-400" />}
                    <span className={`text-xs w-16 text-right ${msg.unread ? 'font-bold text-brand-green' : 'text-gray-500'}`}>
                      {msg.time}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 hidden sm:block">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}