import { MainLogo } from 'assets';
import {
  InputSearch, Modal, Nav, UserProfile,
} from 'components';
import { useToggle } from 'hooks';
import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  OutletBox,
  StyledBox,
  StyledHeaderGroup,
  StyledLogo,
  StyledNavBox,
  StyledTemplate,
} from './styles';

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle();

  return (
    <StyledTemplate>
      <StyledNavBox>
        <StyledLogo>
          <MainLogo width={160} />
        </StyledLogo>

        <Nav />
      </StyledNavBox>

      <StyledBox>
        <StyledHeaderGroup>
          <InputSearch toggleModal={toggleModal} />
          <UserProfile />
        </StyledHeaderGroup>

        <OutletBox>
          <Outlet />
        </OutletBox>

        <Modal isOpen={isOpen} toggleModal={toggleModal} />
      </StyledBox>
    </StyledTemplate>
  );
};
