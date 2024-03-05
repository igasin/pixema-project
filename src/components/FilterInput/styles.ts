import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledFilterInput = styled.input`
  padding: 15px 20px;
  border-radius: 10px;
  width: 100%;
  background: ${Colors.GRAPHITE};
  color: ${Colors.WHITE};
  cursor: pointer;
  &:focus {
    outline: 2px ${Colors.PRIMARY};
    outline-style: solid;
  }
`;
