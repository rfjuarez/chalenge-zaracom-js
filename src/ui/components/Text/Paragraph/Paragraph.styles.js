import {stylesTextBuilder} from "../../../../assets/styles/text-styles";
import styled, {css} from 'styled-components';


export const Paragraph = styled.p`
    padding: 8px 0px;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  ${({type, weight, themeColor}) => css`
    ${stylesTextBuilder(type, weight, themeColor)};
  `}
`