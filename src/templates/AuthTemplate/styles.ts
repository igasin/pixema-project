import styled from 'styled-components';
import { BackgroundMovies } from 'assets';
import { Link } from 'react-router-dom';
import { Colors, Typography } from 'ui';

export const StyledAuth = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  min-height: 100vh;
  padding: 35px 50px;
  background: url(${BackgroundMovies});
  background-color: ${Colors.BLACK};
  color: ${Colors.WHITE};

  background-size: cover;
  background-repeat: no-repeat;
`;

export const LogoWrap = styled(Link)``;

export const StyledCopyright = styled.p`
  justify-self: center;
  ${Typography.S3}
  color:${Colors.WHITE}
`;

export const StyledOutlet = styled.div`
  display: grid;
  place-items: center;
`;
