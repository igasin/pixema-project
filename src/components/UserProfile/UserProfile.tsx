import { ArrowRightIcon, UserIcon } from 'assets';
import React from 'react';
import { ROUTE } from 'router';
import {
  StyledText, StyledUser, StyledUserIcon, UserTextContainer,
} from './styles';

export const UserProfile = () => (
  <StyledUser>
    <StyledUserIcon>
      <UserIcon />
    </StyledUserIcon>

    <UserTextContainer to={ROUTE.Sign_in}>
      <StyledText>Sign In</StyledText>
    </UserTextContainer>

    <ArrowRightIcon />
  </StyledUser>
);
