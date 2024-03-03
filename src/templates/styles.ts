import styled from 'styled-components';
import { Media } from 'ui';

export const StyledTemplate = styled.div`
  padding: 32px 24px 50px;
  display: grid;

  grid-gap: 50px;
  height: 100vh;

  ${Media.XS} {
    flex-wrap: wrap;
    flex-direction: column;
  }

  ${Media.M} {
    grid-template-columns: 1fr;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 50px;
`;

export const StyledNavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 100vh;
  width: 270px;
`;

export const StyledHeaderGroup = styled.div``;

export const OutletBox = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 40px;
`;

export const StyledLogo = styled.div`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;

export const StyledNav = styled.div``;
