import React from 'react';
import { DarkLogo, MainLogo } from 'assets';
import { ROUTE } from 'router';
import { Outlet } from 'react-router-dom';
import { getTheme } from 'store/selectors';
import { useAppSelector } from 'store';
import {
  LogoWrap, StyledAuth, StyledCopyright, StyledOutlet,
} from './styles';

export const AuthTemplate = () => {
  const { theme } = useAppSelector(getTheme);

  return (
    <StyledAuth>
      <LogoWrap to={ROUTE.Home}>
        {theme === 'dark' ? <MainLogo width={160} /> : <DarkLogo width={160} />}
      </LogoWrap>
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
      <StyledCopyright>2024 pixema</StyledCopyright>
    </StyledAuth>
  );
};
