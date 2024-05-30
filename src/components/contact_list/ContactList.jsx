import css from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
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
                    
                    <button className={css.btn} onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
export default ContactList;