import type { PagesBlocksSectionCover } from '.tina';
import {
  AspectRatio,
  Box,
  Container as CUIContainer,
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
      // n9ZOvMI0UGU @TODO: FIXME: type issue expect type to be of ObjectFit but does not accept string
      objectFit?: any;
      objectPosition?: any;
      transform?: any;
    };
    my: number; // @NOTE: should be added to the CUIContainer below
  };
};

const defaultPos = {
  objectFit: ['cover'],
  objectPosition: 'top center',
  transform: 'scale(1)',
};

// 00icQ @WIP : block migration : @FIXME: Remove after migration
export const SectionCover: React.FC<SectionCoverProps> = ({ image }) => {
  return image ? (
    <CUIContainer
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
      <AspectRatio ratio={3 / 4}>
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
    </CUIContainer>
  ) : null;
};


// @WIP:
export const SectionCoverBlock: React.FC<PagesBlocksSectionCover> = (props) => {
  const objectFit = props?.image?.pos?.objectFit;
  const imagePosStyle = Object.assign(defaultPos, {
    ...props?.image?.pos,
    objectFit: objectFit || defaultPos.objectFit,
  });
  return props?.image ? (
    <CUIContainer
      w="full"
      maxW={['container.sm', 'container.md', 'container.lg', 'container.xl']}
      maxH="72"
      h="100%"
      overflow="hidden"
      rounded="xl"
      shadow="xl"
      p={0}
      my={24}
      // border="1px solid red"
    >
      <AspectRatio ratio={1 / 4}>
        {/* <Image
          src={String(props?.image?.src)}
          alt={
            props?.image.alt?.trim() +
            ' ' +
            String(props?.image?.attr ? props?.image.attr?.trim() : '')
          }
          fill={true}
          priority
          style={imagePosStyle} // @TODO: FIXME: styles type issues
        /> */}
        <ChImage
          src={String(props?.image?.src)}
          alt={
            props?.image.alt?.trim() +
            ' ' +
            String(props?.image?.attr ? props?.image.attr?.trim() : '')
          }
          width={Number(props?.image?.size?.width) || 1920}
          height={Number(props?.image?.size?.height) || 1440}
          // fill={true}
          priority
          // style={} // @TODO: FIXME: styles type issues
          // style={{
          //   objectFit: 'cover',
          //   objectPosition: imagePosStyle.objectPosition,
          //   transform: imagePosStyle.transform,
          // }}
          {...props?.image?.pos}
        />
      </AspectRatio>
    </CUIContainer>
  ) : null;
};
