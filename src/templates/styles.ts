import styled from 'styled-components';
import { Media } from 'ui';

export const StyledTemplate = styled.div`
  padding: 32px 25px 30px;
  grid-gap: 50px;
  height: 100vh;
  max-width: 1920px;

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

export const StyledHeaderGroup = styled.div`
  position: fixed;
  width: 100%;
  place-items: center;
  ${Media.XS} {
    margin: 0 auto;
  }
`;

export const StyledLogo = styled.div`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;

export const StyledNav = styled.div`
  padding-left: 10px;
`;

export const StyledOutlet = styled.div`
  padding-top: 150px;
`;
export const Box = styled.div`
  padding-top: 150px;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 30px;
`;
