import styled from 'styled-components';
import {colorTheme} from "../../../assets/tokens/tokens";
import {
    stylesTextBuilder,
    stylesTextThemeColorType,
    stylesTextType,
    stylesTextWeightType
} from "../../../assets/styles/text-styles";


export const InputFilter = styled.input`
    padding: 8px 16px;
    width: 200px;
    height: 36px;
    ${stylesTextBuilder(stylesTextType.LARGE
    , stylesTextWeightType.REGULAR
    , stylesTextThemeColorType.REGULAR)};
    border: 2px solid ${colorTheme.DARK_LIGHT}; 
    border-radius: 5px;    
    &:focus,
    &:focus-visible {
        border: 2px solid ${colorTheme.SKY_STRONG};
         outline: none;
    }
`