import { Button } from 'components';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchSignUpUser } from 'store/features/UserSlice/UserSlice';
import { getUserInfo } from 'store/selectors';
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

interface UserInfo {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export const FormSignUp = () => {
  const { register, handleSubmit, reset } = useForm<UserInfo>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { errorMessage } = useAppSelector(getUserInfo);
  const onSubmit: SubmitHandler<UserInfo> = async (user) => {
    await dispatch(fetchSignUpUser(user)).unwrap();
    await navigate(ROUTE.Home);
    await reset();
  };

  return (
    <FormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
          <InputPassword placeholder="Your password" {...register('password')} />
        </InputBox>

        <InputBox>
          <InputTitle>Confirm Password</InputTitle>
          <InputConfirmPassword placeholder="Confirm Password" {...register('confirmPassword')} />
        </InputBox>
        {errorMessage && <span>{errorMessage}</span>}
        <ButtonWrap>
          <Button type="submit">Sign up</Button>
        </ButtonWrap>
        <SignUpLink>
          <SignUpTitle>Already have an account?</SignUpTitle>

          <StyledLink to={ROUTE.Sign_in}>Sign In</StyledLink>
        </SignUpLink>
      </StyledForm>
    </FormWrap>
  );
};
