import styled from 'styled-components';
import { Colors, Typography } from 'ui';

export const FormWrap = styled.div`
  width: 580px;
  padding: 40px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${Colors.DARK};
`;

export const StyledForm = styled.form`
  display: grid;
  grid-gap: 15px;
  width: 574px;
  width: 100%;
`;

export const TitleForm = styled.h3`
  ${Typography.H2}
  color:${Colors.WHITE}
`;

export const InputBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 7px;
`;

export const InputTitle = styled.p`
  ${Typography.S2}
  color:${Colors.WHITE}
`;

export const InputEmail = styled.input`
  width: 490px;
  padding: 16px 20px;
  border-radius: 10px;
  background-color: ${Colors.GRAPHITE};
  &-placholder {
    ${Typography.S2};
    color: ${Colors.SECONDARY};
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 30px;
`;
