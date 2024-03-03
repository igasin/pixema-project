import styled from 'styled-components';
import { Media } from 'ui';

export const StyledInputForm = styled.form`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  width: 1100px;

  padding: 20px 15px;
  border-radius: 10px;
  ${Media.M} {
    width: 360px;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

export const StyledLogo = styled.div``;
