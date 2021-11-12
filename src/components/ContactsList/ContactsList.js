import React from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/phonebook/phonebook-actions';
// import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter),
  );
};

const ContactsList = () => {
  // console.log(contacts);
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );
  const dispatch = useDispatch();

  return (
    <ul className={style.list}>
      {contacts.map(contact => {
        return (
          <li className={style.item} key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>

            <button
              className={style.button}
              type="button"
              id={contact.id}
              onClick={() =>
                dispatch(contactsActions.deleteContact(contact.id))
              }
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.array,
//   deleteContact: PropTypes.func,
// };

export default ContactsList;
