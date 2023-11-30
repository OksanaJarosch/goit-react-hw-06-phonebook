import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledInput, StyledLabel, StyledButton, Error } from './Phonebook.styled';


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    number: Yup.string().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/, "It must be min 5 numbers (1234567 or 123-45-67)").required('Required'),
});


export const Phonebook = ({onAddContact}) => { 

        return (
                <Formik
                    initialValues={{
                        name: '',
                        number: '',
                    }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        onAddContact(values);
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