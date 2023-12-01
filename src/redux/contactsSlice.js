import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';


export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {contacts: []},
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
                state.contacts.push(action.payload);
            }
        },

        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact =>  contact.id !== action.payload)
        }
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;