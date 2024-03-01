import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonInput } from '../../assets';
import { Modal } from '../Modal/Modal';
import { StyledButton, StyledInput, StyledInputForm } from './styles';

export const InputSearch = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledInputForm>
      <StyledInput
        placeholder="Search..."
        type="text"
        {...register('search')}
      />

      <StyledButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <ButtonInput />
      </StyledButton>
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </StyledInputForm>
  );
};
