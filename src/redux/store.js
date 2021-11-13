import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from './pokemon/pokemon';
import { contactsApi } from './contacts/contacts';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import contactsReducer from './contacts/contacts-reducer';
// import { contactApi } from './contacts/contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     [contactApi.reducerPath]: contactApi.reducer
//   },
//   middleware: getDefaultMiddleware = [
//     ...getDefaultMiddleware(),
//     contactApi.middleware,
//   ],
//   devTools: process.env.NODE_ENV === 'development',
// });

// setupListeners(store.dispatch);

// export default store;
