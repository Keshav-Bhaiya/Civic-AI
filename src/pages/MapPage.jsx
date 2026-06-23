import Navbar from '../components/Navbar'
import { MapPin, Filter } from 'lucide-react'

const pins = [
  { id: 1, type: 'road', label: 'Pothole - High', color: 'bg-red-500', top: '30%', left: '40%' },
  { id: 2, type: 'lighting', label: 'Street Light', color: 'bg-yellow-500', top: '50%', left: '60%' },
  { id: 3, type: 'waste', label: 'Overflowing Bin', color: 'bg-orange-400', top: '65%', left: '30%' },
  { id: 4, type: 'road', label: 'Pothole - Medium', color: 'bg-orange-500', top: '20%', left: '65%' },
  { id: 5, type: 'road', label: 'Resolved', color: 'bg-green-500', top: '75%', left: '55%' },
]

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold text-gray-900">Issue Map</h1>
          <button className="flex items-center gap-2 border border-gray-200 bg-white text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter size={14} /> Filters
          </button>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-200 h-[70vh]">
          <img
            src="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&dpr=1"
            alt="Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          {pins.map(({ id, label, color, top, left }) => (
            <div key={id} className="absolute" style={{ top, left }}>
              <div className={`w-4 h-4 ${color} rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform`} />
              <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-white text-xs px-2 py-0.5 rounded-lg shadow-sm whitespace-nowrap pointer-events-none opacity-0 hover:opacity-100">
                {label}
              </div>
            </div>
          ))}
          <div className="absolute bottom-5 left-5 bg-white rounded-xl p-4 shadow-lg">
            <p className="text-xs font-semibold text-gray-700 mb-2">Legend</p>
            {[
              { color: 'bg-red-500', label: 'High Severity' },
              { color: 'bg-orange-500', label: 'Medium' },
              { color: 'bg-green-500', label: 'Resolved' },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                <div className={`w-3 h-3 ${color} rounded-full`} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
