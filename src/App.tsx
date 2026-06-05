import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginSignup from './pages/LoginSignup';
import PricingPlans from './pages/PricingPlans';
import ProteinDetailsDashboard from './pages/ProteinDetailsDashboard';
import ProteinCatalog from './pages/ProteinCatalog';
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';
import Ceacam5Report from './pages/Ceacam5Report';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Chapter1 from './pages/Chapter1';
import ChapterPlaceholder from './pages/ChapterPlaceholder';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/proteins" element={<ProteinCatalog />} />
          <Route path="/dashboard" element={<ProteinDetailsDashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/ceacam5" element={<Ceacam5Report />} />
          
          {/* Protected Chapter Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/chapters/chapter1" element={<Chapter1 />} />
            <Route path="/chapters/:chapterId" element={<ChapterPlaceholder />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
