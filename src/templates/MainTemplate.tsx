import { InputSearch, Modal, Nav } from 'components';
import { useToggle, useWindowSize } from 'hooks';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'store';
import { getTheme } from 'store/selectors';
import { StyledOutlet } from './AuthTemplate/styles';
import {
  Box, StyledBox, StyledHeaderGroup, StyledNav, StyledTemplate,
} from './styles';

export const MainTemplate = () => {
  const { theme } = useAppSelector(getTheme);
  const [isOpen, toggleModal] = useToggle();
  const { width = 0 } = useWindowSize();

  return (
    <StyledTemplate>
      <StyledBox>
        <StyledHeaderGroup>
          <InputSearch toggleModal={toggleModal} />
        </StyledHeaderGroup>

        <Box>
          {width > 1100 && (
            <StyledNav>
              <Nav />
            </StyledNav>
          )}
          <StyledOutlet>
            <Outlet />
          </StyledOutlet>
        </Box>
      </StyledBox>
      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </StyledTemplate>
  );
};
