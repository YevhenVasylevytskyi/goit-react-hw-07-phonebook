// import { useCreateContactMutation } from 'redux/contacts/contactsApi';
import style from './Contacts.module.css';

const AddContact = () => {
    // const [createContact] = useCreateContactMutation();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.currentTarget.elements.content.value);
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
                Namber
                <input
                className={style.input_number}
                type="tel"
                name="number"
                placeholder="Namber"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                //   id={numberInputId}
                //   value={number}
                //   onChange={handleChange}
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