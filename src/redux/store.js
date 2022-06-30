import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filterReducer from './filter-reducer';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
