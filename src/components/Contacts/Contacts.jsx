import { useDispatch, useSelector } from "react-redux";
import { Contact, Span, Btn } from "./Contacts.styled";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteContact } from "redux/contactsSlice";

export const Contacts = ({ myContacts }) => {
    
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    return (
            <ul>
            {contacts.map(contact => {
                const { id, name, number } = contact;

                    return (
                        <Contact key={id}>
                            <Span>{name}:
                            </Span>
                            <Span>{number}</Span>
                            <Btn type="button" onClick={() => dispatch(deleteContact(id))}><RiDeleteBin6Line /></Btn>
                        </Contact>
                    )
                })}
        </ul>
    )
};