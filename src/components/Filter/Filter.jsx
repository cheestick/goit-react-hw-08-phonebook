import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Filter extends Component {
  filterID = nanoid();

  handleChange = e => {
    const { value } = e.currentTarget;
    this.props.onChange(value);
  };

  render() {
    const { filter } = this.props;
    return (
      <>
        <label htmlFor={this.filterID}>Find contact by name</label>
        <input
          id={this.filterID}
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
