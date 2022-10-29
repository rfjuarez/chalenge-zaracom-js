import styled, {css} from 'styled-components';

export const Image = styled.img`
    max-width: 210px;
    max-height: 210px;
    background: aliceblue;
  ${({isRound}) => css`
    ${isRound ? `border-radius: 50%` : `border-radius:2px`};
  `}
  `