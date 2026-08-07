import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Chapter1 from './pages/Chapter1';
import Appendix from './pages/Appendix';
import ChapterPlaceholder from './pages/ChapterPlaceholder';
import Chapter2 from './pages/Chapter2';
import AboutPage from './pages/AboutPage';
import NewCeacam5Report from './pages/NewCeacam5Report';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import UserDashboard from './pages/UserDashboard';
import Newsletter from './pages/Newsletter';
import AuditTracker from './components/AuditTracker';

function App() {
  useEffect(() => {
    // Only seed demo credentials if no user session is present
    const existingToken = localStorage.getItem('viewer_token');
    const existingUser = localStorage.getItem('user');

    if (!existingToken || !existingUser) {
      localStorage.setItem('session_active', 'true');
      localStorage.setItem(
        'session_expires_at',
        (Date.now() + 10 * 365 * 24 * 60 * 60 * 1000).toString()
      );
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: 'demo_user',
          email: 'demo@amethintel.com',
          name: 'AmethIntel Demo User',
          pricingPlan: 'Full'
        })
      );
      localStorage.setItem(
        'viewer_token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJkZW1vX3VzZXIiLCJlbWFpbCI6ImRlbW9AYW1ldGhpbnRlbC5jb20iLCJuYW1lIjoiQW1ldGhJbnRlbCBEZW1vIFVzZXIiLCJwcmljaW5nUGxhbiI6IkZ1bGwiLCJ0eXBlIjoidmlld2VyIiwiaWF0IjoxNzg1MjQyMDc2LCJleHAiOjIxMDA2MDIwNzZ9.n2yxUqUV2YecMmm_FCBmR5huBHmjZ3yVzw57iEe3Vwc'
      );
    }
  }, []);

  return (
    <Router>
      <AuditTracker />
      <Routes>
        {/* Public Homepage Landing Route */}
        <Route path="/" element={<Home />} />
        
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/newsletter" element={<Newsletter />} />

        {/* User Dashboard Route */}
        <Route path="/dashboard" element={<UserDashboard />} />

        {/* Workspace Layout and Report Routes */}
        <Route element={<Layout />}>
          <Route path='/about' element={<AboutPage />} />

          {/* Protected Chapter Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/ceacam5" element={<NewCeacam5Report />} />
            <Route path="/chapters/chapter1" element={<Chapter1 />} />
            <Route path="/chapters/chapter2" element={<Chapter2 />} />
            <Route path="/chapters/appendix" element={<Appendix />} />
            <Route path="/chapters/:chapterId" element={<ChapterPlaceholder />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
