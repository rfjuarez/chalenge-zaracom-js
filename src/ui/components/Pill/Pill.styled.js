import styled from 'styled-components';
import {
  stylesTextBuilder,
  stylesTextThemeColorType,
  stylesTextType,
  stylesTextWeightType
} from '../../../assets/styles/text-styles';
import {colorTheme} from '../../../assets/tokens/tokens';

export const Pill = styled.div`
    border-radius: 20%;
    padding: 8px 16px;
    margin: 0;
    align-self: center;
    text-align: center;
    ${stylesTextBuilder(stylesTextType.LARGE, stylesTextWeightType.HEAVY, stylesTextThemeColorType.HIGHLIGHTED_LIGHT)}
    overflow: hidden;
    background: ${colorTheme.SKY_REGULAR};
`