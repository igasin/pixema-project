import styled from 'styled-components';
import { Media } from 'ui';

export const StyledTemplate = styled.div`
  padding: 32px 25px 30px;
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
  margin: auto;
`;

export const StyledNavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 100vh;
  max-width: 270px;
`;

export const StyledHeaderGroup = styled.div`
  position: fixed;
  ${Media.XS} {
    place-items: center;
  }
`;

export const OutletBox = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;

  grid-gap: 40px;
  padding-top: 150px;
  ${Media.XS} {
    margin-top: 60px;
  }
  ${Media.L} {
    grid-template-columns: 1fr;
  }
  ${Media.M} {
    padding-right: 20px;
  }
`;

export const StyledLogo = styled.div`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;

export const StyledNav = styled.div``;

export const StyledOutlet = styled.div``;
