import { useEffect, useState } from 'react'
import ContactForm from './components/contact_form/ContactForm'
import SearchBox from './components/search_box/SearchBox'
import ContactList from './components/contact_list/ContactList'
import Contact from './contact/Contact'
import css from './App.module.css'


const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
      
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    } else {
      setContacts(initialContacts);
    }
  }, []);

  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((contacts) => {
      return [...contacts, contact];
    });
  };

  const deleteContact = (id) => {
    setContacts((contacts) => {
      return contacts.filter(contact => contact.id !== id)
    });
  };

  const filterContactsByName = (name) => {
    setSearchTerm(name);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filterContactsByName={filterContactsByName} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  )
}

export default App;
