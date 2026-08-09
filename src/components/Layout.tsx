import { Outlet } from 'react-router-dom';
import { useCaptureWarning } from '../hooks/useCaptureWarning';
import AuthHeader from './AuthHeader';

const Layout = () => {
  useCaptureWarning();

  return (
    <div className="flex flex-col min-h-screen no-select">
      <AuthHeader />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

