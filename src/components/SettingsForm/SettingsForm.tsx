import React, { useEffect } from 'react';
import { InputBox } from 'components/FormSignIn/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { emailValidate, nameValidate, passwordValidate } from 'services';
import { useAppDispatch, useAppSelector } from 'store';
import {
  fetchUpdateEmail, fetchUpdatePassword, toggleMode, updateUserName,
} from 'store/features';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'router';
import { useToggle } from 'hooks';
import { BasicSwitch, SettingFormModal } from 'components';
import { getTheme, getUserInfo } from 'store/selectors';
import {
  ButtonBox,
  ButtonCancel,
  ButtonSave,
  ColorBox,
  ColorMode,
  Container,
  Description,
  ErrorMessage,
  ErrorReport,
  InputTitle,
  PasswordBox,
  PasswordContainer,
  ProfileBox,
  ProfileContainer,
  StyledError,
  StyledForm,
  StyledInput,
  StyledText,
  TextWrap,
  Title,
  TitleColor,
  WrapInput,
} from './styles';

interface FormValues {
  userName: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const SettingsForm = () => {
  const { theme } = useAppSelector(getTheme);

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme);
  }, [theme]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { errorMessage, name, email } = useAppSelector(getUserInfo);
  const [isOpen, setToggle] = useToggle(false);

  const onSubmit: SubmitHandler<FormValues> = async (user) => {
    try {
      await dispatch(updateUserName(user.userName));
      await dispatch(fetchUpdateEmail(user)).unwrap();
      await dispatch(fetchUpdatePassword(user)).unwrap();

      setTimeout(() => {
        setToggle();
      }, 1000);
      setTimeout(() => {
        navigate(ROUTE.Home);
      }, 3500);
    } catch (error) {}
  };

  const handleCancel = () => {
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ProfileBox>
          <Title>Profile</Title>
          <ProfileContainer>
            <InputBox>
              <InputTitle>Name</InputTitle>
              <StyledInput
                type="text"
                defaultValue={name || 'User name'}
                placeholder="Your name"
                {...register('userName', nameValidate())}
              />
              {errors.userName?.message && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
            </InputBox>

            <InputBox>
              <InputTitle>Email</InputTitle>
              <StyledInput
                type="text"
                defaultValue={email || 'User email'}
                placeholder="Your email"
                {...register('email', emailValidate())}
              />
              {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </InputBox>
          </ProfileContainer>
        </ProfileBox>
        <PasswordBox>
          <Title>Password</Title>
          <PasswordContainer>
            <WrapInput>
              <InputBox>
                <InputTitle>Password</InputTitle>
                <StyledInput
                  type="password"
                  placeholder="Your password"
                  {...register('password', passwordValidate())}
                />
                {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
              </InputBox>
            </WrapInput>

            <WrapInput>
              <InputBox>
                <InputTitle>New Password</InputTitle>
                <StyledInput
                  type="password"
                  placeholder="New Password"
                  {...register('newPassword', passwordValidate())}
                />
                {errors.newPassword?.message && <ErrorMessage>{errors.newPassword.message}</ErrorMessage>}
              </InputBox>

              <InputBox>
                <InputTitle>Confirm Password</InputTitle>
                <StyledInput
                  type="password"
                  placeholder="Confirm password"
                  {...register('confirmPassword', passwordValidate())}
                />
                {errors.confirmPassword?.message && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

                {getValues('newPassword')
                  && getValues('confirmPassword')
                  && getValues('newPassword') !== getValues('confirmPassword') && (
                    <ErrorReport>Passwords do not match</ErrorReport>
                )}
              </InputBox>
              {errorMessage && <StyledError>{errorMessage}</StyledError>}
            </WrapInput>
          </PasswordContainer>
        </PasswordBox>

        <ColorMode>
          <StyledText> Color Mode</StyledText>
          <ColorBox>
            <TextWrap>
              <TitleColor>{theme === 'light' ? 'Light' : 'Dark'}</TitleColor>
              <Description>Use another thema</Description>
            </TextWrap>
            <BasicSwitch onClick={toggleTheme} />
          </ColorBox>
        </ColorMode>

        <ButtonBox>
          <ButtonCancel type="button" onClick={handleCancel}>
            Cancel
          </ButtonCancel>
          <ButtonSave type="submit">Save</ButtonSave>
        </ButtonBox>
      </StyledForm>
      <SettingFormModal toggleModal={setToggle} isOpen={isOpen} />
    </Container>
  );
};
