import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import type { BoxProps, ModalProps } from '@chakra-ui/react';
import type { FC } from 'react';

type CustomModalProps = {
  title?: string;
  // children: React.ReactNode;
  footer?: React.ReactNode; // type props as: React.ComponentType<ComponentProps>
  // isOpen: boolean;
  // onOpen: () => void;
  // onClose: () => void;
  hasSubmit: boolean;
  allowClose: boolean;
  handler?: {
    label: string;
    action: (event: React.MouseEventHandler<HTMLButtonElement>) => void;
  };
  noOverlay?: boolean;
  bg?: string;
};

export const CHModal: FC<ModalProps & BoxProps & CustomModalProps> = ({
  title = '',
  children,
  footer,
  isOpen,
  // onOpen,
  onClose,
  // hasSubmit = false,
  allowClose = true,
  // handler,
  noOverlay = false,
  bg = 'white',
  ...rest
}) => {
  // const handleHandler = (event: React.MouseEventHandler<HTMLButtonElement>) => {
  //   handler.action(event);
  //   onClose();
  // };

  // const hasAction = handler.hasOwnProperty('action') ? true : false;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onEsc={onClose}
      border="2px solid blue"
      motionPreset="slideInBottom"
      blockScrollOnMount={false}
      size="2xl"
      isCentered={true}
      {...rest}
    >
      {!noOverlay && <ModalOverlay />}
      <ModalContent bg={bg}>
        <ModalHeader textTransform="capitalize">{title}</ModalHeader>
        {allowClose && <ModalCloseButton />}
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {footer}
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>

          {/* {allowClose && !hasSubmit ? (
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          ) : (
            hasAction && (
              <Button colorScheme="green" mr={3} onClick={handleHandler}>
                {handler.label}
              </Button>
            )
          )} */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
