import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledButton = styled.button`
  width: 100%;
  padding: 17px 0;
  border-radius: 10px;
  background-color: ${Colors.PRIMARY};
  ${Typography.S3}
  color:${Colors.WHITE};
  cursor: pointer;
`;
