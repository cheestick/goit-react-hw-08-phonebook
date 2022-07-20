import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Box, TextField, Button } from '@mui/material';
import { useUpdateContactMutation } from 'redux/api';

const EditContactForm = ({
  contactId,
  contactName,
  contactNumber,
  closeModal,
}) => {
  const [name, setName] = useState(contactName || '');
  const [number, setNumber] = useState(contactNumber || '');
  const [updateContact] = useUpdateContactMutation();

  const updateCurrentContact = async e => {
    e.preventDefault();
    const updatedData = { id: contactId, name, number };
    await updateContact(updatedData);
    reset();
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
        onSubmit={updateCurrentContact}
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
              'd{1,4}?[-.s]?(d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
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
            updateCurrentContact(e);
            closeModal();
          }}
          autoFocus
        >
          Update Contact
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Box>
    </>
  );
};

EditContactForm.propTypes = {
  contactId: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EditContactForm;
