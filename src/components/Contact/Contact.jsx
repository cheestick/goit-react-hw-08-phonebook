import React, { Component } from 'react';
import s from './Contact.module.css';

export default class Contact extends Component {
  render() {
    const { name, number } = this.props;
    return (
      <li className={s.row}>
        <span>{name}:</span>
        <span>{number}</span>
      </li>
    );
  }
}
