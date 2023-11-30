import { Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";


export const StyledForm = styled(Form)`
margin-bottom:36px;
`;

export const StyledInput = styled(Field)`
display: block;
margin: 8px 0;
padding: 4px;
font-size: 16px;
border-radius: 4px;
border: 1px solid gray;
`;

export const Error = styled(ErrorMessage)`
font-size: 16px;
color: #c7231b;
`;

export const StyledLabel = styled.label`
font-size: 18px;
`;

export const StyledButton = styled.button`
margin-top: 18px;
padding: 4px;
background-color: white;
border: transparent;
border-radius: 4px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

&:hover{
    background-color: #ededed;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
}
`;