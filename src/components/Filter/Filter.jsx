import React, { useRef } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {
  const filterID = useRef(nanoid());

  return (
    <>
      <label htmlFor={filterID.current}>Find contact by name</label>
      <input
        id={filterID.current}
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
