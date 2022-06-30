import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useDeleteContactMutation } from 'redux/contactsApi';

export default function Contact({ id, name, number }) {
  const [removeContact, { isLoading }] = useDeleteContactMutation();
  const rowStyle = isLoading ? `${s.row} ${s.deleting}` : s.row;
  return (
    <li className={rowStyle} id={id}>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>
      <button
        className={s.buttonDelete}
        onClick={() => removeContact(id)}
        disabled={isLoading}
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
