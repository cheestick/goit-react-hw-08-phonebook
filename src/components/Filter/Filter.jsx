import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {
  const filterID = useRef(nanoid());

  return (
    <>
      <label htmlFor={filterID}>Find contact by name</label>
      <input
        id={filterID}
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
