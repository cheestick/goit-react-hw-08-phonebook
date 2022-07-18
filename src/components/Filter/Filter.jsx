import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { nanoid } from 'nanoid';
import { getFilter, changeFilter } from 'redux/filterSlice';

export default function Filter() {
  const filterID = useRef(nanoid());
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilterHandler = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  return (
    <>
      <label htmlFor={filterID.current}>Find contact by name</label>
      <input
        id={filterID.current}
        type="text"
        name="filter"
        value={filter.value}
        onChange={onChangeFilterHandler}
        autoComplete="off"
      />
    </>
  );
}
