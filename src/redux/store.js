import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { api } from './api';
import filterReducer from './filterSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: authReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    api.middleware,
    contactsApi.middleware,
  ],
});

export default store;
