import { BookOpen, CreditCard, Award, Calendar } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Tarjetas de Resumen (Widgets) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-brand-light text-brand-green rounded-lg">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Materias en Curso</p>
            <p className="text-2xl font-bold text-gray-800">12</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-brand-light text-brand-green rounded-lg">
            <Award size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Promedio General</p>
            <p className="text-2xl font-bold text-gray-800">8.75</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-red-50 text-red-600 rounded-lg">
            <CreditCard size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Estado de Cuenta</p>
            <p className="text-lg font-bold text-red-600">Vence en 5 días</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Banner Institucional (Basado en la imagen) */}
        <div className="lg:col-span-2 bg-brand-green text-white rounded-xl shadow-md overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Calendar size={120} />
          </div>
          <div className="p-8 relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-brand-light text-sm font-semibold tracking-widest uppercase mb-1">Liga de Padres de Familia</p>
                <h2 className="text-3xl font-bold leading-tight">VENÍ A DISFRUTAR UN<br/>DÍA EN FAMILIA...</h2>
              </div>
              <div className="text-right">
                <p className="font-bold text-xl">23/11/25</p>
                <p className="text-sm text-brand-light">La Rural, Chivilcoy</p>
              </div>
            </div>

            <div className="bg-brand-dark/40 rounded-lg p-5 backdrop-blur-sm mb-4">
              <h3 className="font-semibold mb-3 border-b border-brand-light/20 pb-2">Cronograma de Actividades</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm font-medium">
                <li className="flex justify-between"><span>Signos de lo Decadente</span> <span>13:00hs</span></li>
                <li className="flex justify-between"><span>Bendición Padre Ricardo</span> <span>13:30hs</span></li>
                <li className="flex justify-between"><span>Banda Tres Cuerpos</span> <span>14:00hs</span></li>
                <li className="flex justify-between"><span>Show de Magia y Stand Up</span> <span>15:00hs</span></li>
                <li className="flex justify-between"><span>Obra de Teatro 6to prim.</span> <span>15:30hs</span></li>
                <li className="flex justify-between text-brand-accent"><span>Bartomeo Gabriel</span> <span>16:00hs</span></li>
                <li className="flex justify-between"><span>Baile Expresarts</span> <span>16:30hs</span></li>
                <li className="flex justify-between"><span>La Volátil</span> <span>17:00hs</span></li>
                <li className="flex justify-between"><span>Feliz Cumpleaños</span> <span>17:30hs</span></li>
                <li className="flex justify-between"><span>Los Cata & Chacarera 6to sec.</span> <span>18:00hs</span></li>
              </ul>
            </div>
            
            <div className="flex items-center gap-3 bg-white text-brand-green py-2 px-4 rounded font-bold text-sm inline-block">
              SERVICIO DE CANTINA - Podés traer tu lona, equipo de mate y reposeras
            </div>
          </div>
        </div>

        {/* Panel lateral derecho (Notificaciones menores) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Actividad Reciente</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-brand-green flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">Nota cargada: Matemática</p>
                <p className="text-xs text-gray-500">Ayer, 18:30hs</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">Aviso de Vencimiento de Cuota</p>
                <p className="text-xs text-gray-500">Hace 2 días</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}