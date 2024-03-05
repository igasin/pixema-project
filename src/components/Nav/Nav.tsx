import React, { useEffect } from 'react';
import { ROUTE } from 'router';

import { BasicSwitch, CustomLink } from 'components';
import {
  BookMarkIcon, FireIcon, HomeIcon, SettingIcon,
} from 'assets';
import { useAppDispatch, useAppSelector } from 'store';
import { toggleMode } from 'store/features';
import { getTheme } from 'store/selectors';
import { StyledMenu, StyledNavBox, StyledTitle } from './styles';

export const Nav = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getTheme);

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
  }, [theme]);

  return (
    <StyledMenu>
      <StyledNavBox>
        <CustomLink to={ROUTE.Home}>
          <HomeIcon />
          {' '}
          <StyledTitle>Home</StyledTitle>
        </CustomLink>
        <CustomLink to={ROUTE.Trends}>
          <BookMarkIcon />
          <StyledTitle>Trends</StyledTitle>
        </CustomLink>
        <CustomLink to={ROUTE.Favorites}>
          <FireIcon />
          <StyledTitle>Favorites</StyledTitle>
        </CustomLink>
        <CustomLink to={ROUTE.Settings}>
          <SettingIcon />
          <StyledTitle>Settings</StyledTitle>
        </CustomLink>
      </StyledNavBox>
      <BasicSwitch onClick={toggleTheme} />
    </StyledMenu>
  );
};
