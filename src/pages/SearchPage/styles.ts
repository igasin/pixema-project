import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledBoxSearch = styled.div``;

export const StyledText = styled.p`
  ${Typography.S1};
  color: ${Colors.WHITE};
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  padding: 8px 24px;
  margin-top: 20 px;
  border-radius: 40px;
  margin: auto;
  background: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  ${Typography.S1}
  :hover {
    transform: scale(1.1);
    background-color: ${Colors.PRIMARY};
  }
`;
