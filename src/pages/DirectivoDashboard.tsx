import { Users, TrendingUp, AlertCircle, DollarSign, Settings, FileText, Brain, Bookmark, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DirectivoDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Panel Administrativo</h2>
        <p className="text-gray-500">Supervisión operativa e institucional</p>
      </div>

      {/* Sección: Panel de Acceso Rápido */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">Panel de acceso rápido</h3>
          <button className="text-sm font-medium text-brand-green flex items-center gap-1.5 hover:underline">
            <Settings size={16} /> Modificar
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/planillas/control" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-green hover:shadow-md transition-all text-brand-dark">
            <FileText size={24} className="mb-2 text-brand-green" />
            <span className="text-sm font-medium">Control Planillas</span>
          </Link>
          <Link to="/inasistencia/diario" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-green hover:shadow-md transition-all text-brand-dark">
            <UserCheck size={24} className="mb-2 text-brand-green" />
            <span className="text-sm font-medium">Asistencia Diaria</span>
          </Link>
          <Link to="/eoe/ficha" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-green hover:shadow-md transition-all text-brand-dark">
            <Brain size={24} className="mb-2 text-brand-green" />
            <span className="text-sm font-medium">Ficha E.O.E</span>
          </Link>
          <Link to="/pendientes/historial" className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-brand-green hover:shadow-md transition-all text-brand-dark">
            <Bookmark size={24} className="mb-2 text-brand-green" />
            <span className="text-sm font-medium">Historial Previas</span>
          </Link>
        </div>
      </div>

      {/* Sección: Panel de Gestión y Métricas */}
      <div className="pt-6 border-t border-gray-200 space-y-6">
        <h3 className="text-lg font-bold text-gray-800">Panel de gestión y métricas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Matrícula Activa</p>
              <p className="text-2xl font-bold text-gray-800">1,420</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-brand-light text-brand-green rounded-lg">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Asistencia Promedio</p>
              <p className="text-2xl font-bold text-gray-800">94.5%</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Recaudación Mensual</p>
              <p className="text-2xl font-bold text-gray-800">$ 45.2M</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-600 rounded-lg">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Índice de Morosidad</p>
              <p className="text-2xl font-bold text-red-600">8.2%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Flujo de Ingresos (Últimos 6 meses)</h3>
            <div className="h-64 flex items-end justify-between gap-4 mt-8 pb-6 border-b border-dashed border-gray-200 relative">
              <div className="absolute w-full top-1/2 border-t border-dashed border-gray-100 -z-10"></div>
              {[40, 55, 45, 60, 75, 65].map((height, i) => (
                <div key={i} className="w-full bg-brand-light rounded-t-md relative flex flex-col justify-end h-full">
                  <div 
                    className="w-full bg-brand-green rounded-t-md transition-all hover:bg-brand-dark cursor-pointer"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 font-medium">
                    {['May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Alertas Administrativas</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">45 familias con deuda &gt; 60 días</p>
                  <p className="text-xs text-gray-500">Requiere gestión de cobranza</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand-accent flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Licencia docente: Prof. López</p>
                  <p className="text-xs text-gray-500">Historia Argentina - 6to Sec.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-brand-green flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Liquidación SIRO/MP exitosa</p>
                  <p className="text-xs text-gray-500">Hoy, 09:15hs</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-gray-50 text-gray-600 rounded text-sm font-medium hover:bg-gray-100 transition-colors border border-gray-200">
              Exportar Reporte Mensual
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}