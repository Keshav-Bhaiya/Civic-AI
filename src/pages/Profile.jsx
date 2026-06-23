import Navbar from '../components/Navbar'
import { MapPin, Award, CheckCircle, FileText, ThumbsUp, Settings, LogOut } from 'lucide-react'

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-6">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-green-100"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">Alex Johnson</h1>
              <p className="text-gray-500 flex items-center gap-1.5 mt-1"><MapPin size={14} /> Downtown District, Portland</p>
              <p className="text-sm text-gray-500 mt-2">Active citizen making Portland cleaner and safer.</p>
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
            { icon: <Award size={16} className="text-yellow-600" />, label: 'Civic Points', value: '1,840' },
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
          <button className="flex items-center gap-2 text-red-500 text-sm mt-6 hover:text-red-700 transition-colors">
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
