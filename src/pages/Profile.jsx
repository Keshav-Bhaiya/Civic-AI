import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { MapPin, Award, CheckCircle, FileText, ThumbsUp, Settings, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const displayName = user?.displayName || user?.profile?.name || 'User'
  const email = user?.email || ''
  const photoURL = user?.photoURL || null
  const points = user?.profile?.points ?? 0
  const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

  async function handleLogout() {
    await logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-6">
            {photoURL ? (
              <img
                src={photoURL}
                alt={displayName}
                className="w-20 h-20 rounded-full object-cover border-4 border-green-100"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center border-4 border-green-100 flex-shrink-0">
                <span className="text-white text-2xl font-bold">{initials}</span>
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{displayName}</h1>
              <p className="text-gray-500 text-sm mt-0.5">{email}</p>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                <MapPin size={13} />
                <span>Downtown District</span>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                  <Award size={11} /> {user?.profile?.role || 'citizen'} · {points} civic points
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 border border-gray-200 text-sm px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              <Settings size={14} /> Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: <FileText size={16} className="text-blue-600" />, label: 'Reports', value: '24' },
            { icon: <CheckCircle size={16} className="text-green-600" />, label: 'Resolved', value: '18' },
            { icon: <ThumbsUp size={16} className="text-orange-500" />, label: 'Votes Given', value: '312' },
            { icon: <Award size={16} className="text-yellow-600" />, label: 'Civic Points', value: points.toLocaleString() },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
              <div className="flex justify-center mb-2">{icon}</div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 mb-4">Account Settings</h2>
          <div className="space-y-3">
            {['Email Notifications', 'Push Notifications', 'Location Services', 'Public Profile'].map(setting => (
              <div key={setting} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">{setting}</span>
                <button className="w-10 h-5 bg-green-600 rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-500 text-sm mt-6 hover:text-red-700 transition-colors"
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
