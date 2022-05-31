import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  updateContactList = newContact => {
    if (this.isContactExist(newContact)) {
      alert(`${newContact.name} is already in contact list`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onDeleteContact = contactID => {
    const { contacts } = this.state;
    const updatedContacts = contacts.reduce((updatedContacts, contact) => {
      if (contact.id !== contactID) updatedContacts.push(contact);
      return updatedContacts;
    }, []);

    this.setState({
      contacts: updatedContacts,
    });
  };

  updateFilter = newValue => {
    this.setState({ filter: newValue });
  };

  isContactExist = ({ name }) => {
    const { contacts } = this.state;
    const newContactName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === newContactName);
  };

  filterContacts = filter => {
    const normalizedFilter = filter.toLowerCase();
    const { contacts } = this.state;
    return normalizedFilter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts(filter);

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
        <Filter value={filter} onChange={this.updateFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
