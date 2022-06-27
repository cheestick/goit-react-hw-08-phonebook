import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts-reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const persistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['items'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contacts),
  },
  preloadedState: initialState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

// const updateContactList = newContact => {
//   if (isContactExist(newContact)) {
//     alert(`${newContact.name} is already in contact list`);
//     return;
//   }
//   setContacts(prevContacts => [...prevContacts, newContact]);
// };

// const isContactExist = (contacts, name) => {
//   const newContactName = name.toLowerCase();
//   if (contacts.length === 0) return false;

//   return contacts.find(({ name }) => name.toLowerCase() === newContactName);
// };

// function updateDBmw({ getState }) {
//   return next => action => {
//     console.log(action);
//     addContact.match(action) &&
//       db.updatePhonebook([...getState().contacts.items, action.payload]);

//     return next(action);
//   };
// }

// const checkUniqueContact =
//   ({ getState, dispatch }) =>
//   next =>
//   action => {
//     if (addContact.match(action)) {
//       console.log(action);
//       console.log(getState());

//       if (isContactExist(getState().contacts.items, action.payload.name)) {
//         alert('Contacts exist');
//         dispatch(existContact());
//       }
//     }
//     return next(action);
//   };
