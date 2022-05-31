import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  updateContactList = newContact => {
    console.log(this.state.contacts);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;

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
        <ContactForm onSubmit={this.updateContactList} />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
