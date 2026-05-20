import React, { useState } from 'react';
import { Zap } from 'lucide-react';

interface Zone {
  id: number;
  name: string;
  status: 'on' | 'off';
  population: string;
  lastUpdate: string;
}

const HavanaMap: React.FC = () => {
  const [zones, setZones] = useState<Zone[]>([
    {
      id: 1,
      name: 'Centro Habana',
      status: 'on',
      population: '~120k',
      lastUpdate: 'Hace 5 min',
    },
    {
      id: 2,
      name: 'Vedado',
      status: 'on',
      population: '~95k',
      lastUpdate: 'Hace 3 min',
    },
    {
      id: 3,
      name: 'Playa',
      status: 'off',
      population: '~85k',
      lastUpdate: 'Hace 12 min',
    },
    {
      id: 4,
      name: 'Regla',
      status: 'off',
      population: '~45k',
      lastUpdate: 'Hace 8 min',
    },
    {
      id: 5,
      name: 'La Habana Vieja',
      status: 'on',
      population: '~65k',
      lastUpdate: 'Hace 2 min',
    },
    {
      id: 6,
      name: 'Guanabacoa',
      status: 'off',
      population: '~55k',
      lastUpdate: 'Hace 15 min',
    },
  ]);

  const toggleZoneStatus = (id: number) => {
    setZones(zones.map(zone =>
      zone.id === id
        ? { ...zone, status: zone.status === 'on' ? 'off' : 'on', lastUpdate: 'Ahora' }
        : zone
    ));
  };

  const powerOnCount = zones.filter(z => z.status === 'on').length;
  const powerOffCount = zones.filter(z => z.status === 'off').length;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Estado de Apagones en La Habana
          </h1>
          <p className="text-lg text-gray-600">
            Monitoreo en tiempo real del suministro eléctrico por zonas
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Con Corriente</p>
                <p className="text-4xl font-bold text-green-600 mt-2">{powerOnCount}</p>
              </div>
              <Zap className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Sin Corriente</p>
                <p className="text-4xl font-bold text-red-600 mt-2">{powerOffCount}</p>
              </div>
              <Zap className="w-12 h-12 text-red-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total de Zonas</p>
                <p className="text-4xl font-bold text-blue-600 mt-2">{zones.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">{zones.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Image */}
        <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663680038966/aoW2fsZE6qVVFAr8vyfDcF/havana-map-hero-ApDgcrjqEH8STaTX2wQtVk.webp"
            alt="Mapa de La Habana"
            className="w-full h-auto"
          />
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map(zone => (
            <div
              key={zone.id}
              onClick={() => toggleZoneStatus(zone.id)}
              className={`rounded-lg shadow-md p-6 cursor-pointer transition-all duration-200 transform hover:scale-105 border-2 ${
                zone.status === 'on'
                  ? 'bg-green-50 border-green-500 hover:shadow-lg'
                  : 'bg-red-50 border-red-500 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {zone.name}
                  </h3>
                  <p className="text-sm text-gray-600">Zona #{zone.id}</p>
                </div>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    zone.status === 'on'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Estado:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      zone.status === 'on'
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {zone.status === 'on' ? 'Con Corriente' : 'Sin Corriente'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Población:</span>
                  <span className="text-sm font-mono font-semibold text-gray-900">
                    {zone.population}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Actualizado:</span>
                  <span className="text-sm text-gray-700">{zone.lastUpdate}</span>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleZoneStatus(zone.id);
                }}
                className={`w-full mt-4 py-2 rounded-md font-semibold transition-colors duration-200 ${
                  zone.status === 'on'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                {zone.status === 'on' ? 'Simular Apagón' : 'Restaurar Corriente'}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-blue-900">Nota:</span> Este es un sistema de demostración.
            Los datos mostrados son ilustrativos. Haz clic en cualquier zona para simular cambios de estado.
            Última actualización: {new Date().toLocaleTimeString('es-ES')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HavanaMap;
