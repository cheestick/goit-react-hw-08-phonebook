import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import * as db from 'services/database';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const savedContacts = db.fetchPhonebook();
    savedContacts && this.setState({ contacts: savedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      db.updatePhonebook(this.state.contacts);
    }
  }

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
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactID
    );

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

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
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
        <Filter filter={filter} onChange={this.updateFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
