import { InputSearch, Modal, Nav } from 'components';
import { useToggle, useWindowSize } from 'hooks';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'store';
import { getTheme } from 'store/selectors';
import {
  OutletBox, StyledBox, StyledHeaderGroup, StyledTemplate,
} from './styles';

export const MainTemplate = () => {
  const { theme } = useAppSelector(getTheme);
  const [isOpen, toggleModal] = useToggle();
  const { width = 0 } = useWindowSize();

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
  }, [theme]);

  return (
    <StyledTemplate>
      <StyledBox>
        <StyledHeaderGroup>
          <InputSearch toggleModal={toggleModal} />
        </StyledHeaderGroup>

        <OutletBox>
          {width > 900 && <Nav />}
          <Outlet />
        </OutletBox>

        <Modal isOpen={isOpen} toggleModal={toggleModal} />
      </StyledBox>
    </StyledTemplate>
  );
};
