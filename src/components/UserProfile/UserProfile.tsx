import { ArrowRightIcon, UserIcon } from 'assets';
import { CustomLink } from 'components';
import React from 'react';
import { ROUTE } from 'router';
import { useAppSelector } from 'store';
import { getUserInfo } from 'store/selectors';
import {
  StyledText, StyledUser, StyledUserIcon, UserNav, UserTextContainer,
} from './styles';

export const UserProfile = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return (
    <StyledUser>
      <StyledUserIcon>
        <UserIcon />
      </StyledUserIcon>

      <UserNav>
        {isAuth ? (
          <CustomLink to={ROUTE.Settings}>
            <StyledText>Edit Profile</StyledText>
          </CustomLink>
        ) : (
          <CustomLink to={ROUTE.Sign_in}>
            <StyledText>Sign in</StyledText>
          </CustomLink>
        )}
      </UserNav>
    </StyledUser>
  );
};
