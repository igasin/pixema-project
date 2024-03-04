import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledUser = styled.div`
  max-width: 250px;
  display: flex;
  grid-gap: 10px;
`;

export const UserContainer = styled.div``;

export const StyledButton = styled.button`
  background-color: transparent;
`;

export const UserTextContainer = styled(Link)`
  padding: 15px 0;
  width: 100px;
  margin-left: 10px;
`;

export const StyledUserIcon = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: #7b61ff;
`;

export const UserNav = styled.div`
  padding: 15px 0;
  width: 100px;
  margin-left: 10px;
`;

export const StyledText = styled.p`
  ${Typography.H2}
  color:${Colors.PRIMARY}
`;
