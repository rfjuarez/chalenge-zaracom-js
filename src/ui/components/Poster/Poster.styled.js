import styled from 'styled-components';
import {zPosition} from '../../../assets/tokens/tokens';

const POSTER_IMAGE_RADIUS = 80;
const POSTER_WIDTH = 260;
const POSTER_HEIGHT = 280;

export const PosterWrapper = styled.div`
    position: relative;
    width: ${POSTER_WIDTH}px;
    height: ${POSTER_HEIGHT}px;
    box-sizing: border-box;
    
`
export const PosterWrapperImage = styled.div`
    display:inline-block;
    position: absolute;  
    left: ${POSTER_WIDTH / 2 - POSTER_IMAGE_RADIUS}px;
    z-index: ${zPosition.IN_FRONT};    
    box-sizing: border-box;   
    cursor: pointer;
`
export const PosterWrapperDescription = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 66%;
    bottom: 0;
    cursor: pointer;
    `
export const PosterContentDescription = styled.div`
    margin-top: 60px;
    text-align: center;
    `