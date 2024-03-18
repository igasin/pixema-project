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
    padding: 16px 12px 24px;
  }

  ${Media.M} {
    grid-template-columns: 1fr;
  }
`;

export const Wrap = styled.div`
  max-width: 1920px;
  padding: 40px 24px 48px;
  max-height: 100%;
  margin-top: 80px;
  display: flex;
  ${Media.M} {
    margin-top: 150px;
  }
  ${Media.Large} {
    display: block;
  }
`;

export const StyledNav = styled.div`
  width: 220px;
`;
