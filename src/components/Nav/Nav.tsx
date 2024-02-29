import React from 'react';
import {
  BookMark, FireIcon, HomeIcon, Settings,
} from '../../assets';
import { ROUTE } from '../../router/routes';
import { CustomLink } from '../CustomLink/CustomLink';
import { StyledIcon, StyledLink, StyledNavBox } from './styles';

export const Nav = () => (
  <StyledNavBox>
    <StyledLink>
      <StyledIcon>
        <HomeIcon />
      </StyledIcon>
      <CustomLink to={ROUTE.Home}>Home</CustomLink>
    </StyledLink>
    <StyledLink>
      <StyledIcon>
        <FireIcon />
      </StyledIcon>
      <CustomLink to={ROUTE.Trends}>Trends</CustomLink>
    </StyledLink>
    <StyledLink>
      <StyledIcon>
        <BookMark />
      </StyledIcon>
      <CustomLink to={ROUTE.Favorites}>Favorites</CustomLink>
    </StyledLink>
    <StyledLink>
      <StyledIcon>
        <Settings />
      </StyledIcon>
      <CustomLink to={ROUTE.Settings}>Settings</CustomLink>
    </StyledLink>
  </StyledNavBox>
);
