import { ArrowRightIcon, UserIcon } from 'assets';
import React from 'react';
import { ROUTE } from 'router';
import { useAppDispatch, useAppSelector } from 'store';
import { getUserInfo } from 'store/selectors';
import { useToggle } from 'hooks';
import { fetchSignOut } from 'store/features';
import {
  ArrowButton,
  LogOut,
  StyledLink,
  StyledMenu,
  StyledText,
  StyledTitle,
  StyledUser,
  StyledUserIcon,
  UserNav,
  UserTitle,
  Wrap,
} from './styles';

export const UserProfile = () => {
  const { isAuth, email } = useAppSelector(getUserInfo);
  const [toggle, setToggle] = useToggle(false);
  const dispatch = useAppDispatch();

  const handleOut = () => {
    dispatch(fetchSignOut());
  };

  return (
    <StyledUser>
      <StyledUserIcon>
        <UserIcon />
      </StyledUserIcon>

      <UserNav>
        {isAuth ? (
          <Wrap>
            <StyledTitle>
              <UserTitle>{email}</UserTitle>
            </StyledTitle>

            <ArrowButton onClick={setToggle}>
              <ArrowRightIcon />
            </ArrowButton>
          </Wrap>
        ) : (
          <Wrap>
            <StyledTitle>
              <StyledLink to={ROUTE.Sign_in}>Sign in</StyledLink>
            </StyledTitle>

            <ArrowButton onClick={setToggle}>
              <ArrowRightIcon />
            </ArrowButton>
          </Wrap>
        )}
        {toggle && (
          <StyledMenu>
            {isAuth ? (
              <>
                <StyledLink to={ROUTE.Settings}>
                  <StyledText>Edit</StyledText>
                </StyledLink>

                <LogOut type="button" onClick={handleOut}>
                  Log out
                </LogOut>
              </> // add log out in user slice
            ) : (
              <StyledLink to={ROUTE.Sign_up}>
                <StyledText> Sign up</StyledText>
              </StyledLink>
            )}
          </StyledMenu>
        )}
      </UserNav>
    </StyledUser>
  );
};
