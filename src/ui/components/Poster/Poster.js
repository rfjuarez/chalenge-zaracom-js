import React from 'react';
import Card from '../Card/Card';
import Image from '../Image/Image';
import Paragraph from '../Text/Paragraph/Paragraph';
import {stylesTextThemeColorType, stylesTextType, stylesTextWeightType} from '../../../assets/styles/text-styles';
import * as Styled from './Poster.styled'
import PropTypes from 'prop-types';

const Poster = ({podcast, onClick}) => {
  const {
    title, author, poster
  } = podcast;

  return (
    <Styled.PosterWrapper>
      <Styled.PosterWrapperImage onClick={(event) => onClick(event, podcast)}>
        <Image alt={title} src={poster} round={true} width={100}/>
      </Styled.PosterWrapperImage>
      <Styled.PosterWrapperDescription onClick={(event) => onClick(event, podcast)}>
        <Card>
          <Styled.PosterContentDescription>
            <Paragraph
              weight={stylesTextWeightType.HEAVY}
              type={stylesTextType.LARGE}
              color={stylesTextThemeColorType.STRONG}
            >
              {title}
            </Paragraph>
            <Paragraph type={stylesTextType.SMALL}>
              {author}
            </Paragraph>
          </Styled.PosterContentDescription>
        </Card>
      </Styled.PosterWrapperDescription>
    </Styled.PosterWrapper>
  );
}
Poster.prototype = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
export default Poster;