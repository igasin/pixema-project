import React from 'react';
import { MainLogo } from 'assets';
import { ROUTE } from 'router';
import { Outlet } from 'react-router-dom';
import {
  LogoWrap, StyledAuth, StyledCopyright, StyledOutlet,
} from './styles';

export const AuthTemplate = () => (
  <StyledAuth>
    <LogoWrap to={ROUTE.Home}>
      <MainLogo width={158} />
    </LogoWrap>
    <StyledOutlet>
      <Outlet />
      <StyledCopyright>2024 pixema</StyledCopyright>
      {' '}
    </StyledOutlet>
  </StyledAuth>
);
