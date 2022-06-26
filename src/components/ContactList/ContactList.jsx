import React from 'react';
import Contact from 'components/Contact';
import { useSelector } from 'react-redux/es/exports';
import s from './ContactList.module.css';
import { getContactList } from 'redux/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(getContactList);

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
