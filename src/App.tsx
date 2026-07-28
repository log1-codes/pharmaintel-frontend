import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ceacam5Report from './pages/Ceacam5Report';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Chapter1 from './pages/Chapter1';
import Appendix from './pages/Appendix';
import ChapterPlaceholder from './pages/ChapterPlaceholder';
import Chapter2 from './pages/Chapter2';

function App() {
  useEffect(() => {
    // Automatically seed localStorage with the pre-signed JWT 10-year viewer token on startup.
    // This allows the site to run Firebase-free in an unlocked demo state while successfully
    // downloading and watermarking PostgreSQL PDF assets via the backend.
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
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Homepage Landing Route */}
        <Route path="/" element={<Home />} />

        {/* Workspace Layout and Report Routes */}
        <Route element={<Layout />}>
          <Route path="/ceacam5" element={<Ceacam5Report />} />
          <Route path="/report" element={<Ceacam5Report />} />
          
          {/* Protected Chapter Routes */}
          <Route element={<ProtectedRoute />}>
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
