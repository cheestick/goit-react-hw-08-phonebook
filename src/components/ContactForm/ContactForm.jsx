import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.inputNameID = `name-${nanoid()}`;
  }

  addNewContact = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;
    console.log(value, name);
  };

  render() {
    const { name } = this.props;
    return (
      <form autoComplete="off" onSubmit={this.addNewContact}>
        <label htmlFor={this.inputNameID}></label>
        <input
          id={this.inputNameID}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
