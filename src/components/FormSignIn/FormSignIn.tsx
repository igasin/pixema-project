import { Button, SmallSpinner } from 'components';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ROUTE } from 'router';
import { emailValidate, passwordValidate } from 'services';
import { getUserInfo } from 'store/selectors';
import { useAppDispatch, useAppSelector } from 'store';
import { useNavigate } from 'react-router-dom';
import { fetchSignInUser, setAuth } from 'store/features';
import {
  ButtonWrap,
  ErrorMessage,
  FormWrap,
  InputBox,
  InputEmail,
  InputPassword,
  InputTitle,
  SignUpLink,
  SignUpTitle,
  StyledError,
  StyledForm,
  StyledLink,
  TitleForm,
  TitleResetPassword,
} from './styles';

interface FormValues {
  email: string;
  password: string;
}

export const FormSignIn = () => {
  const { isLoading, errorMessage } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (user) => {
    dispatch(fetchSignInUser(user))
      .unwrap()
      .then((user) => {
        dispatch(setAuth(user));
        navigate(ROUTE.Home);
      });
  };

  return (
    <FormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>Sign In</TitleForm>

        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register('email', emailValidate())} />
          {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <InputTitle>Password</InputTitle>
          <InputPassword type="password" placeholder="Your password" {...register('password', passwordValidate())} />

          {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          <TitleResetPassword to={ROUTE.Reset_password}>Forgot password?</TitleResetPassword>
        </InputBox>
        <ButtonWrap>
          <Button type="submit">
            Sign in
            {isLoading && <SmallSpinner />}
          </Button>
        </ButtonWrap>
        {errorMessage && <StyledError>{errorMessage}</StyledError>}
        <SignUpLink>
          <SignUpTitle>Don’t have an account? </SignUpTitle>
          <StyledLink to={ROUTE.Sign_up}>Sign Up</StyledLink>
        </SignUpLink>
      </StyledForm>
    </FormWrap>
  );
};
