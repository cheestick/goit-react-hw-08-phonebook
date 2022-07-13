import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();

  auth.user = true; //test only

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateOutlet;
