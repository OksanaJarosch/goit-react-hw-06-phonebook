import {useEffect, useState} from "react";
import { GlobalStyle } from "GlobalStyle";
import { nanoid } from 'nanoid';
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { Container, Title } from "./App.styled";
import { Filter } from "./Filter/Filter"
import { Report } from 'notiflix/build/notiflix-report-aio';

const LS_KEY = "contacts";

export const App = () => {
  const users = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(users);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = window.localStorage.getItem(LS_KEY);
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    };
  }, []
  )

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);


  const addContact = values => {
    const inputId = nanoid();

    const checkContact = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());

    if (checkContact) {
      Report.warning(
        'Contact has not been added.',
        `${values.name} is already in contacts.`,
        'Okay',
      );
    } else {
      setContacts(prevContacts => {
        return [...prevContacts, { ...values, id: inputId }]
      })
    }
  };

  const updateFilter = value => {
    setFilter(value);
  };

  const handleDelete = contactId => {
    const newContacts = contacts.filter(contact => contact.id !== contactId);
        
    setContacts(newContacts)
  };
  
  const visibleContacts = () => {
    if (filter === "") {
      return contacts;
    }

    return contacts.filter(
      contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <Phonebook onAddContact={addContact}></Phonebook>

      <Title>Contacts</Title>
      {contacts.length > 0 ? <Filter onFilter={updateFilter}></Filter>
        : <p>You don't have any contacts</p>}
      <Contacts myContacts={visibleContacts()} onDelete={handleDelete}></Contacts> 
      <GlobalStyle />
    </Container>
  )
};