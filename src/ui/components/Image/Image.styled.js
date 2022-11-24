import styled, {css} from 'styled-components';

export const Image = styled.img`
    max-width: 320px;
    align-self: center;
    ${({isRound}) => css`
      ${isRound ? 'border-radius: 50%' : 'border-radius:2px'};
    `}
    ${({width}) => css`
          width: ${width}px;
          height: auto;
    `}
    ${({height}) => css`
          height: ${height}px;
    `}
  `