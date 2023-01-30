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

export const ServiceCover: React.FC<{
  src: string;
  alt: string;
  size?: { width?: number; height?: number };
}> = (image) => {
  return (
    <CUIContainer
      layerStyle="container"
      rounded="lg"
      display="block"
      maxH="42vh"
      overflow="hidden"
      borderRadius="md"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill={true}
        // width={image?.size?.width}
        // height={image?.size?.height}
        style={{
          objectFit: 'cover',
          objectPosition: 'top center',
        }}
      />
    </CUIContainer>
  );
};

type TinaContainerProps = {
  contained: boolean;
  body: TinaMarkdownContent | TinaMarkdownContent[];
  settings: {
    [key: string]: any;
  };
};

export const SECTION_DEFAULT_STYLES = {
  width: 'full',
  py: 12,
  px: [4, 4, 6],
  my: 0,
  mx: 0,
  color: 'text',
  bg: 'bg',
  border: '1px solid',
  borderColor: 'transparent',
  contentContent: true,
  rounded: 0,
  shadow: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  fontWeight: 'normal',
  lineHeight: 'base',
  letterSpacing: 'normal',
  textAlign: 'left',
  textDecoration: 'none',
  textOverflow: 'none',
  textTransform: 'none',
};

const components = {
  sectionTitle: SectionTitle,
  serviceCover: ServiceCover,
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
        {...SECTION_DEFAULT_STYLES}
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
      {...SECTION_DEFAULT_STYLES}
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
