import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const StyledButton = styled.button`
  width: 490px;
  padding: 15px 7px;
  border-radius: 10px;
  background-color: ${Colors.PRIMARY};
  ${Typography.S3}
  color:${Colors.WHITE};
  cursor: pointer;
`;
