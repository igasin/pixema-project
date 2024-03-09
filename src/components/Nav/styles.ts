import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledNavBox = styled.div`
  display: grid;
  grid-gap: 40px;
`;

export const StyledLink = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
  grid-gap: 40px;
`;

export const StyledTitle = styled.h5`
  ${Typography.S1};
`;

export const StyledMenu = styled.div`
  position: fixed;
  z-index: 5;
  display: grid;
  grid-gap: 10px;
  justify-content: start;
`;

export const StyledSwitch = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 80px);
  align-items: center;
  justify-content: center;
  justify-self: start;
  ${Typography.S1};
  color: ${Colors.WHITE};
  padding-top: 380px;
`;
