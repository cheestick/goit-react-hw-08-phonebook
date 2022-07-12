import React from 'react';
import Contact from 'components/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useFetchAllContactsQuery } from 'redux/contactsApi';

export default function ContactList() {
  const { value } = useSelector(getFilter);
  const { data: contacts, isError } = useFetchAllContactsQuery();

  function filterContacts(contacts, filter = '') {
    const normalizedFilter = filter?.toLowerCase();
    return normalizedFilter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
  }

  if (isError)
    return (
      <div>A problem occured while receiving contacts. Try again later</div>
    );

  const filteredContacts = filterContacts(contacts, value);

  return (
    <ul className={s.contactList}>
      {filteredContacts?.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
