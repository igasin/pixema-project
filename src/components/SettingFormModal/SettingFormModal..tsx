import { Portal, PortalTarget } from 'components/Portal/Portal';
import React from 'react';
import { Message, SettingMessage } from './styles';

interface SettingProps {
  toggleModal: (value: boolean) => void;
  isOpen: boolean;
}

export const SettingFormModal = ({ isOpen }: SettingProps) => (
  <Portal target={PortalTarget.MODAL}>
    {isOpen && (
    <SettingMessage>
      <Message>Your information successfully updated!</Message>
    </SettingMessage>
    )}
  </Portal>
);
