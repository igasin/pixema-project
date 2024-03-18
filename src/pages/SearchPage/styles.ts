import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledBoxSearch = styled.div``;

export const StyledText = styled.p`
  ${Typography.S1};
  color: ${Colors.WHITE};
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  padding: 8px 24px;
  border-radius: 40px;
  margin: 50px auto;
  background: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  cursor: pointer;
  transition: 0.3s;
  ${Typography.S1}
  
  &:hover {
    transform: scale(1.1);
    background-color: ${Colors.PRIMARY};
  }
`;
