import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledNavBox = styled.div`
  display: grid;
  grid-gap: 40px;
`;

export const StyledLink = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
  grid-gap: 25px;
`;

export const StyledTitle = styled.h5`
  ${Typography.S1};
`;

export const StyledMenu = styled.div`
  position: fixed;
  z-index: 5;
  display: grid;
  height: 100vh;
  justify-content: center;
  align-content: start;
`;

export const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(1, 1fr);
`;

export const StyledSwitch = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 80px);
  align-items: center;
  justify-content: center;
  justify-self: start;
  ${Typography.S1};
  color: ${Colors.WHITE};
`;
