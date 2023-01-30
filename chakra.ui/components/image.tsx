import { chakra } from '@chakra-ui/react';
import Image from 'next/image';

import type { ChakraProps } from '@chakra-ui/react';
import type { ImageProps } from 'next/image';
import type { FC } from 'react';

export const ChakraNextImage = chakra(Image, {
  shouldForwardProp: (prop) => {
    return ['width', 'height', 'src', 'alt', 'fill'].includes(prop);
  },
});

type ChNextImageProps = Omit<ImageProps, 'fill'> & ChakraProps;

export const ChImage: FC<ChNextImageProps> = (props: ChNextImageProps) => {
  return <ChakraNextImage {...props} />;
};
