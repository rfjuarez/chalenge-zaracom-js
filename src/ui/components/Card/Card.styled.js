import styled, {css} from 'styled-components';

const withSize = (attribute) => css`
    ${!!attribute ? `${attribute}px;` : ';'}    
    `
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 16px; 
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width:${({width}) => withSize(width)}
    height:${({height}) => withSize(height)}
    cursor:${({onClick}) => `${!!onClick ? 'pointer;' : 'auto;'}`}
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    `