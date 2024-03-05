import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledTrends = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 30px;
`;

export const StyledButton = styled.button`
  justify-content: center;
  padding: 8px 24px;
  border-radius: 40px;
  margin: auto;
  background: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  ${Typography.S1}
  :hover {
    transform: scale(1.1);
  }
`;
