import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
// import * as db from 'services/database';

const App = () => {
  // const [contacts, setContacts] = useState(() => db.fetchPhonebook() || []);

  // useEffect(() => {
  //   db.updatePhonebook(contacts);
  // }, [contacts]);

  // const updateContactList = newContact => {
  //   if (isContactExist(newContact)) {
  //     alert(`${newContact.name} is already in contact list`);
  //     return;
  //   }
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  // const onDeleteContact = contactID => {
  //   const updatedContacts = contacts.filter(
  //     contact => contact.id !== contactID
  //   );

  //   setContacts(updatedContacts);
  // };

  // const isContactExist = ({ name }) => {
  //   const newContactName = name.toLowerCase();
  //   return contacts.find(({ name }) => name.toLowerCase() === newContactName);
  // };

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
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
