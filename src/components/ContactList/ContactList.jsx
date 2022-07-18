import React, { useEffect } from 'react';
import Contact from 'components/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useLazyFetchAllContactsQuery } from 'redux/api';
import { selectIsLoggedIn } from 'redux/authSlice';

export default function ContactList() {
  const { value } = useSelector(getFilter);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [fetchAllUserContacts, { data: contacts, isError, isFetching }] =
    useLazyFetchAllContactsQuery();

  useEffect(() => {
    if (isLoggedIn) fetchAllUserContacts();
  }, [fetchAllUserContacts, isLoggedIn]);

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
      {!isFetching &&
        filteredContacts?.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
}
