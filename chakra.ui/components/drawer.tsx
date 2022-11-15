import {
  Drawer as ChDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  type DrawerProps,
} from '@chakra-ui/react';
import { useRef } from 'react';

type CustomDrawerProps = {
  Header?: React.ElementType; // throws an error with ReactNode
  Footer?: React.ElementType; // throws an error with ReactNode
  type?: 'default' | 'consent';
} & DrawerProps;

export const Drawer = ({
  isOpen,
  onClose,
  Header,
  Footer,
  children,
  size = 'lg',
  placement = 'left',
  type = 'default',
  ...props
}: CustomDrawerProps) => {
  const btnRef = useRef<HTMLInputElement>(null);
  return (
    <ChDrawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={btnRef}
      size={size}
      preserveScrollBarGap
      {...props}
    >
      <DrawerOverlay>
        <DrawerContent>
          {type !== 'consent' && <DrawerCloseButton size="sm" />}
          {Header && (
            <DrawerHeader>
              <Header />
            </DrawerHeader>
          )}

          <DrawerBody>{children}</DrawerBody>
          {Footer && (
            <DrawerFooter>
              <Footer />
            </DrawerFooter>
          )}
        </DrawerContent>
      </DrawerOverlay>
    </ChDrawer>
  );
};
