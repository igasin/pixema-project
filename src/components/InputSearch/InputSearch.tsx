import { ButtonInput } from 'assets';
import { Modal } from 'components';
import { UserProfile } from 'components/UserProfile/UserProfile';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledButton, StyledInput, StyledInputForm } from './styles';

interface InputProps {
  toggleModal: (value: boolean) => void;
}

export const InputSearch = ({ toggleModal }: InputProps) => {
  const { register, handleSubmit, reset } = useForm();

  const openModal = () => {
    toggleModal(true);
  };

  return (
    <StyledInputForm>
      <StyledInput
        placeholder="Search..."
        type="text"
        {...register('search')}
      />

      <StyledButton onClick={openModal} type="button">
        <ButtonInput />
      </StyledButton>
    </StyledInputForm>
  );
};
