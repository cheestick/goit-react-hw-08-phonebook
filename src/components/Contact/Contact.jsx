import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi';

export default function Contact({ id, name, number }) {
  const [removeContact, { isFetching }] = useDeleteContactMutation();
  return (
    <li className={s.row} id={id}>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>
      <button
        className={s.buttonDelete}
        onClick={() => removeContact(id)}
        disabled={isFetching}
      >
        x
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
