import React, { useState } from 'react';
import { CssBaseline, Box, TextField, Button } from '@mui/material';
import { useAddContactMutation, api } from 'redux/api';

const AddContactFrom = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { currentData: currentContacts } =
    api.endpoints.fetchAllContacts.useQueryState();

  const addNewContact = async e => {
    e.preventDefault();
    if (isContactAlreadyExist(currentContacts, name)) {
      alert(`${name} is already in contact list`);
      return;
    }
    await addContact({ name, number });
    reset();
  };

  const isContactAlreadyExist = (contacts, name) => {
    const newContactName = name.toLowerCase();
    if (contacts.length === 0) return false;

    return contacts.find(({ name }) => name.toLowerCase() === newContactName);
  };

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <>
      <CssBaseline />
      <Box
        component="form"
        onSubmit={addNewContact}
        noValidate
        autoComplete="off"
        sx={{ mt: 1 }}
      >
        <TextField
          size="small"
          margin="normal"
          required
          fullWidth
          autoFocus
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
          id="contactName"
          label="Name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          size="small"
          margin="normal"
          required
          fullWidth
          inputProps={{
            pattern:
              '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          }}
          name="number"
          label="Contact number"
          type="tel"
          id="number"
          value={number}
          onChange={handleChange}
        />
        <Button
          type="submit"
          onClick={e => {
            addNewContact(e);
            closeModal();
          }}
          autoFocus
        >
          Add Contact
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Box>
    </>
  );
};

export default AddContactFrom;
