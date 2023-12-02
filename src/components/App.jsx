import { GlobalStyle } from "GlobalStyle";
import { Phonebook } from "./Phonebook/Phonebook";
import { Contacts } from "./Contacts/Contacts";
import { Container, Title } from "./App.styled";
import { Filter } from "./Filter/Filter"
import { useSelector } from "react-redux";


export const App = () => {

  const contacts = useSelector(state => state.contacts);

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