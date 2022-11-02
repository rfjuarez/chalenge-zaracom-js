import styled, {css} from 'styled-components';
import {
    stylesTextBuilder,
    stylesTextThemeColorType,
    stylesTextType,
    stylesTextWeightType,
} from "../../../assets/styles/text-styles";

const buildBorderCell = (radius) => css`
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-left: none;
    }
  `
export const EpisodeGrid = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;    
    `

export const Table = styled.table`
    border-collapse:separate;
    border: none;
    border-radius:5px;
    padding: 7px 3px;
    width: 100%;
    margin-top: 24px;       
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const HeaderCell = styled.th`
     text-align: center;
     border-top: none;
    ${stylesTextBuilder(stylesTextType.REGULAR
    , stylesTextWeightType.HEAVY
    , stylesTextThemeColorType.REGULAR)};
    ${buildBorderCell(5)};
`
export const DataCell = styled.td`
     text-align: left;
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
     ${stylesTextBuilder(stylesTextType.SMALL
    , stylesTextWeightType.HEAVY
    , stylesTextThemeColorType.STRONG)};
     ${buildBorderCell(5)};    
     
`
export const DataHighlightedCell = styled.td`
     text-align: left;
     ${stylesTextBuilder(stylesTextType.REGULAR
    , stylesTextWeightType.LIGHT
    , stylesTextThemeColorType.SKY_STRONG)};
     ${buildBorderCell(5)};    
`
export const TableBody = styled.tbody`
    cursor: pointer;
    `
export const Row = styled.tr`          
     &:nth-child(even) {
        background-color: #dddddd;
     }    
`