import React, {useRef} from 'react';
import * as Styled from './Image.styled'
import WithoutImage from '../../../assets/images/empty-poster.png'

const onLoadImageError = (imgRef) => {
  if (imgRef?.current?.src) {
    imgRef.current.src = WithoutImage
  }
}
const Image = ({width, height, src, alt, round}) => {
  const imgRef = useRef();
  return (
    <Styled.Image
      ref={imgRef}
      src={src}
      width={width}
      height = {height}
      alt={alt}
      onError={() => onLoadImageError(imgRef)}
      isRound={round}
    />
  )
}
export default Image;