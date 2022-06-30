import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { nanoid } from 'nanoid';
import { changeFilter } from 'redux/contacts-actions';
import { getFilter } from 'redux/contacts-selectors';

export default function Filter() {
  const filterID = useRef(nanoid());
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor={filterID.current}>Find contact by name</label>
      <input
        id={filterID.current}
        type="text"
        name="filter"
        value={filter.value}
        onChange={({ target }) => dispatch(changeFilter(target.value))}
        autoComplete="off"
      />
    </>
  );
}
