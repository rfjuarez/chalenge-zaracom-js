import React from 'react';
import * as Styles from './Paragraph.styles';
import PropTypes from 'prop-types';
import {stylesTextThemeColorType, stylesTextType, stylesTextWeightType} from '../../../../assets/styles/text-styles';

const Paragraph = ({type, weight, themeColor, children}) => {
  return (
    <Styles.Paragraph
      type={type}
      weight={weight}
      themeColor={themeColor}
    >
      {children}
    </Styles.Paragraph>
  )
}
export default Paragraph;

Paragraph.propTypes = {
  type: PropTypes.oneOf(Object.values(stylesTextType)).isRequired,
  weight: PropTypes.oneOf(Object.values(stylesTextWeightType)).isRequired,
  themeColor: PropTypes.oneOf(Object.values(stylesTextThemeColorType)).isRequired,
};

Paragraph.defaultProps = {
  type: stylesTextType.REGULAR,
  weight: stylesTextWeightType.REGULAR,
  themeColor: stylesTextThemeColorType.REGULAR
};