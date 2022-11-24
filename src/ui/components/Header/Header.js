import React from 'react';
import * as Styled from './Header.styled'
import {stylesTextThemeColorType, stylesTextType, stylesTextWeightType} from '../../../assets/styles/text-styles';
import Paragraph from '../Text/Paragraph/Paragraph';
import {useNavigate} from 'react-router';
import {paths} from '../../routes/paths';

const Header = ({title, children}) => {
  const navigate = useNavigate();
  const navigateToHomeHandler = (() => {
    navigate(paths.HOME);
  })
  return (<Styled.Header>
    <Styled.HeaderContent>
      <Styled.Link onClick={navigateToHomeHandler}>
        <Paragraph type={stylesTextType.LARGE}
          themeColor={stylesTextThemeColorType.SKY_STRONG}
          weight={stylesTextWeightType.HEAVY}

        >
          {title}
        </Paragraph>
      </Styled.Link>
    </Styled.HeaderContent>
    <Styled.ChildrenWrapper>
      {children}
    </Styled.ChildrenWrapper>
  </Styled.Header>)
}
export default Header;
