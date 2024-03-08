import { useEffect } from 'react';
import { DarkLogo, MainLogo } from 'assets';
import { ROUTE } from 'router';
import { Outlet } from 'react-router-dom';
import { getTheme } from 'store/selectors';
import { useAppDispatch, useAppSelector } from 'store';
import { BasicSwitch } from 'components';
import { toggleMode } from 'store/features';
import {
  LogoWrap, StyledAuth, StyledCopyright, StyledOutlet,
} from './styles';

export const AuthTemplate = () => {
  const { theme } = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  return (
    <StyledAuth>
      <LogoWrap to={ROUTE.Home}>
        {theme === 'dark' ? <MainLogo width={160} /> : <DarkLogo width={160} />}
      </LogoWrap>
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
      <BasicSwitch onClick={toggleTheme} />
      <StyledCopyright>2024 pixema</StyledCopyright>
    </StyledAuth>
  );
};
