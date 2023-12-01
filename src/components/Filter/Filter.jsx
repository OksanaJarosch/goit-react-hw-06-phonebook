import { useDispatch } from "react-redux";
import { StyledInput, StyledLabel } from "./Filter.styled"
import { updateFilter } from "redux/filterSlice";


export const Filter = () => {

    const dispatch = useDispatch();
    
    return (
                <StyledLabel>
                    Find contacts by name
            <StyledInput type="text" name="filter" placeholder="Search" onChange={evt => dispatch(updateFilter(evt.target.value))} />
                    </StyledLabel>
    )
}
