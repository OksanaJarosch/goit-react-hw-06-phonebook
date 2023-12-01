import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';


export const contactsSlice = createSlice({
    name: "contacts",
    initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
    reducers: {

        addContact: {
            prepare(values) {
                return {
                    payload: {
                        id: nanoid(),
                        name: values.name,
                        number: values.number,
            }
        }
    },
            reducer(state, action) {
                state.push(action.payload);
            }
        },

        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact =>  contact.id !== action.payload)
        }
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;