import { ArrowRightIcon, UserIcon } from 'assets';
import React from 'react';
import { generatePath } from 'react-router-dom';
import { ROUTE } from 'router';
import {
  StyledButton,
  StyledText,
  StyledUser,
  StyledUserIcon,
  UserTextContainer,
} from './styles';

export const UserProfile = () => (
  <StyledUser>
    <StyledUserIcon>
      <UserIcon />
    </StyledUserIcon>

    <UserTextContainer to={ROUTE.SIGN_IN}>
      <StyledText>Sign In</StyledText>
    </UserTextContainer>

    <StyledButton>
      <ArrowRightIcon />
    </StyledButton>
  </StyledUser>
);
