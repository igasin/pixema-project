import styled from 'styled-components';
import { Media } from 'ui';

export const StyledTrends = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 30px;
  ul li {
    text-decoration: none;
  }

  ${Media.XL} {
    grid-template-columns: repeat(3, minmax(200px, 300px));
    grid-gap: 30px;
    justify-self: center;
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
