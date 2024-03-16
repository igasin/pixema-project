import { Button, SmallSpinner } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchSignUpUser, setAuth } from 'store/features/UserSlice/UserSlice';
import { getUserInfo } from 'store/selectors';
import { emailValidate, nameValidate, passwordValidate } from 'services';
import { UserInfo } from './FormSignUp.interface';
import {
  ButtonWrap,
  ErrorMessage,
  ErrorReport,
  FormWrap,
  InputBox,
  InputConfirmPassword,
  InputEmail,
  InputName,
  InputPassword,
  InputTitle,
  SignUpLink,
  SignUpTitle,
  StyledError,
  StyledForm,
  StyledLink,
  TitleForm,
} from './styles';

export const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<UserInfo>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, errorMessage } = useAppSelector(getUserInfo);

  const onSubmit: SubmitHandler<UserInfo> = async (formData) => {
    await dispatch(fetchSignUpUser(formData))
      .unwrap()
      .then((user) => {
        dispatch(setAuth(user));
      });
    await navigate(ROUTE.Home);
    await reset();
  };

  return (
    <FormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>Sign Up</TitleForm>

        <InputBox>
          <InputTitle>Name</InputTitle>
          <InputName
            placeholder="Name"
            {...register('userName', nameValidate())}
          />
          {errors.userName?.message && (
            <ErrorMessage>{errors.userName.message}</ErrorMessage>
          )}
        </InputBox>

        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail
            placeholder="Your Email"
            {...register('email', emailValidate())}
          />
          {errors.email?.message && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </InputBox>

        <InputBox>
          <InputTitle>Password</InputTitle>
          <InputPassword
            type="password"
            placeholder="Your password"
            {...register('password', passwordValidate())}
          />
          {errors.password?.message && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputBox>

        <InputBox>
          <InputTitle>Confirm Password</InputTitle>
          <InputConfirmPassword
            type="password"
            placeholder="Confirm Password"
            {...register('confirmPassword', { required: true })}
          />
        </InputBox>
        {errorMessage && <StyledError>{errorMessage}</StyledError>}

        {getValues('password')
          && getValues('confirmPassword')
          && getValues('password') !== getValues('confirmPassword') && (
            <ErrorReport>Passwords do not match</ErrorReport>
        )}
        {errors.confirmPassword && (
          <ErrorMessage>Passwords do not match</ErrorMessage>
        )}
        <ButtonWrap>
          <Button type="submit">
            {' '}
            Sugn Up
            {isLoading && <SmallSpinner />}
          </Button>
        </ButtonWrap>

        <SignUpLink>
          <SignUpTitle>Already have an account?</SignUpTitle>
          <StyledLink to={ROUTE.Sign_in}>Sign In</StyledLink>
        </SignUpLink>
      </StyledForm>
    </FormWrap>
  );
};
