import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { api, useAddContactMutation } from 'redux/api';

const ContactForm = () => {
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
    <form className={s.form} onSubmit={addNewContact} autoComplete="off">
      <label htmlFor="contactName">Name</label>
      <input
        id="contactName"
        name="name"
        value={name}
        onChange={handleChange}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="contactNumber">Number</label>
      <input
        id="contactNumber"
        name="number"
        value={number}
        onChange={handleChange}
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
