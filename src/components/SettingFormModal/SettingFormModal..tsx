import { Portal, PortalTarget } from 'components/Portal/Portal';
import { Message, SettingMessage } from './styles';
import { SettingProps } from './SettingFormModal.interface';

export const SettingFormModal = ({ isOpen }: SettingProps) => (
  <Portal target={PortalTarget.MODAL}>
    {isOpen && (
    <SettingMessage>
      <Message>Your information successfully updated! Please, log in again.</Message>
    </SettingMessage>
    )}
  </Portal>
);
