import { InputIcon, MainLogo } from 'assets';
import { UserProfile } from 'components';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  StyledButton, StyledInput, StyledInputForm, StyledLogo, Wrapper,
} from './styles';

interface InputProps {
  toggleModal: (value: boolean) => void;
}

export const InputSearch = ({ toggleModal }: InputProps) => {
  const { register } = useForm();

  const openModal = () => {
    toggleModal(true);
  };

  return (
    <Wrapper>
      <StyledLogo>
        <MainLogo width={160} />
      </StyledLogo>

      <StyledInputForm>
        <StyledInput placeholder="Search..." type="text" {...register('search')} />
        <StyledButton onClick={openModal} type="button">
          <InputIcon />
        </StyledButton>
      </StyledInputForm>

      <UserProfile />
    </Wrapper>
  );
};
