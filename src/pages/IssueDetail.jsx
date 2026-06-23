import { Link, useParams } from 'react-router-dom'
import { MapPin, Calendar, Tag, ThumbsUp, Share2, Map, CheckCircle, Cpu, Users, Wrench, Clock, Flag } from 'lucide-react'
import Navbar from '../components/Navbar'
import BadgeChip from '../components/BadgeChip'

const timelineItems = [
  {
    icon: <Flag size={14} className="text-green-600" />,
    color: 'border-green-500 bg-green-50',
    title: 'Issue Reported',
    desc: 'Alex M. submitted the report with 2 photos.',
    time: 'Jun 14, 9:22 AM',
    done: true,
  },
  {
    icon: <Cpu size={14} className="text-green-600" />,
    color: 'border-green-500 bg-green-50',
    title: 'AI Analysis Complete',
    desc: 'Severity: High. Routed to Public Works.',
    time: 'Jun 14, 9:23 AM',
    done: true,
  },
  {
    icon: <Users size={14} className="text-red-500" />,
    color: 'border-red-400 bg-red-50',
    title: 'Community Verified',
    desc: '34 neighbors confirmed this issue.',
    time: 'Jun 14, 11:40 AM',
    done: true,
  },
  {
    icon: <Wrench size={14} className="text-blue-500" />,
    color: 'border-blue-400 bg-blue-50',
    title: 'Technician Assigned',
    desc: 'James R. from Public Works assigned.',
    time: 'Jun 15, 8:00 AM',
    done: true,
  },
  {
    icon: <Calendar size={14} className="text-gray-400" />,
    color: 'border-gray-200 bg-gray-50',
    title: 'Repair Scheduled',
    desc: 'Repair planned for Jun 17–18.',
    time: 'Jun 17',
    done: false,
  },
  {
    icon: <CheckCircle size={14} className="text-gray-400" />,
    color: 'border-gray-200 bg-gray-50',
    title: 'Issue Resolved',
    desc: 'Pending repair completion.',
    time: 'Est. Jun 18',
    done: false,
  },
]

const comments = [
  {
    name: 'Maria G.',
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
    text: 'I hit this pothole this morning and it nearly blew my tire. Really dangerous!',
    time: '2h ago',
    likes: 12,
    official: false,
  },
  {
    name: 'David K.',
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
    text: 'This has been here for over 2 weeks. Glad someone finally reported it officially.',
    time: '5h ago',
    likes: 8,
    official: false,
  },
  {
    name: 'Public Works',
    img: null,
    text: 'Thank you for the report. A crew has been scheduled for repair on June 17th.',
    time: '1d ago',
    likes: 4,
    official: true,
  },
]

const photos = [
  'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1',
  'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1',
]

export default function IssueDetail() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link to="/dashboard" className="hover:text-gray-700">Dashboard</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">Issue #CIV-2025-4821</span>
        </div>

        {/* Issue Header */}
        <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
          <h1 className="text-2xl font-bold text-gray-900">Large Pothole on Oak Ave & 5th Street</h1>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              <Share2 size={14} /> Share
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
              <Map size={14} /> Open Map
            </button>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap mb-6">
          <span className="flex items-center gap-1.5"><MapPin size={13} /> Downtown District</span>
          <span className="flex items-center gap-1.5"><Calendar size={13} /> Reported Jun 14, 2025</span>
          <span className="flex items-center gap-1.5"><Tag size={13} /> Road & Potholes</span>
          <BadgeChip label="In Progress" variant="in-progress" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Photos */}
            <div>
              <h2 className="font-bold text-gray-900 mb-3">Photos</h2>
              <div className="grid grid-cols-2 gap-3">
                {photos.map((src, i) => (
                  <img key={i} src={src} alt="Issue" className="w-full h-52 object-cover rounded-xl border border-gray-200" />
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-bold text-gray-900 mb-3">Description</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                There is a large pothole approximately 50cm wide on Oak Avenue near the intersection with 5th Street. It has been growing for the past 2 weeks and has caused damage to multiple vehicles. The area is heavily trafficked during morning commute hours.
              </p>
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Road & Potholes</span>
                <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-semibold">High Severity</span>
                <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">AI Score: 87/100</span>
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-gray-900">Location</h2>
                <Link to="/map" className="text-sm text-green-600 font-medium hover:underline">Full map view →</Link>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 mb-3">
                <img
                  src="https://images.pexels.com/photos/3536694/pexels-photo-3536694.jpeg?auto=compress&cs=tinysrgb&w=700&h=300&dpr=1"
                  alt="Location map"
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <MapPin size={13} className="text-red-500" />
                Oak Ave & 5th Street, Downtown District
              </div>
            </div>

            {/* Comments */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900">Community Comments</h2>
                <span className="text-sm text-gray-500">3 comments</span>
              </div>
              <div className="space-y-5">
                {comments.map(({ name, img, text, time, likes, official }) => (
                  <div key={name} className="flex gap-3">
                    {img ? (
                      <img src={img} alt={name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">PW</div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">{name}</span>
                        {official && <BadgeChip label="Official" variant="open" className="!text-xs !px-2" />}
                        <span className="text-xs text-gray-400 ml-auto">{time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{text}</p>
                      <button className="flex items-center gap-1 text-xs text-gray-400 mt-2 hover:text-gray-600">
                        <ThumbsUp size={11} /> {likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add comment */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1"
                  alt="Me"
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Community Support */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-4">Community Support</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">47</p>
                  <p className="text-xs text-gray-500">Total Votes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">34</p>
                  <p className="text-xs text-gray-500">Verified</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">156</p>
                  <p className="text-xs text-gray-500">Views</p>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                <ThumbsUp size={14} /> Upvote this Issue
              </button>
            </div>

            {/* AI Analysis */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={16} className="text-green-600" />
                <h3 className="font-bold text-gray-900">AI Analysis</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Severity</span>
                  <span className="font-bold text-red-500">87/100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Confidence</span>
                  <span className="font-bold text-gray-900">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Department</span>
                  <span className="font-semibold text-gray-900 text-sm">Public Works</span>
                </div>
              </div>
            </div>

            {/* Issue Timeline */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-5">Issue Timeline</h3>
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
                <div className="space-y-5">
                  {timelineItems.map(({ icon, color, title, desc, time, done }) => (
                    <div key={title} className="flex gap-4 relative">
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 ${done ? color : 'border-gray-200 bg-white'}`}>
                        {icon}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${done ? 'text-gray-900' : 'text-gray-400'}`}>{title}</p>
                        <p className={`text-xs mt-0.5 ${done ? 'text-gray-500' : 'text-gray-400'}`}>{desc}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
