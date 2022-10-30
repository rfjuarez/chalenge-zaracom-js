import {css} from 'styled-components';
import {colorTheme} from "../tokens/tokens";

export const stylesTextType = {
    REGULAR: 'regular',
    SMALL: 'small',
    LARGE: 'large',
}
export const stylesTextWeightType = {
    REGULAR: 'regular',
    HEAVY: 'heavy',
    LIGHT: 'light',
}
export const stylesTextThemeColorType = {
    REGULAR: 'regular',
    STRONG: 'strong',
    LIGHT: 'light',
    HIGHLIGHTED_STRONG: 'highlighted-strong',
    HIGHLIGHTED_LIGHT: 'highlighted-light',
}

export const stylesTextTypeMapper = {
    regular: () => css`
    font-size: 14px;
    line-height: 24px;
    font-family: Roboto,serif;
  `,
    small: () => css`
    font-size: 12px;
    line-height: 16px;
    font-family: Roboto,serif;
    `,
    large: () => css`
    font-size: 16px;
    line-height: 24px;
    font-family: Roboto,serif;
    `
}
export const stylesTextWeightTypeMapper = {
    regular: () => css`
    font-weight: normal;
    `,
    heavy: () => css`
    font-weight: bold;
  `,
    light: () => css`
    font-weight: 200;
    `
}
export const stylesTexThemeColorTypeMapper = {
    [stylesTextThemeColorType.REGULAR]:css`
    color: ${colorTheme.DARK_STRONG};
    `,
    [stylesTextThemeColorType.STRONG]:css`
    color: ${colorTheme.DARK_STRONGEST};
  `,
    [stylesTextThemeColorType.LIGHT]:css`
    color: ${colorTheme.SKY_REGULAR};
   `,
    [stylesTextThemeColorType.HIGHLIGHTED_LIGHT]:css`
    color: ${colorTheme.DARK_LIGHT};
   `,
    [stylesTextThemeColorType.HIGHLIGHTED_STRONG]:css`
    color: ${colorTheme.SKY_STRONG};
   `
};

export const stylesTextBuilder = (type, weight, themeColor) => (
    css`
    ${stylesTextTypeMapper[type]};
    ${stylesTextWeightTypeMapper[weight]};
    ${stylesTexThemeColorTypeMapper[themeColor]};
  `);
