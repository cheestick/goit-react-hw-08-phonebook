import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { changeFilter } from './contacts-actions';

const filterReducer = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload.filter,
});

export default combineReducers({
  value: filterReducer,
});
