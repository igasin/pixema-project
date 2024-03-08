import { InputSearch, Modal, Nav } from 'components';
import { useToggle, useWindowSize } from 'hooks';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { onAuthStateChanged } from 'firebase/auth';
import { setAuth, unsetAuth } from 'store/features';
import { getTheme } from 'store/selectors';
import { auth } from '../firebase';
import { StyledNav, StyledTemplate, Wrap } from './styles';

export const MainTemplate = () => {
  const [isOpen, toggleModal] = useToggle();
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
  }, [theme]);

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
