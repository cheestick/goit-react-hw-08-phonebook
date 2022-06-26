import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux/es/exports';
import { removeContact } from 'redux/contacts-actions';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={s.row} id={id}>
      <span className={s.name}>{name}:</span>
      <span className={s.number}>{number}</span>
      <button
        className={s.buttonDelete}
        onClick={() => dispatch(removeContact(id))}
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
