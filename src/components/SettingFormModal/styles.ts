import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const SettingMessage = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 30%;
  left: 40%;
  max-width: 300px;
  padding: 45px 40px;
  background-color: ${Colors.PRIMARY};
  border-radius: 10px;
  z-index: 11;
`;

export const Message = styled.p`
  text-align: center;
  ${Typography.H2}
`;
