import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
// import types from './phonebook-types';

// const {ADD, DELETE, CHANGE_FILTER} = types;

// const addContact = ({ name, number }) => ({
//   type: ADD,
//   payload: {
//     id: shortid.generate(),
//     name: name,
//     number: number,
//   },
// });

// const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });

const addContact = createAction('contacts/Add', ({ name, number }) => ({
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
}));
const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/ChangeFilter');

const contactsAction = { addContact, deleteContact, changeFilter };
export default contactsAction;
