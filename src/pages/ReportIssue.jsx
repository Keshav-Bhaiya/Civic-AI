import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Triangle, Zap, Trash2, Trees, Droplets, ShieldAlert, Camera, MapPin, ChevronDown, X } from 'lucide-react'
import Navbar from '../components/Navbar'

const categories = [
  { id: 'road', icon: <Triangle size={22} />, label: 'Road & Potholes' },
  { id: 'lighting', icon: <Zap size={22} />, label: 'Street Lighting' },
  { id: 'waste', icon: <Trash2 size={22} />, label: 'Waste & Sanitation' },
  { id: 'parks', icon: <Trees size={22} />, label: 'Parks & Green Spaces' },
  { id: 'water', icon: <Droplets size={22} />, label: 'Water & Drainage' },
  { id: 'vandalism', icon: <ShieldAlert size={22} />, label: 'Vandalism & Safety' },
]

const severities = ['Low', 'Medium', 'High', 'Critical']

const samplePhotos = [
  'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=150&h=120&dpr=1',
  'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=150&h=120&dpr=1',
]

export default function ReportIssue() {
  const [selectedCategory, setSelectedCategory] = useState('road')
  const [severity, setSeverity] = useState('High')
  const [description, setDescription] = useState(
    'There is a large pothole approximately 50cm wide on Oak Avenue near the intersection with 5th Street. It has been growing for the past 2 weeks and has caused damage to multiple vehicles. The area is heavily trafficked during morning commute.'
  )
  const navigate = useNavigate()

  const charCount = description.length

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link to="/dashboard" className="hover:text-gray-700">Dashboard</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">Report Issue</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">Report a Civic Issue</h1>
        <p className="text-gray-500 text-sm mb-8">Provide details about the issue. AI will analyze and route it to the right department.</p>

        {/* Progress Steps */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {['Category', 'Details', 'Location', 'Photos', 'Review'].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-shrink-0">
              <div className={`flex items-center gap-2 ${i === 0 ? 'text-white' : 'text-gray-400'}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-green-600' : 'border-2 border-gray-200'}`}>
                  {i + 1}
                </div>
                <span className={`text-sm font-medium ${i === 0 ? 'text-green-600' : 'text-gray-400'}`}>{step}</span>
              </div>
              {i < 4 && <div className="w-8 h-px bg-gray-200 flex-shrink-0" />}
            </div>
          ))}
        </div>

        {/* Category Section */}
        <div className="mb-10">
          <h2 className="font-bold text-gray-900 text-lg mb-1">What type of issue is it?</h2>
          <p className="text-sm text-gray-500 mb-5">Select the category that best describes the problem</p>
          <div className="grid grid-cols-3 gap-3">
            {categories.map(({ id, icon, label }) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all ${
                  selectedCategory === id
                    ? 'border-green-600 bg-green-50 text-green-700'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {icon}
                <span className="text-sm font-medium text-center">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="mb-10">
          <h2 className="font-bold text-gray-900 text-lg mb-5">Describe the Issue</h2>

          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">Issue Title</label>
            <input
              type="text"
              defaultValue="Large pothole causing damage to vehicles"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="mb-5">
            <label className="text-sm font-semibold text-gray-700 block mb-2">Detailed Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={5}
              maxLength={500}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
            <p className="text-xs text-gray-400 text-right mt-1">{charCount} / 500 characters</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-3">Severity</label>
            <div className="flex gap-3">
              {severities.map(s => (
                <button
                  key={s}
                  onClick={() => setSeverity(s)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                    severity === s
                      ? s === 'High' ? 'bg-orange-500 text-white border-orange-500'
                        : s === 'Critical' ? 'bg-red-600 text-white border-red-600'
                        : 'bg-green-600 text-white border-green-600'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900 text-lg">Location</h2>
            <button className="flex items-center gap-1.5 text-sm text-green-600 font-medium">
              <MapPin size={14} /> Use my location
            </button>
          </div>

          {/* Mock Map */}
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-4">
            <div className="relative h-56 bg-gray-100">
              <img
                src="https://images.pexels.com/photos/3536694/pexels-photo-3536694.jpeg?auto=compress&cs=tinysrgb&w=700&h=300&dpr=1"
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-red-500">
                  <MapPin size={32} className="drop-shadow-lg fill-red-500" />
                </div>
              </div>
              {/* Map labels */}
              <div className="absolute top-4 left-8 text-xs font-medium text-orange-600 bg-white/80 px-1.5 py-0.5 rounded">Corner Coffee</div>
              <div className="absolute top-4 right-8 text-xs font-medium text-green-700 bg-white/80 px-1.5 py-0.5 rounded">Riverside Park</div>
              <div className="absolute bottom-12 left-1/3 text-xs text-gray-700 bg-white/80 px-1.5 py-0.5 rounded">Oak Avenue</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">Street Address</label>
              <div className="relative">
                <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  defaultValue="Oak Ave & 5th Street"
                  className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">City / District</label>
              <div className="relative">
                <select className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                  <option>Downtown District</option>
                  <option>North Side</option>
                  <option>Riverside</option>
                  <option>Central Park Area</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div className="mb-10">
          <h2 className="font-bold text-gray-900 text-lg mb-5">Add Photos</h2>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center hover:border-green-400 transition-colors cursor-pointer">
            <Camera size={28} className="mx-auto text-gray-400 mb-3" />
            <p className="text-sm font-medium text-gray-700">Drag & drop photos here</p>
            <p className="text-xs text-gray-400 mt-1">or click to browse. Max 5 photos, 10MB each.</p>
            <button className="mt-3 text-sm text-gray-600 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
              Choose Files
            </button>
          </div>

          {/* Uploaded photos */}
          <div className="flex gap-3 mt-4">
            {samplePhotos.map((src, i) => (
              <div key={i} className="relative">
                <img src={src} alt="Upload" className="w-32 h-24 object-cover rounded-xl border border-gray-200" />
                <button className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100">
                  <X size={10} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link to="/dashboard" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            ← Back
          </Link>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-600 border border-gray-200 px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
              Save Draft
            </button>
            <button
              onClick={() => navigate('/analysis')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-2"
            >
              Submit & Analyze ✦
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
