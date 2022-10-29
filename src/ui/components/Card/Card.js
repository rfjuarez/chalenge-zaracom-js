import React from "react";
import './Card.css'

const Card = ({children, width, height}) => {
    const styles = {
        height: height ? `${height}px` : undefined,
        width: width ? `${width}px` : undefined,
    }
    return (
        <div style={{...styles}} className='card'>{children}</div>
    )
}
export default Card;