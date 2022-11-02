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
    SKY: 'sky',
    SKY_STRONG: 'sky-strong',

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
    [stylesTextThemeColorType.REGULAR]: css`
    color: ${colorTheme.DARK_STRONG};
    `,
    [stylesTextThemeColorType.STRONG]: css`
    color: ${colorTheme.DARK_STRONGEST};
  `,
    [stylesTextThemeColorType.LIGHT]: css`
    color: ${colorTheme.SKY_REGULAR};
   `,
    [stylesTextThemeColorType.HIGHLIGHTED_LIGHT]: css`
    color: ${colorTheme.LIGHT_REGULAR};
   `,
    [stylesTextThemeColorType.HIGHLIGHTED_STRONG]: css`
    color: ${colorTheme.LIGHTEST};
   `,
    [stylesTextThemeColorType.SKY_STRONG]: css`
    color: ${colorTheme.SKY_STRONG};
   `,
    [stylesTextThemeColorType.SKY]: css`
    color: ${colorTheme.SKY_REGULAR};
   `
};

export const stylesTextBuilder = (type, weight, themeColor) => (
    css`
    ${stylesTextTypeMapper[type]};
    ${stylesTextWeightTypeMapper[weight]};
    ${stylesTexThemeColorTypeMapper[themeColor]};
  `);
