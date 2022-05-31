import React, { Component } from 'react';
import s from './Contact.module.css';

export default class Contact extends Component {
  render() {
    const { name, number } = this.props;
    return (
      <li className={s.row}>
        <span className={s.name}>{name}:</span>
        <span className={s.number}>{number}</span>
        <button className={s.buttonDelete}>x</button>
      </li>
    );
  }
}
