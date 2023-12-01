import {useEffect, useState} from "react";
import { GlobalStyle } from "GlobalStyle";
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { Container, Title } from "./App.styled";
import { Filter } from "./Filter/Filter"

const LS_KEY = "contacts";

export const App = () => {
  const users = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(users);

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


  return (
    <Container>
      <Title>Phonebook</Title>
      <Phonebook></Phonebook>

      <Title>Contacts</Title>
      {contacts.length > 0 ? <Filter></Filter>
        : <p>You don't have any contacts</p>}
      <Contacts></Contacts> 
      <GlobalStyle />
    </Container>
  )
};