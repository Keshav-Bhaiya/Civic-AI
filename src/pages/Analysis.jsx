import { Link, useNavigate } from 'react-router-dom'
import { AlertTriangle, Clock, Users, Building2, CheckCircle, Send, Share2, Map } from 'lucide-react'
import Navbar from '../components/Navbar'

const tags = ['Road Damage', 'Safety Hazard', 'High Traffic', 'Urgent', 'Downtown']

const detections = [
  { label: 'Pothole Detected', pct: 97, color: 'bg-red-500' },
  { label: 'Road Markings Damaged', pct: 72, color: 'bg-orange-500' },
  { label: 'Drainage Issue', pct: 45, color: 'bg-blue-500' },
]

const whatNext = [
  {
    icon: <Send size={20} className="text-white" />,
    bg: 'bg-green-600',
    title: 'Report Forwarded',
    desc: 'Automatically sent to Public Works Division.',
    done: true,
  },
  {
    icon: <Users size={20} className="text-gray-500" />,
    bg: 'bg-gray-100',
    title: 'Community Verification',
    desc: 'Neighbors can now confirm and upvote this issue.',
    done: false,
  },
  {
    icon: <Building2 size={20} className="text-gray-500" />,
    bg: 'bg-gray-100',
    title: 'Scheduled for Repair',
    desc: 'A technician will be assigned within 48 hours.',
    done: false,
  },
]

export default function Analysis() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/dashboard" className="hover:text-gray-700">Dashboard</Link>
          <span>›</span>
          <Link to="/report-issue" className="hover:text-gray-700">Report Issue</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">AI Analysis</span>
        </div>

        {/* Header Banner */}
        <div className="bg-green-600 rounded-2xl p-6 flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <CheckCircle size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">AI Analysis Complete</h1>
              <p className="text-green-100 text-sm">Processed in 1.4 seconds · Report #CIV-2025-4821</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-4xl font-extrabold text-white">87<span className="text-lg font-medium text-green-200">/100</span></p>
            <p className="text-green-100 text-xs">Severity Score</p>
          </div>
        </div>

        {/* AI Summary */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6 flex gap-4">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle size={14} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">AI Summary</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              A large structural pothole approximately 50cm in diameter has been detected on a high-traffic arterial route. The damage poses a safety risk to vehicles and cyclists. Immediate repair is recommended. The report has been automatically forwarded to the Public Works Division.
            </p>
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-6">
          {[
            { icon: <AlertTriangle size={14} className="text-yellow-500" />, label: 'Issue Type', value: 'Road Damage — Pothole' },
            { icon: <CheckCircle size={14} className="text-red-500" />, label: 'Severity Score', value: 'High (87/100)' },
            { icon: <Clock size={14} className="text-blue-500" />, label: 'Est. Repair Time', value: '3–5 business days' },
            { icon: <Map size={14} className="text-green-600" />, label: 'Affected Area', value: '~1.2m²' },
            { icon: <Users size={14} className="text-orange-500" />, label: 'Traffic Impact', value: 'High — Peak commute route' },
            { icon: <Building2 size={14} className="text-gray-500" />, label: 'Department', value: 'Public Works Division' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                {icon} {label}
              </div>
              <p className="font-semibold text-gray-900 text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Confidence */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-gray-900">AI Confidence Level</p>
            <span className="text-sm font-bold text-green-600">94%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }} />
          </div>
          <p className="text-xs text-gray-400 mt-2">Based on image analysis, location data, and 4,200+ similar reports in our database.</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>

        {/* Photo Analysis */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-900 mb-4">Photo Analysis</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="relative rounded-xl overflow-hidden border border-gray-200">
              <img
                src="https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1"
                alt="Pothole analysis"
                className="w-full h-56 object-cover"
              />
              {/* Detection overlay */}
              <div className="absolute inset-0 flex items-start justify-start p-3">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-semibold flex items-center gap-1">
                  <AlertTriangle size={10} /> Hazard Detected
                </span>
              </div>
              {/* Measurement labels */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                45.7 cm
              </div>
              <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center">
                AI identified structural road damage with high confidence.
              </p>
            </div>
            <div className="space-y-5 py-2">
              {detections.map(({ label, pct, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">{label}</span>
                    <span className="font-bold text-gray-900">{pct}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className={`${color} h-2 rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-900 mb-5">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {whatNext.map(({ icon, bg, title, desc, done }) => (
              <div key={title} className={`rounded-xl p-5 border ${done ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'}`}>
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>
                  {icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                {done && (
                  <div className="flex items-center gap-1.5 mt-3">
                    <CheckCircle size={13} className="text-green-600" />
                    <span className="text-xs text-green-600 font-semibold">Done</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
            <Share2 size={14} /> Share Report
          </button>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-600 hover:text-gray-900">View on Map</button>
            <button
              onClick={() => navigate('/issue/1')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              Continue to Issue Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
