import React from 'react'
import { Settings, Calculator, Pencil, Coins } from 'lucide-react'

const FarmCSArchitecture = () => {
  const layers = [
    {
      title: 'Sensing Layer',
      icon: (
        <div className="bg-green-400 p-4 rounded-full">
          <Settings className="w-8 h-8 text-white" />
        </div>
      ),
      description:
        'Collecting Data by using Siol Moisture Sensor and DHT11 Sensor.',
      bgColor: 'bg-green-100',
      iconBg: 'bg-green-400',
    },
    {
      title: 'Network Layer',
      icon: (
        <div className="bg-yellow-400 p-4 rounded-full">
          <Calculator className="w-8 h-8 text-white" />
        </div>
      ),
      description:
        'For providing communication and connectivity We are using wifi, Bluetooth and 5g technology.',
      bgColor: 'bg-yellow-100',
      iconBg: 'bg-yellow-400',
    },
    {
      title: 'Data processing Layer',
      icon: (
        <div className="bg-teal-400 p-4 rounded-full">
          <Pencil className="w-8 h-8 text-white" />
        </div>
      ),
      description:
        'Receiving raw data from the Sensors and processing it by using cloud Computing and decision making algorithms.',
      bgColor: 'bg-teal-100',
      iconBg: 'bg-teal-400',
    },
    {
      title: 'Application Layer',
      icon: (
        <div className="bg-yellow-400 p-4 rounded-full">
          <Coins className="w-8 h-8 text-white" />
        </div>
      ),
      description:
        'Users access and control Our System by using application like ThingSpeak and IFTTT.',
      bgColor: 'bg-yellow-100',
      iconBg: 'bg-yellow-400',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="bg-black text-white p-4 rounded-t-lg flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          FarmCS Architectural View
        </h1>
        <div className="flex gap-4">
          <Settings className="w-6 h-6 text-blue-400" />
          <Calculator className="w-6 h-6 text-pink-400" />
          <Pencil className="w-6 h-6 text-yellow-400" />
          <Coins className="w-6 h-6 text-green-400" />
        </div>
      </div>

      {/* Layers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {layers.map((layer, index) => (
          <div key={layer.title} className="relative">
            <div
              className={`p-4 rounded-lg ${layer.bgColor} h-full flex flex-col items-center text-center`}
            >
              {layer.icon}
              <h2 className="text-xl font-bold mt-4 mb-2">{layer.title}</h2>
              <p className="text-sm text-gray-600">{layer.description}</p>
            </div>

            {/* Arrows between components (hidden on mobile) */}
            {index < layers.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border-t-8 border-t-transparent border-l-8 border-l-gray-300 border-b-8 border-b-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FarmCSArchitecture
