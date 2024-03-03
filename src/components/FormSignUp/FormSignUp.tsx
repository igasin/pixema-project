import React from 'react';
import { Button } from 'components';
import { useForm } from 'react-hook-form';
import { ROUTE } from 'router';
import {
  ButtonWrap,
  FormWrap,
  InputBox,
  InputConfirmPassword,
  InputEmail,
  InputName,
  InputPassword,
  InputTitle,
  SignUpLink,
  SignUpTitle,
  StyledForm,
  StyledLink,
  TitleForm,
} from './styles';

export const FormSignUp = () => {
  const { register } = useForm();
  return (
    <FormWrap>
      <StyledForm>
        <TitleForm>Sign Up</TitleForm>

        <InputBox>
          <InputTitle>Name</InputTitle>
          <InputName placeholder="Name" {...register('name')} />
        </InputBox>

        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register('email')} />
        </InputBox>

        <InputBox>
          <InputTitle>Password</InputTitle>
          <InputPassword
            placeholder="Your password"
            {...register('password')}
          />
        </InputBox>

        <InputBox>
          <InputTitle>Confirm Password</InputTitle>
          <InputConfirmPassword
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
        </InputBox>

        <ButtonWrap>
          <Button type="submit">Sign up</Button>
        </ButtonWrap>
        <SignUpLink>
          <SignUpTitle>Already have an account?</SignUpTitle>
          <StyledLink to={ROUTE.SIGN_IN}>Sign In</StyledLink>
        </SignUpLink>
      </StyledForm>
    </FormWrap>
  );
};
