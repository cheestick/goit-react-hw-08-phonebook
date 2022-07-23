import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Signup, Signin, Contacts } from 'routes';
import PrivateOutlet from 'PrivateOutlet/PrivateOutlet';
import { useLazyFetchCurrentUserQuery } from 'redux/api';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from 'redux/authSlice';
import ProtectedOutlet from 'PrivateOutlet/ProtectedOutlet';
import Layout from 'components/Layout';
import MissedPage from 'components/MissedPage';

const App = () => {
  const [fetchCurrentUser] = useLazyFetchCurrentUserQuery();
  const hasAccessToken = useSelector(selectCurrentToken);

  useEffect(() => {
    const refetchUserCredentials = async () => {
      if (hasAccessToken) {
        await fetchCurrentUser();
      }
    };

    refetchUserCredentials();
  }, [fetchCurrentUser, hasAccessToken]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="contacts" />} />
        <Route element={<PrivateOutlet />}>
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route element={<ProtectedOutlet />}>
          <Route path="login" element={<Signin />} />
          <Route path="register" element={<Signup />} />
        </Route>
        <Route path="*" element={<MissedPage />} />
      </Route>
    </Routes>
  );
};

export default App;
