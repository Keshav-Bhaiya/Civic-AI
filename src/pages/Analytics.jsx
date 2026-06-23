import Navbar from '../components/Navbar'
import { TrendingUp, CheckCircle, Clock, Users } from 'lucide-react'

const stats = [
  { icon: <TrendingUp size={16} />, label: 'Total Issues', value: '742', change: '+10%', color: 'text-blue-600 bg-blue-50' },
  { icon: <CheckCircle size={16} />, label: 'Resolved', value: '532', change: '+23%', color: 'text-green-600 bg-green-50' },
  { icon: <Clock size={16} />, label: 'Avg. Resolution Time', value: '4.6 days', change: '-8%', color: 'text-orange-600 bg-orange-50' },
  { icon: <Users size={16} />, label: 'Active Citizens', value: '1,245', change: '+15%', color: 'text-purple-600 bg-purple-50' },
]

const byCategory = [
  { label: 'Pothole', pct: 49, color: 'bg-blue-500' },
  { label: 'Garbage', pct: 28, color: 'bg-green-500' },
  { label: 'Street Light', pct: 15, color: 'bg-yellow-500' },
  { label: 'Water Leakage', pct: 10, color: 'bg-cyan-500' },
  { label: 'Others', pct: 5, color: 'bg-gray-400' },
]

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900">Analytics & Insights</h1>
          <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm bg-white focus:outline-none">
            <option>This Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(({ icon, label, value, change, color }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">{label}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>{icon}</div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-xs text-green-600 font-medium mt-0.5">{change}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Issues Over Time */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-5">Issues Over Time</h2>
            <div className="h-40 flex items-end gap-2">
              {[40, 65, 50, 80, 70, 90, 75, 85, 95, 78, 92, 100].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                  <div
                    className="w-full rounded-t-md bg-green-500 opacity-80"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>May 1</span><span>May 8</span><span>May 15</span><span>May 22</span><span>May 29</span>
            </div>
          </div>

          {/* Issues by Category */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="font-bold text-gray-900 mb-5">Issues by Category</h2>
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  {byCategory.reduce((acc, { pct }, i) => {
                    const offset = acc.offset
                    const colors = ['#3b82f6', '#22c55e', '#eab308', '#06b6d4', '#9ca3af']
                    acc.elements.push(
                      <circle
                        key={i}
                        cx="18" cy="18" r="15.9"
                        fill="none"
                        stroke={colors[i]}
                        strokeWidth="4"
                        strokeDasharray={`${pct} ${100 - pct}`}
                        strokeDashoffset={-offset}
                      />
                    )
                    acc.offset += pct
                    return acc
                  }, { offset: 0, elements: [] }).elements}
                </svg>
              </div>
              <div className="space-y-2">
                {byCategory.map(({ label, pct, color }) => (
                  <div key={label} className="flex items-center gap-2 text-sm">
                    <div className={`w-3 h-3 rounded-full ${color}`} />
                    <span className="text-gray-700">{label}</span>
                    <span className="font-semibold text-gray-900 ml-auto">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Insight */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-4">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm mb-1">AI Insight</p>
            <p className="text-sm text-gray-600">
              Potholes have increased by 23% in your area compared to last month. Focus on road maintenance in the Downtown and Riverside districts for highest impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
