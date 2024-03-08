import styled from 'styled-components';
import { Media } from 'ui';

export const StyledMovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  place-items: center;
  ul li {
    text-decoration: none;
  }

  ${Media.XL} {
    grid-template-columns: repeat(3, minmax(200px, 300px));
    grid-gap: 30px;
  }

  ${Media.L} {
    grid-template-columns: repeat(2, minmax(200px, 300px));
    grid-gap: 30px;
  }

  ${Media.S} {
    grid-template-columns: 1fr;
    justify-self: center;
  }
`;
