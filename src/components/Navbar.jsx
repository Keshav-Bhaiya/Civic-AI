import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Flag } from 'lucide-react'

const navLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Report Issue', to: '/report-issue' },
  { label: 'Community', to: '/community-verification' },
  { label: 'Map', to: '/map' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Profile', to: '/profile' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full opacity-90" />
            </div>
            <span className="font-bold text-gray-900 text-base">CivicAI</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, to }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? 'text-green-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/report-issue')}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
            >
              <Flag size={14} />
              Report Issue
            </button>
            <Link to="/dashboard">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
