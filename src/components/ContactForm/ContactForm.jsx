import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.inputNameID = `name-${nanoid()}`;
    this.inputPhoneID = `phone-${nanoid()}`;
  }

  addNewContact = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { name, number } = this.state;
    const id = nanoid();
    onSubmit({ id, name, number });
    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.addNewContact} autoComplete="off">
        <label htmlFor={this.inputNameID}>Name</label>
        <input
          id={this.inputNameID}
          name="name"
          value={name}
          onChange={this.handleChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={this.inputPhoneID}>Number</label>
        <input
          id={this.inputPhoneID}
          name="number"
          value={number}
          onChange={this.handleChange}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
