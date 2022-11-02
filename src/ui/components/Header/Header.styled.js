import styled from "styled-components";
import {colorTheme, zPosition} from "../../../assets/tokens/tokens";

export const Header = styled.div`
    position:fixed;
    top:0;
    left:0;
    padding: 8px 16px;     
    z-index: ${zPosition.IN_FRONT};
    width: 100%;
    background-color: ${colorTheme.LIGHTEST};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    `

export const HeaderContent = styled.div`
    position: relative;
    width: 100%;
    `
export const Link = styled.div`
    cursor: pointer;
    width: fit-content;
    `
export const ChildrenWrapper = styled.div`
    position: relative;
    width: 100%;
`