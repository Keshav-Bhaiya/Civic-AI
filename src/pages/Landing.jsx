import { Link } from 'react-router-dom'
import {
  Camera, CheckCircle, Users, TrendingUp, Zap, AlertTriangle,
  BarChart2, Activity, ArrowRight, Play, MapPin, Shield, Star
} from 'lucide-react'

function LandingNavbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span className="font-bold text-gray-900">CivicAI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Cities', 'Pricing', 'About'].map(item => (
            <a key={item} href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">Log in</Link>
          <Link to="/signup" className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors">
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  )
}

const stats = [
  { value: '142K', label: 'Issues Reported' },
  { value: '89%', label: 'Resolution Rate' },
  { value: '340+', label: 'Cities Onboarded' },
  { value: '2.1M', label: 'Active Citizens' },
]

const trustStats = [
  { icon: <MapPin size={24} />, value: '340+', label: 'Cities Served', sub: 'Across 28 countries' },
  { icon: <CheckCircle size={24} />, value: '142K', label: 'Issues Resolved', sub: 'In the last 30 days' },
  { icon: <Users size={24} />, value: '2.1M', label: 'Active Citizens', sub: 'Monthly active users' },
  { icon: <Star size={24} />, value: '94%', label: 'Community Satisfaction', sub: 'Based on post-resolution surveys' },
]

const howItWorks = [
  { num: '01', icon: <Camera size={28} />, title: 'Report Issue', desc: 'Snap a photo, describe the problem. GPS pinpoints the location automatically.' },
  { num: '02', icon: <Zap size={28} />, title: 'AI Analysis', desc: 'Gemini AI classifies severity, identifies the right department, and flags duplicates.' },
  { num: '03', icon: <Users size={28} />, title: 'Community Verification', desc: 'Neighbors vote, add photos, and confirm. Quality reports rise to the top.' },
  { num: '04', icon: <CheckCircle size={28} />, title: 'Resolution Tracking', desc: 'Officials act, you get notified. Every step transparent and accountable.' },
]

const testimonials = [
  {
    text: '"CivicAI transformed how we handle citizen reports. Resolution time dropped by 60% in the first quarter alone."',
    name: 'Sarah Chen', role: 'City Council Member, Portland', metric: '60%', metricLabel: 'faster resolution',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  },
  {
    text: '"Finally a tool that actually listens. Our neighborhood has never been more connected or empowered."',
    name: 'Marcus Williams', role: 'Community Organizer, Atlanta', metric: '3.2K', metricLabel: 'issues resolved',
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  },
  {
    text: '"The AI analysis is remarkably accurate. It\'s like having a smart assistant for every single report."',
    name: 'Priya Nair', role: 'Urban Planner, Austin', metric: '94%', metricLabel: 'citizen satisfaction',
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
  },
]

const cityImpacts = [
  {
    img: 'https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    title: 'Cleaner Streets', metric: '28%', metricLabel: 'Decrease',
    desc: '28% reduction in unresolved street-level incidents within 6 months of adoption.'
  },
  {
    img: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    title: 'Safer Communities', metric: '3x', metricLabel: 'Faster Safety Fixes',
    desc: 'Public safety issues resolved 3x faster with AI routing and community verification.'
  },
  {
    img: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    title: 'Faster Resolution', metric: '36h', metricLabel: 'Avg Issue Close',
    desc: 'Average issue closed in 36 hours — down from 11 days with traditional systems.'
  },
  {
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    title: 'Citizen Engagement', metric: '5x', metricLabel: 'Engagement',
    desc: 'Active participation rates 5x higher than legacy civic reporting platforms.'
  },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">Powered by Gemini AI · Now in 340+ Cities</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-2">
              Report. Verify.
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-600 leading-tight mb-6">
              Resolve.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              CivicAI empowers citizens to report local issues. Our AI instantly analyzes, prioritizes, and routes them to city officials — making communities smarter and cleaner.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/report-issue" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2">
                Report an Issue <ArrowRight size={16} />
              </Link>
              <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-gray-900 transition-colors border border-gray-300 px-5 py-3 rounded-full">
                <Play size={14} className="fill-current" /> Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-2">
                {[
                  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1',
                  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1',
                  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1',
                  'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                <span className="text-sm text-gray-500 ml-1">Loved by 2.1M+ citizens worldwide</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="City aerial view"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg p-3 max-w-48">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <Zap size={10} className="text-white" />
                </div>
                <span className="text-xs font-semibold">AI Detected Issue</span>
                <span className="text-xs text-red-500 font-medium">High severity</span>
              </div>
              <p className="text-xs text-gray-500">Pothole detected on Main St</p>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Community Health Score</p>
              <p className="text-2xl font-bold text-gray-900">94<span className="text-sm font-normal text-gray-500">/100</span></p>
              <p className="text-xs text-green-600">+7 this month</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-3">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-green-600" />
                <div>
                  <p className="text-xs font-semibold">Live Map Activity</p>
                  <p className="text-xs text-gray-500">24 new pins in your area</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Resolution Rate</p>
              <p className="text-2xl font-bold text-gray-900">89%</p>
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4].map(i => <div key={i} className={`h-1 w-6 rounded-full ${i <= 3 ? 'bg-green-500' : 'bg-gray-200'}`} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-100">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-sm text-gray-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-10">
            Trusted by Governments, Communities, and Citizens Worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map(({ icon, value, label, sub }) => (
              <div key={label} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-green-600 mb-3">{icon}</div>
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                <p className="font-semibold text-gray-800 mt-1">{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-2">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How CivicAI Works</h2>
          <p className="text-gray-500 mt-2">From report to resolution in 4 elegant steps</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {howItWorks.map(({ num, icon, title, desc }) => (
            <div key={num} className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                {icon}
              </div>
              <p className="text-xs text-gray-400 mb-1">{num}</p>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-2">AI Intelligence</p>
            <h2 className="text-3xl font-bold text-gray-900">Powered by Next-Gen AI</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 md:row-span-2">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield size={20} className="text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">AI Issue Detection</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Our Gemini-powered engine automatically detects issue type, severity level, and optimal resolution path from a single photo and description.
              </p>
              <div className="space-y-2 mt-auto">
                {['Road Damage Detection', 'Infrastructure Risks', 'Public Safety Alerts'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-green-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Right cards */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <BarChart2 size={16} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Smart Prioritization</h3>
              <p className="text-sm text-gray-500">Issues are ranked by impact, frequency, and affected population automatically.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                <AlertTriangle size={16} className="text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Severity Prediction</h3>
              <p className="text-sm text-gray-500">ML models predict risk escalation before it becomes a crisis.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <Activity size={16} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Community Health</h3>
              <p className="text-3xl font-bold text-gray-900 mt-1">94<span className="text-base font-normal text-gray-500">/100</span></p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp size={16} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Predictive Insights</h3>
              <p className="text-sm text-gray-500">Forecast emerging hotspots before they become complaints, using historical and live data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* City Insights Live */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-1">Live Dashboard</p>
            <h2 className="text-3xl font-bold text-gray-900">City Insights, Live</h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs text-right">A real-time pulse of your city — see what's happening, where, and how fast it's getting fixed.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-gray-200 relative">
              <img
                src="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=700&h=400&dpr=1"
                alt="City map"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">86 Resolved</span>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">24 In Progress</span>
                <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-medium">17 Pending</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Area Health Score</p>
              <p className="text-4xl font-bold text-gray-900">94 <span className="text-base font-normal text-gray-500">/ 100 · Excellent</span></p>
              <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }} />
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Trending Issues</p>
              {[
                { label: 'Road Damage', count: '26 reports', pct: 80 },
                { label: 'Broken Lighting', count: '14 reports', pct: 55 },
                { label: 'Waste Management', count: '8 reports', pct: 30 },
              ].map(({ label, count, pct }) => (
                <div key={label} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-700">{label}</span>
                    <span className="text-gray-400">{count}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Avg Resolution Time</p>
              <p className="text-3xl font-bold text-gray-900">36 <span className="text-sm font-normal text-gray-500">hrs</span></p>
              <p className="text-xs text-green-600 mt-1">Down 48% from last year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Transformed */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-2">Real Impact</p>
            <h2 className="text-3xl font-bold text-gray-900">Cities Transformed</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cityImpacts.map(({ img, title, metric, metricLabel, desc }) => (
              <div key={title} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <img src={img} alt={title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                    <span className="text-green-600 font-bold text-lg">{metric}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-1">{metricLabel}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold text-gray-900">Trusted by Cities & Communities</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ text, name, role, metric, metricLabel, img }) => (
            <div key={name} className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-5">{text}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{name}</p>
                    <p className="text-xs text-gray-500">{role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">{metric}</p>
                  <p className="text-xs text-gray-400">{metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 mb-16 max-w-6xl md:mx-auto">
        <div className="bg-green-600 rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Help Build Smarter<br />Communities
            </h2>
            <p className="text-green-100 text-sm max-w-md">
              Join 2.1 million citizens making their cities cleaner, safer, and more responsive with AI-powered civic reporting.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link to="/signup" className="bg-white text-green-700 font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap inline-block text-sm">
              Start Reporting — It's Free
            </Link>
            <div className="flex items-center gap-4 mt-3 justify-center">
              {['No credit card', 'Free forever', 'Open source'].map(t => (
                <span key={t} className="text-green-100 text-xs flex items-center gap-1">
                  <CheckCircle size={10} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © 2025 CivicAI. Making communities smarter, together.
      </footer>
    </div>
  )
}
