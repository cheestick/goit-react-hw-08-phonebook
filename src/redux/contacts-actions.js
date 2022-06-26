import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const removeContact = createAction('contacts/remove', id => ({
  payload: {
    id,
  },
}));

export const changeFilter = createAction('filter/change', filter => ({
  payload: { filter },
}));
