import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledTrends = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 30px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  padding: 8px 24px;
  margin-top: 15px;
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
