import styled, {keyframes} from 'styled-components';
import {colorTheme, zPosition} from "../../../assets/tokens/tokens";

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
export const SpinnerLoading = styled.div`
    position: fixed;
    top:0;
    left:0;
    margin-top: 20%;
    margin-left: 50%;
    margin-right: 50%;
    width: 50px;
    height: 50px;      
    z-index: ${zPosition.IN_FRONT};
    border: 10px solid ${colorTheme.DARK_LIGHT};
    border-top: 10px solid ${colorTheme.SKY_REGULAR}; 
    border-radius: 50%;
    animation: ${spinner} 1.5s linear infinite;     
`