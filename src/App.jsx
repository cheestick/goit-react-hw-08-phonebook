import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactForm from 'components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import s from './App.module.css';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={s.container}>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
