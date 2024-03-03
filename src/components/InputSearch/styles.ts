import styled from 'styled-components';
import { Media } from 'ui';

export const StyledInputForm = styled.form`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  width: 900px;
  padding: 20px 15px;
  border-radius: 10px;
  ${Media.M} {
    width: 360px;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: transparent;
  cursor: pointer;
`;
