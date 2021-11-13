import { useCreateContactMutation } from 'redux/contacts/contactsApi';
import style from './Contacts.module.css';

const AddContact = () => {
    const [createContact] = useCreateContactMutation();

    const handleSubmit = event => {
        event.preventDefault();
        // const {value} = event.currentTarget.elements
        // createContact(value.name.value, value.phone.value);
        const name = event.currentTarget.elements.name.value;
        const phone = event.currentTarget.elements.phone.value;
        const contactValue = {name, phone}
        console.log(`name: ${name}`);
        console.log(`phone: ${phone}`);
        createContact(contactValue);
        event.currentTarget.reset();
    }

    return (
        <>
            <form autoComplete="off" className={style.form} onSubmit={handleSubmit}>
            <label className={style.label} /*htmlFor={loginInputId}*/>
                Name
                <input
                className={style.input}
                type="text"
                name="name"
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                //   id={loginInputId}
                //   value={name}
                //   onChange={handleChange}
                />
            </label>

            <label className={style.label} /*htmlFor={numberInputId}*/>
                Phone
                <input
                className={style.input_number}
                type="tel"
                name="phone"
                placeholder="Phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                // id={numberInputId}
                // phone={phone}
                // onChange={handleChange}
                />
            </label>
            <button className={style.button} type="submit">
                Add contact
            </button>
            </form>
        </>
    )    
}


export default AddContact;