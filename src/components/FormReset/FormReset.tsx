import React from 'react';
import { Button } from 'components';
import { useForm } from 'react-hook-form';
import {
  ButtonWrap,
  FormWrap,
  InputBox,
  InputEmail,
  InputTitle,
  StyledForm,
  TitleForm,
} from './styles';

export const FormReset = () => {
  const { register } = useForm();
  return (
    <FormWrap>
      <StyledForm>
        <TitleForm>Reset password</TitleForm>

        <InputBox>
          <InputTitle>Email</InputTitle>
          <InputEmail placeholder="Your Email" {...register('email')} />
        </InputBox>

        <ButtonWrap>
          <Button type="submit">Reset Password</Button>
        </ButtonWrap>
      </StyledForm>
    </FormWrap>
  );
};
