import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledInput, StyledLabel, StyledButton, Error } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Report } from 'notiflix/build/notiflix-report-aio';


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    number: Yup.string().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/, "It must be min 5 numbers (1234567 or 123-45-67)").required('Required'),
});


    
export const Phonebook = () => { 

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);


    const handleAddContact = values => {
    
    const checkContact = contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase());

    if (checkContact) {
        Report.warning(
        'Contact has not been added.',
        `${values.name} is already in contacts.`,
        'Okay',
        );
        return
        } 
        dispatch(addContact(values));
    }

    
        return (
                <Formik
                    initialValues={{
                        name: '',
                        number: '',
                    }}
                    validationSchema={schema}
                onSubmit={(values, actions) => {              
                    handleAddContact(values);
                        actions.resetForm();
                    }}
                >

                            <StyledForm autoComplete="off">
                    <StyledLabel>
                        Name
                            <StyledInput type="text" name="name" placeholder="New contact"/>
                            <Error name="name" component="p"/>
                        </StyledLabel>
                        <StyledLabel>
                        Number
                            <StyledInput type="tel" name="number" placeholder="Enter a number"/>
                            <Error name="number" component="p"/>
                    </StyledLabel>
                    <StyledButton type="submit">Add contact</StyledButton>
                    </StyledForm>
                </Formik>
    )
};