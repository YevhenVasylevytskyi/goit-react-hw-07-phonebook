import style from './ContactsList.module.css';

export const ContactList = ({ contacts, onDelete, deleting }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => {
        return (
          <li className={style.item} key={contact.id}>
            <span>
              {contact.name}: {contact.phone}
            </span>

            <button
              onClick={() => onDelete(contact.id)}
              // className={style.button}
              // type="button"
              // id={contact.id}
              // onClick={() =>
              //   dispatch(contactsActions.deleteContact(contact.id))
              // }
            >
              {deleting ? 'Deleting....' : 'Delete'}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
