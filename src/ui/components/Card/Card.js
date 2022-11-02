import React from "react";
import * as Styled from './Card.styled';

const Card = ({children, width, height, onClick}) => {
    return (
        <Styled.Card
            width={width}
            height={height}
            onClick={onClick}>
            {children}
        </Styled.Card>
    )
}
export default Card;