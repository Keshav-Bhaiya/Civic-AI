import { useState } from 'react'
import { Search, MapPin, Tag, ChevronDown, CheckCircle, X, Award, Star, Shield } from 'lucide-react'
import Navbar from '../components/Navbar'
import BadgeChip from '../components/BadgeChip'

const issues = [
  {
    id: 'v1',
    title: 'Broken playground equipment at Central Park',
    location: 'Central Park, N Sector',
    category: 'Parks',
    verified: 8,
    total: 30,
    status: 'Open',
    img: 'https://images.pexels.com/photos/1307246/pexels-photo-1307246.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
  {
    id: 'v2',
    title: 'Flooded underpass near City Hall',
    location: 'City Hall Ave',
    category: 'Drainage',
    verified: 15,
    total: 30,
    status: 'Open',
    img: 'https://images.pexels.com/photos/1618022/pexels-photo-1618022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
  {
    id: 'v3',
    title: 'Missing manhole cover on Elm Street',
    location: 'Elm Street',
    category: 'Road',
    verified: 4,
    total: 30,
    status: 'Open',
    img: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
  {
    id: 'v4',
    title: 'Illegal dumping behind Community Center',
    location: 'North Side',
    category: 'Sanitation',
    verified: 22,
    total: 30,
    status: 'Open',
    img: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
]

const topVerifiers = [
  { rank: 1, name: 'Sarah L.', count: '147 verifications', points: '2,340', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1' },
  { rank: 2, name: 'Marcus B.', count: '121 verifications', points: '1,980', img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1' },
  { rank: 3, name: 'Priya S.', count: '109 verifications', points: '1,760', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1' },
]

const badges = [
  { icon: <Shield size={20} className="text-green-600" />, label: 'Verifier', earned: true },
  { icon: <Star size={20} className="text-yellow-500" />, label: 'Top 10%', earned: true },
  { icon: <Award size={20} className="text-orange-500" />, label: '100 Club', earned: true },
  { icon: <CheckCircle size={20} className="text-gray-300" />, label: 'Rapid Rep', earned: false },
  { icon: <MapPin size={20} className="text-gray-300" />, label: 'Local Hero', earned: false },
  { icon: <Award size={20} className="text-gray-300" />, label: 'Champion', earned: false },
]

const howItWorks = [
  { icon: <Search size={14} className="text-green-600" />, text: 'Review the report and photos nearby' },
  { icon: <CheckCircle size={14} className="text-green-600" />, text: 'Confirm or flag incorrect reports' },
  { icon: <Award size={14} className="text-green-600" />, text: 'Earn 10 civic points per verification' },
  { icon: <CheckCircle size={14} className="text-green-600" />, text: 'Verified issues get faster resolution' },
]

const tabs = ['Needs Verification', 'Recently Verified', 'My Verifications']

export default function CommunityVerification() {
  const [activeTab, setActiveTab] = useState(0)
  const [confirmed, setConfirmed] = useState({})

  const handleAction = (id, action) => {
    setConfirmed(prev => ({ ...prev, [id]: action }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Community Verification</h1>
            <p className="text-sm text-gray-500 mt-0.5">Confirm real issues, earn points, and help your city</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-2">
              <Award size={16} className="text-green-600" />
              <span className="text-sm font-bold text-green-700">1,840 Points</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
              <CheckCircle size={16} className="text-gray-500" />
              <span className="text-sm font-semibold text-gray-700">312 Verified</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex items-center gap-0 border-b border-gray-200 mb-5">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-3 text-sm font-medium transition-colors relative ${
                    activeTab === i
                      ? 'text-green-600 border-b-2 border-green-600 -mb-px'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                  {i === 0 && (
                    <span className="ml-1.5 bg-red-500 text-white text-xs w-4 h-4 rounded-full inline-flex items-center justify-center">
                      4
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <div className="relative flex-1 min-w-48">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search issues to verify..."
                  className="w-full pl-8 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="relative">
                <select className="appearance-none border border-gray-200 rounded-xl px-4 py-2.5 text-sm pr-8 bg-white focus:outline-none">
                  <option>All Categories</option>
                  <option>Road</option>
                  <option>Parks</option>
                  <option>Drainage</option>
                  <option>Sanitation</option>
                </select>
                <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select className="appearance-none border border-gray-200 rounded-xl px-4 py-2.5 text-sm pr-8 bg-white focus:outline-none">
                  <option>Nearest First</option>
                  <option>Most Recent</option>
                  <option>Most Votes</option>
                </select>
                <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Issue List */}
            <div className="space-y-5">
              {issues.map(issue => {
                const pct = Math.round((issue.verified / issue.total) * 100)
                const action = confirmed[issue.id]
                return (
                  <div key={issue.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      {/* Left info */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm pr-2">{issue.title}</h3>
                          <BadgeChip label={issue.status} variant="open" />
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1"><MapPin size={10} /> {issue.location}</span>
                          <span className="flex items-center gap-1"><Tag size={10} /> {issue.category}</span>
                        </div>

                        {/* Progress */}
                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>{issue.verified}/{issue.total} verified</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                              className="bg-green-500 h-1.5 rounded-full transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>

                        {/* Action Buttons */}
                        {action ? (
                          <div className={`flex items-center gap-2 text-sm font-semibold ${action === 'confirm' ? 'text-green-600' : 'text-gray-500'}`}>
                            {action === 'confirm' ? <CheckCircle size={16} /> : <X size={16} />}
                            {action === 'confirm' ? 'Confirmed!' : 'Flagged as incorrect'}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleAction(issue.id, 'confirm')}
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                            >
                              <CheckCircle size={12} /> Confirm Issue
                            </button>
                            <button
                              onClick={() => handleAction(issue.id, 'deny')}
                              className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-600 text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                            >
                              <X size={12} /> Can't Confirm
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Right image */}
                      <div className="relative">
                        <img
                          src={issue.img}
                          alt={issue.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* How It Works */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">How Verification Works</h3>
              <div className="space-y-3">
                {howItWorks.map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Verifiers */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Top Verifiers This Week</h3>
                <button className="text-xs text-green-600 font-medium hover:underline">Leaderboard</button>
              </div>
              <div className="space-y-3">
                {topVerifiers.map(({ rank, name, count, points, img }) => (
                  <div key={name} className="flex items-center gap-3">
                    <span className="w-5 text-xs text-gray-400 font-semibold">{rank}</span>
                    <img src={img} alt={name} className="w-8 h-8 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{name}</p>
                      <p className="text-xs text-gray-400">{count}</p>
                    </div>
                    <span className="text-sm font-bold text-green-600">{points}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Badges */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">My Badges</h3>
              <div className="grid grid-cols-3 gap-3">
                {badges.map(({ icon, label, earned }) => (
                  <div key={label} className={`flex flex-col items-center gap-1.5 p-3 rounded-xl ${earned ? 'bg-gray-50' : 'opacity-40'}`}>
                    {icon}
                    <span className="text-xs text-gray-600 text-center font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
