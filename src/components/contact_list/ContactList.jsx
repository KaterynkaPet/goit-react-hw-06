import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice'

import css from './ContactList.module.css'

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));  
    };

    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
                <li className={css.form} key={contact.id}>
                    <ul className={css.user} >
                        <li className={css.userList}>
                            <img src='/user.svg' alt='svg icon' /> {contact.name}
                        </li>
                        <li className={css.userList}>
                            <img src='/phone.svg' alt='svg icon' />{contact.number}
                        </li>
                    </ul>
                    
                    <button className={css.btn} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
export default ContactList;