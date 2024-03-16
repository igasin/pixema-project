import { Button } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'store';
import { emailValidate } from 'services';
import { fetchResetPassword } from 'store/features';
import { useToggle } from 'hooks';
import { ROUTE } from 'router';
import { getUserInfo } from 'store/selectors';
import { FormValues } from './FormReset.interface';
import {
  ButtonWrap,
  ErrorMessage,
  FormWrap,
  InputBox,
  InputEmail,
  InputTitle,
  Message,
  StyledError,
  StyledForm,
  StyledLink,
  StyledMessage,
  Title,
  TitleForm,
} from './styles';

export const FormReset = () => {
  const [isToggle, setToggle] = useToggle();
  const { errorMessage } = useAppSelector(getUserInfo);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (user) => {
    await dispatch(fetchResetPassword(user)).unwrap();
    await setToggle();
    await reset();
  };

  return (
    <FormWrap>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>Reset password</TitleForm>
        {isToggle && <Message>You will receive an email a link to reset your password!</Message>}
        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register('email', emailValidate())} />
          {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputBox>
        {errorMessage && <StyledError>{errorMessage}</StyledError>}
        <ButtonWrap>
          <Button type="submit">Reset Password</Button>
        </ButtonWrap>
        <StyledMessage>
          <Title>After updating your password go to</Title>
          <StyledLink to={ROUTE.Sign_in}>Sign in</StyledLink>
        </StyledMessage>
      </StyledForm>
    </FormWrap>
  );
};
