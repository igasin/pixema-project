import { InputSearch, Modal, Nav } from 'components';
import { useToggle, useWindowSize } from 'hooks';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setAuth, unsetAuth } from 'store/features/UserSlice/UserSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { StyledNav, StyledTemplate, Wrap } from './styles';
import { auth } from '../firebase';

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle();
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuth(user));
      } else {
        dispatch(unsetAuth());
      }
    });
  }, [dispatch]);

  return (
    <StyledTemplate>
      <InputSearch toggleModal={toggleModal} />

      <Wrap>
        {width > 1380 && (
          <StyledNav>
            <Nav />
          </StyledNav>
        )}
        <Outlet />
      </Wrap>

      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </StyledTemplate>
  );
};
