import React from 'react';
import useDebounce from "./useDebounce";
import * as Styled from './InputFilter.styled'

const InputFilter = ({queryHandler, placeHolder}) => {
    const debounce = useDebounce();
    return (
        <Styled.InputFilter type="text" placeholder={placeHolder}
                            onKeyUp={(event) =>
                                debounce(() => queryHandler(event.target.value))}
        />
    )
}
export default InputFilter;