import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ceacam5Report from './pages/Ceacam5Report';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import TicketGate from './components/TicketGate';
import Chapter1 from './pages/Chapter1';
import Appendix from './pages/Appendix';
import ChapterPlaceholder from './pages/ChapterPlaceholder';
import Chapter2 from './pages/Chapter2';

function App() {
  return (
    <TicketGate>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {/* Both root and /ceacam5 paths render the Ceacam5 Report */}
            <Route path="/" element={<Ceacam5Report />} />
            <Route path="/ceacam5" element={<Ceacam5Report />} />
            
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
    </TicketGate>
  );
}

export default App;
