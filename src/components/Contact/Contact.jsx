import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={s.row} id={id}>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>
      <button className={s.buttonDelete} onClick={() => onDeleteContact(id)}>
        x
      </button>
    </li>
  );
}

Contact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
