import styled from 'styled-components';
import { Colors, Media } from 'ui';

export const StyledTemplate = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding: 32px 24px 48px;
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

export const Wrap = styled.div`
  max-width: 1920px;
  padding: 40px 24px 48px;
  max-height: 100%;
  margin-top: 100px;
  display: flex;
  ${Media.M} {
    margin-top: 150px;
  }
  ${Media.XL} {
    display: block;
  }
`;

export const StyledNav = styled.div`
  width: 250px;
`;
