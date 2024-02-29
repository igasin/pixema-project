import React from 'react';
import { MainLogo } from '../../assets';
import { InputSearch } from '../InputSearch/InputSearch';
import { StyledHeader, StyledLogo, StyledSearch } from './styles';

export const Header = () => (
  <StyledHeader>
    <StyledLogo>
      <MainLogo />
    </StyledLogo>
    <StyledSearch>
      <InputSearch />
    </StyledSearch>
  </StyledHeader>
);
