import React, { Component } from 'react';
import Contact from 'components/Contact/Contact';
import s from './ContactList.module.css';

export default class ContanctList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}
