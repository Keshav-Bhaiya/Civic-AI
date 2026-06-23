import { Link, useNavigate } from 'react-router-dom'
import { FileText, CheckCircle, ThumbsUp, Award, MapPin, Tag, BarChart2, Shield, Map, Plus, ArrowRight, Bell, CheckSquare } from 'lucide-react'
import Navbar from '../components/Navbar'
import BadgeChip from '../components/BadgeChip'

const myReports = [
  { id: '1', title: 'Large pothole near Oak Ave & 5th St', location: 'Oak Ave & 5th', category: 'Road', votes: 47, aiScore: 92, date: 'Jun 14', status: 'In Progress' },
  { id: '2', title: 'Broken streetlight at Riverside Park', location: 'Riverside Park', category: 'Lighting', votes: 23, aiScore: 85, date: 'Jun 13', status: 'Open' },
  { id: '3', title: 'Overflowing trash bin on Market Street', location: 'Market St', category: 'Sanitation', votes: 18, aiScore: 79, date: 'Jun 11', status: 'Resolved' },
  { id: '4', title: 'Graffiti on Community Center wall', location: 'Community Center', category: 'Vandalism', votes: 12, aiScore: 71, date: 'Jun 10', status: 'Open' },
]

const recentActivity = [
  { icon: <CheckCircle size={14} className="text-green-600" />, text: 'Your report "Pothole on Oak Ave" was resolved', time: '2 hours ago' },
  { icon: <ThumbsUp size={14} className="text-blue-500" />, text: '15 people verified your streetlight report', time: '5 hours ago' },
  { icon: <Bell size={14} className="text-yellow-500" />, text: 'AI analysis complete for your latest report', time: '1 day ago' },
  { icon: <Award size={14} className="text-orange-500" />, text: 'You earned the "Problem Solver" badge', time: '2 days ago' },
]

const quickActions = [
  { icon: <BarChart2 size={16} className="text-blue-600" />, label: 'View Analytics', to: '/analytics' },
  { icon: <Shield size={16} className="text-green-600" />, label: 'Community Verification', to: '/community-verification' },
  { icon: <Map size={16} className="text-orange-500" />, label: 'Open Issue Map', to: '/map' },
]

const statCards = [
  { icon: <FileText size={16} />, label: 'My Reports', value: '24', change: '+3', sub: 'vs. last month' },
  { icon: <CheckCircle size={16} />, label: 'Resolved', value: '18', change: '+2', sub: 'vs. last month' },
  { icon: <ThumbsUp size={16} />, label: 'Community Votes', value: '312', change: '+28', sub: 'vs. last month' },
  { icon: <Award size={16} />, label: 'Civic Points', value: '1,840', change: '+120', sub: 'vs. last month' },
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&dpr=1"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Good morning, Alex!</h1>
              <p className="text-sm text-gray-500">You have 3 active reports and 2 pending verifications.</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/report-issue')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 transition-colors"
          >
            <Plus size={16} /> Report New Issue
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map(({ icon, label, value, change, sub }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">{label}</span>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  {icon}
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-gray-900">{value}</span>
                <span className="text-sm text-green-600 font-medium mb-0.5">{change}</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-gray-900">My Recent Reports</h2>
                <Link to="/dashboard" className="text-sm text-green-600 font-medium hover:underline flex items-center gap-1">
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div className="divide-y divide-gray-100">
                {myReports.map(report => {
                  const statusVariant =
                    report.status === 'In Progress' ? 'in-progress'
                    : report.status === 'Resolved' ? 'resolved'
                    : 'open'
                  return (
                    <Link key={report.id} to={`/issue/${report.id}`} className="block py-4 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold text-gray-900 text-sm">{report.title}</span>
                            <BadgeChip label={report.status} variant={statusVariant} />
                          </div>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><MapPin size={10} /> {report.location}</span>
                            <span className="flex items-center gap-1"><Tag size={10} /> {report.category}</span>
                          </div>
                          <div className="flex items-center gap-4 mt-1.5 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><ThumbsUp size={10} /> {report.votes} votes</span>
                            <span>AI Score <span className="text-green-600 font-semibold">{report.aiScore}%</span></span>
                            <span>{report.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Recent Activity */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.map(({ icon, text, time }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-700 leading-relaxed">{text}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.map(({ icon, label, to }) => (
                  <Link key={label} to={to} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        {icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{label}</span>
                    </div>
                    <ArrowRight size={14} className="text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Issues Near You Map */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3934512/pexels-photo-3934512.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=1"
                alt="Map"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Issues Near You</p>
                  <p className="text-xs text-gray-500">14 active within 2km</p>
                </div>
                <Link to="/map" className="text-sm text-green-600 font-medium hover:underline flex items-center gap-1">
                  Open Map <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
