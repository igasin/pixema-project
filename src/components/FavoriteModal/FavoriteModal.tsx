import { useEffect } from 'react';
import { Portal, PortalTarget } from 'components/Portal/Portal';
import { AnimatePresence } from 'framer-motion';
import { CloseIcon } from 'assets';
import { Colors } from 'ui';
import { messageFavoriteModal } from 'constants/constants';
import { Close, Message, Title } from './styles';
import { FavoriteProps } from './FavoriteModal.interface';

export const FavoriteModal = ({ isOpen, toggleModal }: FavoriteProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        toggleModal({} as React.MouseEvent<HTMLButtonElement>);
      }, 1000);

      return () => clearTimeout(timer);
    }
    return () => {};
  }, [isOpen, toggleModal]);

  return (
    <Portal target={PortalTarget.MODAL}>
      <AnimatePresence>
        {isOpen && (
        <Message
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Close onClick={toggleModal}>
            <CloseIcon stroke={Colors.DARK} />
          </Close>
          <Title>{messageFavoriteModal}</Title>
        </Message>
        )}
      </AnimatePresence>
    </Portal>
  );
};
