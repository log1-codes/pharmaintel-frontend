import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useCaptureWarning } from '../hooks/useCaptureWarning';

const Layout = () => {
  useCaptureWarning();

  return (
    <div className="flex flex-col min-h-screen no-select">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
