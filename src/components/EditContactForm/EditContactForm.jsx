import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CssBaseline,
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { useUpdateContactMutation, api } from 'redux/api';

const EditContactForm = ({
  contactId,
  contactName,
  contactNumber,
  closeModal,
}) => {
  const [name, setName] = useState(contactName || '');
  const [number, setNumber] = useState(contactNumber || '');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertFillOpen, setAlertFillOpen] = useState(false);
  const [updateContact] = useUpdateContactMutation();
  const { currentData: currentContacts } =
    api.endpoints.fetchAllContacts.useQueryState();

  const alertCloseHandler = () => setAlertOpen(false);
  const alertFillCloseHandler = () => setAlertFillOpen(false);

  const updateCurrentContact = async updatedData => {
    if (name === contactName && number === contactNumber) return true;
    if (isContactAlreadyExist(currentContacts, name) || name === contactName) {
      setAlertOpen(true);
      return false;
    }
    if (name === '' || number === '') {
      setAlertFillOpen(true);
      return false;
    }
    await updateContact(updatedData);
    return true;
  };

  const isContactAlreadyExist = (contacts, name) => {
    const newContactName = name.toLowerCase();
    if (contacts.length === 0) return false;

    return contacts.find(({ name }) => name.toLowerCase() === newContactName);
  };

  const submitFormHandler = async e => {
    e.preventDefault();
    const updatedData = { id: contactId, name, number };
    const isContactUpdated = await updateCurrentContact(updatedData);
    if (isContactUpdated) {
      reset();
      closeModal();
    }
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
        <Button type="submit" onClick={submitFormHandler} autoFocus>
          Update Contact
        </Button>
        <Button onClick={closeModal}>Cancel</Button>
      </Box>

      <Snackbar
        open={alertOpen}
        onClose={alertCloseHandler}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={alertCloseHandler} severity="error">
          User with this name already axist!
        </Alert>
      </Snackbar>
      <Snackbar
        open={alertFillOpen}
        onClose={alertFillCloseHandler}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={alertCloseHandler} severity="error">
          Fill in all input fields!
        </Alert>
      </Snackbar>
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
