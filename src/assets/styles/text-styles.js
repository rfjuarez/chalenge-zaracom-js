import {css} from 'styled-components';

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
    LIGHT: 'light'
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
    regular: () => css`
    color: #616A6B;
    `,
    strong: () => css`
    color: #212F3D;
  `,
    light: () => css`
    color: #B3B6B7;
   `
};

export const stylesTextBuilder = (type, weight, themeColor) => (
    css`
    ${stylesTextTypeMapper[type]};
    ${stylesTextWeightTypeMapper[weight]};
    ${stylesTextThemeColorType[themeColor]};
  `);
