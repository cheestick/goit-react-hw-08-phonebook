import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputNameID = useRef(`name-${nanoid()}`);
  const inputPhoneID = useRef(`phone-${nanoid()}`);

  const addNewContact = e => {
    e.preventDefault();
    const id = nanoid();
    onSubmit({ id, name, number });
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
    <form className={s.form} onSubmit={addNewContact} autoComplete="off">
      <label htmlFor={inputNameID.current}>Name</label>
      <input
        id={inputNameID.current}
        name="name"
        value={name}
        onChange={handleChange}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={inputPhoneID.current}>Number</label>
      <input
        id={inputPhoneID.current}
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

ContactForm.ptopTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
