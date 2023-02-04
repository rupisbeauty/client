import type { PagesBlocksSectionCover } from '.tina';
import {
  AspectRatio,
  Box,
  Container,
  type ResponsiveValue,
} from '@chakra-ui/react';
import { ChakraNextImage, ChImage } from 'chakra.ui';
import Image from 'next/image';

export type SectionCoverProps = {
  image: {
    src: string;
    alt: string;
    attr?: string;
    size?: { width?: number; height?: number };
    pos?: {
      objectFit?: any;
      objectPosition?: any;
      transform?: any;
    };
    my: number; // @NOTE: should be added to the CUIContainer below
  };
};

const defaultPos = {
  objectFit: 'cover',
  objectPosition: 'top center',
  transform: 'scale(1)',
};

// 00icQ @WIP : block migration : @FIXME: Remove after migration
export const SectionCover: React.FC<SectionCoverProps> = ({ image }) => {
  return image ? (
    <Container
      h="100%"
      maxH="32vh"
      w="full"
      overflow="hidden"
      layerStyle="container.basic"
      rounded="xl"
      shadow="xl"
      p={0}
      my={24}
    >
      <AspectRatio ratio={2 / 3}>
        <Image
          src={image.src}
          alt={
            image.alt?.trim() +
            ' ' +
            String(image?.attr ? image.attr?.trim() : '')
          }
          fill={true}
          style={Object.assign(defaultPos, image?.pos)}
        />
      </AspectRatio>
    </Container>
  ) : null;
};

export const SectionCoverBlock: React.FC<PagesBlocksSectionCover> = (props) => {
  const objectFit = props?.image?.pos?.objectFit;
  const imagePosStyle = Object.assign(defaultPos, {
    ...props?.image?.pos,
    objectFit: objectFit || defaultPos.objectFit,
  });
  return props?.image ? (
    <Container
      position="relative"
      w="full"
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      maxH="32vh"
      overflow="hidden"
      rounded="xl"
      shadow="xl"
      p={0}
      my={24}
    >
      <AspectRatio ratio={3 / 1}>
        <Image
          src={String(props?.image?.src)}
          alt={
            props?.image.alt?.trim() +
            ' ' +
            String(props?.image?.attr ? props?.image.attr?.trim() : '')
          }
          fill={true}
          priority
          style={{
            objectFit: 'cover',
            objectPosition: imagePosStyle.objectPosition,
            transform: imagePosStyle.transform,
          }}
        />
      </AspectRatio>
    </Container>
  ) : null;
};
