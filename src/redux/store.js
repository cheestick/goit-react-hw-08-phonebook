import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { authApi } from './auth';
import filterReducer from './filter-reducer';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    contactsApi.middleware,
  ],
});

export default store;
