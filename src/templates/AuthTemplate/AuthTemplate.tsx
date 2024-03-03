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
    </StyledOutlet>
    <StyledCopyright>2024 Pixema</StyledCopyright>
  </StyledAuth>
);
