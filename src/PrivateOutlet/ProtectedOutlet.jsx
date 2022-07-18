import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedOutlet = () => {
  const auth = useAuth();
  const location = useLocation();

  return !auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/contacts" state={{ from: location }} replace />
  );
};

export default ProtectedOutlet;
