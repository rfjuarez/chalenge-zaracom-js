import React, {useRef} from "react";
import * as Styled from './Image.styled'
import WithoutImage from '../../../assets/images/empty-poster.png'

const onLoadImageError = (imgRef) => {
    if (imgRef?.current?.src) {
        imgRef.current.src = WithoutImage
    }
}
const Image = ({width, src, alt, round}) => {
    const imgRef = useRef();
    return (
        <Styled.Image
            src={src}
            width={width}
            alt={alt}
            onError={() => onLoadImageError(imgRef)}
            isRound={round}
        />
    )
}
export default Image;