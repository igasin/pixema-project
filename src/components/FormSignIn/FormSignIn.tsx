import { Button } from 'components';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ROUTE } from 'router';
import {
  ButtonWrap,
  FormWrap,
  InputBox,
  InputEmail,
  InputPassword,
  InputTitle,
  SignUpLink,
  SignUpTitle,
  StyledForm,
  StyledLink,
  TitleForm,
  TitleResetPassword,
} from './styles';

export const FormSignIn = () => {
  const { register } = useForm();
  return (
    <FormWrap>
      <StyledForm>
        <TitleForm>Sign In</TitleForm>

        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register('email')} />
        </InputBox>

        <InputBox>
          <InputTitle>Password</InputTitle>
          <InputPassword placeholder="Your password" {...register('password')} />
          <TitleResetPassword to={ROUTE.Reset_password}>Forgot password?</TitleResetPassword>
        </InputBox>
        <ButtonWrap>
          <Button type="submit">Sign in</Button>
        </ButtonWrap>
        <SignUpLink>
          <SignUpTitle>Don’t have an account? </SignUpTitle>
          <StyledLink to={ROUTE.Sign_up}>Sign Up</StyledLink>
        </SignUpLink>
      </StyledForm>
    </FormWrap>
  );
};
