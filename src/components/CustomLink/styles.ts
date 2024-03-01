import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCustomLink = styled(NavLink)<{ $isActive: boolean }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? '#80858B' : '#7B61FF')};
  display: grid;
  grid-template-columns: repeat(2, 50px);
  grid-gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
  svg {
    fill: ${({ $isActive }) => ($isActive ? '#80858B' : '#7B61FF')};
    width: 24px;
  }
`;
