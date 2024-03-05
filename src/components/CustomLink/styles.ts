import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledCustomLink = styled(NavLink)<{ $isActive: boolean }>`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? '#80858B' : '#7B61FF')};
  display: flex;
  grid-gap: 20px;

  &:hover {
    color: ${Colors.PRIMARY};
  }

  svg {
    fill: ${({ $isActive }) => ($isActive ? '#80858B' : '#7B61FF')};
    width: 24px;
  }
`;
