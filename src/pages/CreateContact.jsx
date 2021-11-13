import { ContactList } from 'components/ContactsList/ContactsList';
import { useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation } from 'redux/contacts/contactsApi';

const ContactsPage = () => {
    const { data, error, isFetching, isError } = useFetchContactsQuery();
    const {  } = useCreateContactMutation();
    const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();
    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" name="content" />
                <button type="submit">Create</button>
            </form>

            <div>
                {data && <ContactList contacts={data} onDelete={deleteContact} deleting={isDeleting}/>}
            </div>
        </>
    );
}

export default ContactsPage;