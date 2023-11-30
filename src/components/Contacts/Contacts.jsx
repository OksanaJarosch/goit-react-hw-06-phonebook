import { Contact, Span, Btn } from "./Contacts.styled";
import { RiDeleteBin6Line } from 'react-icons/ri';

export const Contacts = ({ myContacts, onDelete }) => {
    return (
            <ul>
            {myContacts.map(contact => {
                const { id, name, number } = contact;

                    return (
                        <Contact key={id}>
                            <Span>{name}:
                            </Span>
                            <Span>{number}</Span>
                            <Btn type="button" onClick={() => onDelete(id)}><RiDeleteBin6Line /></Btn>
                        </Contact>
                    )
                })}
        </ul>
    )
};