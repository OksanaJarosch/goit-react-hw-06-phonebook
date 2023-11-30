import { StyledInput, StyledLabel } from "./Filter.styled"


export const Filter = ({onFilter}) => {
    
    return (
                <StyledLabel>
                    Find contacts by name
            <StyledInput type="text" name="filter" placeholder="Search" onChange={evt => onFilter(evt.target.value)} />
                    </StyledLabel>
    )
}
