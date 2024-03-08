import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledBox = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 30px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  padding: 8px 24px;
  border-radius: 40px;
  margin-top: 50px;
  background: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  cursor: pointer;
  transition: 0.3s;
  ${Typography.S1}
  :hover {
    transform: scale(1.1);
    background-color: ${Colors.PRIMARY};
  }
`;
