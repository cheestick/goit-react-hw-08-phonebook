import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactForm from 'components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
import s from './App.module.css';
import { Signup, Signin } from 'routes';
import PrivateOutlet from 'PrivateOutlet/PrivateOutlet';
import { useFetchCurrentUserQuery } from 'redux/api';

const App = () => {
  const user = useFetchCurrentUserQuery();
  console.log(user);

  return (
    <Routes>
      <Route path="register" element={<Signup />} />
      <Route path="login" element={<Signin />} />
      <Route path="*" element={<PrivateOutlet />}>
        <Route
          path="contacts"
          element={
            <div className={s.container}>
              <h1>Phonebook</h1>
              <ContactForm />

              <h2>Contacts</h2>
              {/* <Filter /> */}
              {/* <ContactList /> */}
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
