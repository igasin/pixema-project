import React from 'react';
import { ArrowRightIcon, UserIcon } from '../../assets';
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

    <UserTextContainer>
      <StyledText>Sign In</StyledText>
    </UserTextContainer>

    <StyledButton>
      <ArrowRightIcon />
    </StyledButton>
  </StyledUser>
);
