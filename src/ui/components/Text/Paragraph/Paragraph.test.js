import { render, cleanup } from '@testing-library/react';
import Paragraph from './Paragraph';
import {
  stylesTextThemeColorType,
  stylesTextType,
  stylesTextTypeMapper,
  stylesTextWeightType,
  stylesTextWeightTypeMapper
} from '../../../../assets/styles/text-styles';
afterEach(cleanup);

describe('Paragraph tests', () => {
  const textChildren = 'Some text';
  it('debe mostrarse el componente', () => {
    const container = render(<Paragraph/>);
    expect(container).toBeDefined();
  });
  it('debe mostrarse el children', () => {
    const container = render(<Paragraph>{textChildren}</Paragraph>);
    expect(container.getByText(textChildren)).toHaveTextContent(
      textChildren
    );
  });
  it('debe mostrarse los estilos correspondientes a Type=Small', () => {
    const { getByText } = render(<Paragraph type={stylesTextType.SMALL}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      `${stylesTextTypeMapper[stylesTextType.SMALL]()};`
    );
  });
  it('debe mostrarse los estilos correspondientes a Type=Large', () => {
    const { getByText } = render(<Paragraph type={stylesTextType.LARGE}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      `${stylesTextTypeMapper[stylesTextType.LARGE]()};`
    );
  });
  it('debe mostrarse los estilos correspondientes a Type= Regular', () => {
    const { getByText } = render(<Paragraph type={stylesTextType.REGULAR}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      `${stylesTextTypeMapper[stylesTextType.REGULAR]()};`
    );
  });
  it('debe mostrarse los estilos correspondientes a weight= Regular', () => {
    const { getByText } = render(<Paragraph weight={stylesTextWeightType.REGULAR}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      `${stylesTextWeightTypeMapper[stylesTextWeightType.REGULAR]()};`
    );
  });
  it('debe mostrarse los estilos correspondientes a weight= Heavy', () => {
    const { getByText } = render(<Paragraph weight={stylesTextWeightType.HEAVY}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      `${stylesTextWeightTypeMapper[stylesTextWeightType.HEAVY]()};`
    );
  });
  it('debe mostrarse los estilos correspondientes a weight= Light', () => {
    const { getByText } = render(<Paragraph weight={stylesTextWeightType.LIGHT}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      `${stylesTextWeightTypeMapper[stylesTextWeightType.LIGHT]()};`
    );
  });
  it('debe mostrarse los estilos correspondientes a themeColor= Light', () => {
    const { getByText } = render(<Paragraph themeColor={stylesTextThemeColorType.LIGHT}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      'color: #2874a6;'
    );
  });
  it('debe mostrarse los estilos correspondientes a themeColor= Regular', () => {
    const { getByText } = render(<Paragraph themeColor={stylesTextThemeColorType.REGULAR}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      'color: #616a6b;'
    );
  });
  it('debe mostrarse los estilos correspondientes a themeColor= Strong', () => {
    const { getByText } = render(<Paragraph themeColor={stylesTextThemeColorType.STRONG}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      'color: #212f3d;'
    );
  });
  it('debe mostrarse los estilos correspondientes a themeColor= highlighted-light', () => {
    const { getByText } = render(<Paragraph themeColor={stylesTextThemeColorType.HIGHLIGHTED_LIGHT}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      'color: #F4F6F6;'
    );
  });
  it('debe mostrarse los estilos correspondientes a themeColor= highlighted-strong', () => {
    const { getByText } = render(<Paragraph themeColor={stylesTextThemeColorType.HIGHLIGHTED_STRONG}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      'color: #F8F9F9;'
    );
  });
  it('debe mostrarse los estilos correspondientes a themeColor= sky-strong', () => {
    const { getByText } = render(<Paragraph themeColor={stylesTextThemeColorType.SKY_STRONG}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      'color: #1f618d;'
    );
  });
  it('debe mostrarse los estilos correspondientes a themeColor= sky', () => {
    const { getByText } = render(<Paragraph themeColor={stylesTextThemeColorType.SKY}>{textChildren}</Paragraph>);
    expect(getByText(textChildren)).toHaveStyle(
      'color: #2874a6;'
    );
  });
});