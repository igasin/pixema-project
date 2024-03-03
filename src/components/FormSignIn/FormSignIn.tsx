import React from 'react';
import { Button } from 'components';
import { ROUTE } from 'router';
import {
  ButtonWrap,
  FormWrap,
  InputBox,
  InputEmail,
  InputPassword,
  InputTitle,
  StyledForm,
  TitleForm,
  TitleResetPassword,
} from './styles';

export const FormSignIn = () => (
  <FormWrap>
    <StyledForm>
      <TitleForm>Sign In</TitleForm>

      <InputBox>
        <InputTitle>Email</InputTitle>
        <InputEmail />
      </InputBox>

      <InputBox>
        <InputTitle>Password</InputTitle>
        <InputPassword />
        <TitleResetPassword to={ROUTE.RESET_PASSWORD}>
          Forgot password?
        </TitleResetPassword>
      </InputBox>
      <ButtonWrap>
        <Button type="submit">Sign in</Button>
      </ButtonWrap>
    </StyledForm>
  </FormWrap>
);
