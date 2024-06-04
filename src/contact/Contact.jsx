import { useDispatch } from "react-redux";
import { deleteContact } from '../redux/contactsSlice'


const Contact = ({ contact, deleteContact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <li>
            {contact.name}: {contact.number}
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default Contact;
