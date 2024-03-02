import React from 'react';
import { CloseIcon } from 'assets';
import { Portal, PortalTarget } from 'components/Portal/Portal';
import {
  StyledCloseButton, StyledForm, StyledTitle, Title,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => (
  <Portal target={PortalTarget.MODAL}>
    {isOpen && (
    <StyledForm>
      <StyledTitle>
        <Title>Filters!!!!!!!</Title>
        <StyledCloseButton>
          <CloseIcon
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </StyledCloseButton>
      </StyledTitle>
    </StyledForm>
    )}
  </Portal>
);
