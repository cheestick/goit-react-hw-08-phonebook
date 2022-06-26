import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts-reducer';

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
