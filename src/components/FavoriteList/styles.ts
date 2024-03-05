import styled from 'styled-components';
import { Media } from 'ui';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 30px;
  ul li {
    text-decoration: none;
  }

  ${Media.L} {
    grid-template-columns: repeat(3, minmax(200px, 300px));
    grid-gap: 10px;
    justify-self: start;
  }

  ${Media.Medium} {
    grid-template-columns: repeat(2, minmax(200px, 300px));
    grid-gap: 10px;
    justify-self: start;
  }

  ${Media.XS} {
    grid-template-columns: 1fr;
    justify-self: start;
    padding-left: 20px;
  }
`;
