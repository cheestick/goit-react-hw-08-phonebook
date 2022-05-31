import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          width: 500,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'felx-start',
          gap: 12,
          fontSize: 24,
          lineHeight: 1,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}

export default App;
