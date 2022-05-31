import React, { Component } from 'react';
import Contact from 'components/Contact/Contact';

export default class ContanctList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} />
        ))}
      </ul>
    );
  }
}
