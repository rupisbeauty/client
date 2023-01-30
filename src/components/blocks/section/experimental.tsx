import { Box, Container as CUIContainer } from '@chakra-ui/react';
import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import type { ContainerProps } from '@chakra-ui/react';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { SectionTitle } from '../section-title';

type ServiceCoverProps = {
  objectFit?: string;
  objectPosition?: string;
};

export const SectionCover: React.FC<{
  src: string;
  alt: string;
  size?: { width?: number; height?: number };
}> = (image) => {
  return image?.src ? (
    <CUIContainer
      w="full"
      layerStyle="container.basic"
      rounded="lg"
      display="block"
      maxH="42vh"
      overflow="hidden"
      borderRadius="md"
      border="1px"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill={true}
        width={image?.size?.width}
        height={image?.size?.height}
        style={{
          objectFit: 'cover',
          objectPosition: 'top center',
        }}
      />
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
  serviceCover: SectionCover,
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
