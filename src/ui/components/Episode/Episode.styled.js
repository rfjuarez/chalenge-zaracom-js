import styled from 'styled-components';
import {colorTheme} from "../../../assets/tokens/tokens";

export const Audio = styled.audio`
    width:100%;
    height:32px; 
    &::-webkit-media-controls-panel {
    border-radius: 5px;
    background-color: ${colorTheme.DARK_STRONG};        
    }
    &::-webkit-media-controls-play-button {
    background-color: ${colorTheme.DARK_LIGHT};
    border-radius: 50%;    
    }
    &::-webkit-media-controls-play-button:hover {
    background-color:  ${colorTheme.SKY_REGULAR};
    }
    `