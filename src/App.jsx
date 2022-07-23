import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
    if (hasAccessToken) {
      fetchCurrentUser();
    }
  }, [fetchCurrentUser, hasAccessToken]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedOutlet />}>
          <Route path="login" element={<Signin />} />
          <Route path="register" element={<Signup />} />
        </Route>
        <Route element={<PrivateOutlet />}>
          <Route path="/" element={<Layout />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<MissedPage />} />
      </Route>
    </Routes>
  );
};

export default App;
