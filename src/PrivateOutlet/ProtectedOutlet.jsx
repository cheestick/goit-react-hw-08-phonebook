import { useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectCurrentToken } from 'redux/authSlice';

const ProtectedOutlet = () => {
  const auth = useAuth();
  const isToken = !!useSelector(selectCurrentToken);
  const location = useLocation();

  return isToken || auth.user ? (
    <Navigate to="/contacts" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default ProtectedOutlet;
