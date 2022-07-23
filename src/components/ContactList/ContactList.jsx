import React, { useEffect } from 'react';
import Contact from 'components/Contact';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useLazyFetchAllContactsQuery } from 'redux/api';
import { selectIsLoggedIn } from 'redux/authSlice';
import { CircularProgress, List, Snackbar } from '@mui/material';

export default function ContactList() {
  const { value } = useSelector(getFilter);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [fetchAllUserContacts, { data: contacts, isError, isLoading }] =
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

  const filteredContacts = filterContacts(contacts, value);

  if (isError)
    return (
      <div>A problem occured while receiving contacts. Try again later</div>
    );

  return (
    <>
      <List>
        {filteredContacts?.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </List>
      <Snackbar
        open={isLoading}
        sx={{ width: '10rem' }}
        autoHideDuration={6000}
        message="Loading..."
        action={<CircularProgress />}
      />
    </>
  );
}
