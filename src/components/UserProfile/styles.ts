import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledUser = styled.div`
  max-width: 260px;
  display: grid;
  grid-template-columns: 60px 1fr 40px;
  align-items: center;
  grid-gap: 30px;
`;

export const UserContainer = styled.div``;

export const StyledButton = styled.button`
  background-color: transparent;
`;

export const UserTextContainer = styled(Link)``;

export const StyledText = styled.p`
  ${Typography.H3}
  color: ${Colors.WHITE}
`;

export const StyledUserIcon = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: #7b61ff;
`;
