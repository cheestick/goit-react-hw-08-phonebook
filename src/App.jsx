import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Signup, Signin, Contacts } from 'routes';
import PrivateOutlet from 'PrivateOutlet/PrivateOutlet';
import { useLazyFetchCurrentUserQuery } from 'redux/api';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu';
import { selectCurrentToken } from 'redux/authSlice';

const App = () => {
  const [fetchCurrentUser] = useLazyFetchCurrentUserQuery();
  const hasAccessToken = useSelector(selectCurrentToken);

  useEffect(() => {
    if (hasAccessToken) fetchCurrentUser();
  }, [fetchCurrentUser, hasAccessToken]);

  return (
    <Routes>
      <Route path="/" element={<UserMenu />}>
        <Route path="login" element={<Signin />} />
        <Route path="register" element={<Signup />} />
        <Route element={<PrivateOutlet />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<div>Missed page...</div>} />
      </Route>
    </Routes>
  );
};

export default App;
