import React from 'react';
import Contact from 'components/Contact';
import { useSelector } from 'react-redux/es/exports';
import s from './ContactList.module.css';
import { getContactList, getFilter } from 'redux/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(getContactList);
  const filter = useSelector(getFilter);

  function filterContacts(contacts, filter) {
    const normalizedFilter = filter.toLowerCase();
    return normalizedFilter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
  }

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
