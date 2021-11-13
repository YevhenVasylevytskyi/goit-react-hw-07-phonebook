import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

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
