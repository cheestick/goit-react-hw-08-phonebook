import { useAuth } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectCurrentToken } from 'redux/authSlice';

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();
  const isToken = useSelector(selectCurrentToken);

  return auth.user || isToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateOutlet;
