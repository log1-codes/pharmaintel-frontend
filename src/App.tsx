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
// import RequestSection from './pages/RequestSection';
import RequestSection from './pages/RequestSection';
import AuditTracker from './components/AuditTracker';

function App() {
  return (
    <Router>
      <AuditTracker />
      <Routes>
        {/* All pages share AuthHeader via Layout */}
        <Route element={<Layout />}>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Protected Chapter Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/ceacam5" element={<NewCeacam5Report />} />
            <Route path="/request-section" element={<RequestSection />} />
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
