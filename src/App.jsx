import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ReportIssue from './pages/ReportIssue'
import Analysis from './pages/Analysis'
import IssueDetail from './pages/IssueDetail'
import CommunityVerification from './pages/CommunityVerification'
import MapPage from './pages/MapPage'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/report-issue" element={<ReportIssue />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/issue/:id" element={<IssueDetail />} />
      <Route path="/community-verification" element={<CommunityVerification />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
