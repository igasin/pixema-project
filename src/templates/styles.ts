import styled from 'styled-components';
import { Colors, Media } from 'ui';

export const StyledTemplate = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  padding: 40px 62px 64px;
  background-color: ${Colors.BLACK};
  color: ${Colors.WHITE};
  ${Media.XS} {
    flex-wrap: wrap;
    flex-direction: column;
  }

  ${Media.M} {
    grid-template-columns: 1fr;
  }
`;

export const StyledHeaderGroup = styled.div`
  position: fixed;
  width: 100%;
  place-items: center;
  ${Media.XS} {
    margin: 0 auto;
    margin-bottom: 100px;
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

export const StyledOutlet = styled.div``;
export const Box = styled.div`
  padding-top: 120px;
  display: flex;

  grid-gap: 170px;

  ${Media.XS} {
    padding-top: 200px;
  }
`;

export const ButtonTheme = styled.button``;
