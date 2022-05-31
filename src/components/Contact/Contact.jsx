import React, { Component } from 'react';
import s from './Contact.module.css';

export default class Contact extends Component {
  handleDeleteContact = e => {
    this.props.onDeleteContact(this.props.id);
  };

  render() {
    const { id, name, number } = this.props;
    return (
      <li className={s.row} id={id}>
        <span className={s.name}>{name}:</span>
        <span className={s.number}>{number}</span>
        <button className={s.buttonDelete} onClick={this.handleDeleteContact}>
          x
        </button>
      </li>
    );
  }
}
