import { ContactList } from 'components/ContactsList/ContactsList';
import { useFetchContactsQuery, useDeleteContactMutation} from 'redux/contacts/contactsApi';

const ContactsPage = () => {
    const { data, /*error, isFetching, isError*/ } = useFetchContactsQuery();
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();    

    return (
        <>
            <div>
                {data && <ContactList contacts={data} onDelete={deleteContact} deleting={isDeleting}/>}
            </div>
        </>
    );
}

export default ContactsPage;