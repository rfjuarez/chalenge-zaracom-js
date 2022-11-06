import React from 'react';
import * as Styled from './Loading.styled'

const Loading = ({children, isLoading}) => (
  <>
    {!!isLoading && isLoading() && <Styled.SpinnerLoading/>}
    {children}
  </>
);
export default Loading;