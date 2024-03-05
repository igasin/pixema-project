import { Button } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchSignUpUser } from 'store/features/UserSlice/UserSlice';
import { getUserInfo } from 'store/selectors';
import { emailValidate, nameValidate, passwordValidate } from 'services';
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

interface UserInfo {
  email: string;
  password: string;
  userName: string;
  confirmPassword: string;
  isAuth: boolean;
}

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
          <InputName placeholder="Name" {...register('userName', nameValidate())} />
          {errors.userName?.message && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register('email', emailValidate())} />
          {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputBox>

        <InputBox>
          <InputTitle>Password</InputTitle>
          <InputPassword type="password" placeholder="Your password" {...register('password', passwordValidate())} />
          {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
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
          && getValues('password') !== getValues('confirmPassword') && <ErrorReport>Passwords do not match</ErrorReport>}
        <ButtonWrap>
          <Button type="submit">Sign up</Button>
        </ButtonWrap>

        {errors.confirmPassword && <p>Passwords do not match</p>}
        <SignUpLink>
          <SignUpTitle>Already have an account?</SignUpTitle>
          <StyledLink to={ROUTE.Sign_in}>Sign In</StyledLink>
        </SignUpLink>
      </StyledForm>
    </FormWrap>
  );
};
