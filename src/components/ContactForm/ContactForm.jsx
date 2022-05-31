import React, { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.inputNameID = `name-${nanoid()}`;
  }

  addNewContact = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { name } = this.state;
    const id = nanoid();
    onSubmit({ id, name });
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
