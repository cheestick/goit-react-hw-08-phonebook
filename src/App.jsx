import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Signup, Signin, Contacts } from 'routes';
import PrivateOutlet from 'PrivateOutlet/PrivateOutlet';
// import { useFetchCurrentUserQuery } from 'redux/api';
// import { refreshCredentials } from 'redux/authSlice';
// import { useDispatch } from 'react-redux';
import UserMenu from 'components/UserMenu';

const App = () => {
  // const dispatch = useDispatch();
  // const { data: user, isSuccess } = useFetchCurrentUserQuery();
  // isSuccess && dispatch(refreshCredentials(user));

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
