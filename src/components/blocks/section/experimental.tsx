import { AspectRatio, Box, Container as CUIContainer } from '@chakra-ui/react';
import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import type { ContainerProps } from '@chakra-ui/react';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';

import { SectionTitle } from '../section-title';

type ServiceCoverProps = {
  src: string;
  alt: string;
  attr?: string;
  size?: { width?: number; height?: number };
  /**
   * @SEE: '.tina/blocks/section-cover'
   * @TODO: Expose the following properties to the CMS
   */
  objectFit?: string;
  objectPosition?: string;
  my: number; // @NOTE: should be added to the CUIContainer below
};

export const SectionCover: React.FC<ServiceCoverProps> = (image) => {
  return image ? (
    <CUIContainer
      maxH="32vh"
      w="full"
      overflow="hidden"
      layerStyle="container.basic"
      rounded="xl"
      shadow="xl"
      p={0}
      // m={0}
      my={24}
    >
      <AspectRatio ratio={3 / 4}>
        <Image
          src={'/uploads/people/woman-smooth-skin-white-clothes.webp'}
          alt={image.alt + ' ' + String(image?.attr ? image.attr : '')}
          fill={true}
          width={image?.size?.width}
          height={image?.size?.height}
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
        />
      </AspectRatio>
    </CUIContainer>
  ) : null;
};

type TinaContainerProps = {
  contained: boolean;
  body: TinaMarkdownContent | TinaMarkdownContent[];
  settings: {
    [key: string]: any;
  };
};

const components = {
  sectionTitle: SectionTitle,
  sectionCover: SectionCover,
};

export const Section: React.FC<ContainerProps & TinaContainerProps> = ({
  contained,
  body,
  settings: { spacing, decorative, typography, ...settings },
}) => {
  // @TODO: ADD zod validation
  if (contained) {
    return (
      <CUIContainer
        layerStyles="container.default"
        {...settings}
        {...typography}
        {...spacing}
        {...decorative}
      >
        <TinaMarkdown content={body} components={components} />
      </CUIContainer>
    );
  }
  return (
    <Box
      layerStyles="container.default"
      mx={settings?.centerContent ? 'auto' : 0}
      {...settings}
      {...typography}
      {...spacing}
      {...decorative}
    >
      <TinaMarkdown content={body} components={components} />
    </Box>
  );
};
