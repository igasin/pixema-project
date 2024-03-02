import React from 'react';
import { Link, Route } from 'react-router-dom';
import { ROUTE } from 'router';

import { CustomLink } from 'components';
import {
  BookMarkIcon, FireIcon, HomeIcon, SettingIcon,
} from 'assets';
import {
  StyledIcon,
  StyledLink,
  StyledMenu,
  StyledNavBox,
  StyledTitle,
} from './styles';

export const Nav = () => (
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
  </StyledMenu>
);
