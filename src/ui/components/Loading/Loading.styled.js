import styled, {keyframes} from 'styled-components';
import {colorTheme, zPosition} from '../../../assets/tokens/tokens';

const spinner = keyframes`
    0% {
        transform: scale(1,1);
    }
    100% {
        transform: scale(2,2);
    }
`
export const SpinnerLoading = styled.div`
    position: fixed;
    top:20px;
    right:20px;
    width: 16px;
    height: 16px;
    background:${colorTheme.SKY_REGULAR};      
    z-index: ${zPosition.IN_FRONT+1};
    background-image: radial-gradient(circle, ${colorTheme.SKY_STRONG}, ${colorTheme.LIGHTEST});
    border-radius: 50%;
    animation: ${spinner} 1.5s linear infinite;     
`