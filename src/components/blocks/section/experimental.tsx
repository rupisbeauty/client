import {
  AspectRatio,
  Box,
  Card,
  chakra,
  Container as CUIContainer,
  SimpleGrid,
  Stack,
  VisuallyHidden,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import type { AppRouter } from '@/server/trpc/router/_app';
import type {
  BoxProps,
  ChakraProps,
  ContainerProps,
  StackProps,
} from '@chakra-ui/react';
import type { inferProcedureOutput } from '@trpc/server';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';

import { useComponents } from '../../../hooks/use-components';
import { BasicServiceCard } from '../services/service-card-basic';

import { isBrowser } from '@/utils';
import { trpc } from '@/utils/trpc';

const CUITinaMarkdown = chakra(TinaMarkdown);
/* -------------------------------------------------------------------------- */
/*                                Service Cover                               */
/* -------------------------------------------------------------------------- */

type ServiceCoverProps = {
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
  objectFit: 'contain',
  objectPosition: 'top center',
  transform: 'scale(1)',
};

export const SectionCover: React.FC<ServiceCoverProps> = ({ image }) => {
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

/* -------------------------------------------------------------------------- */
/*                                 ServiceMenu                                */
/* -------------------------------------------------------------------------- */
export type AllServicesFrontMatter = inferProcedureOutput<
  AppRouter['mdx']['parseFMList']
>;

// n9ZOvMI0UGU @TODO: type this
export const ServiceMenu = ({ options, relatedServices, ...props }: any) => {
  const filePaths = relatedServices.map(
    (service: { service: string }) => service.service
  );

  const { data: allServices } = trpc.mdx.parseFMList.useQuery(
    { filePaths },
    { enabled: !!relatedServices.length }
  );

  return (
    <SimpleGrid
      w={['full']}
      columns={[2]}
      gap={[12]}
      p={6}
      m={0}
      mx="auto"
      border="1px"
      alignContent="center"
      justifyContent="center"
    >
      {allServices &&
        Object.keys(allServices).map((serviceKey) => {
          const service = allServices[serviceKey];
          if (!service) return null;
          return <BasicServiceCard key={service.title} service={service} />;
        })}
    </SimpleGrid>
  );
};

/* -------------------------------------------------------------------------- */
/*                                    BOXES                                   */
/* -------------------------------------------------------------------------- */

type Spacing = Pick<ChakraProps, 'px' | 'py' | 'mx' | 'my'>;
type Decorative = Pick<
  ChakraProps,
  'border' | 'borderColor' | 'rounded' | 'shadow'
>;
type Typography = Pick<
  ChakraProps,
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'lineHeight'
  | 'letterSpacing'
  | 'textAlign'
  | 'textTransform'
  | 'textDecoration'
  | 'textOverflow'
>;
type DefaultSettings = Pick<
  ContainerProps,
  'centerContent' | 'width' | 'maxW' | 'backgroundColor' | 'color'
> & { contained: boolean; flex: Partial<StackProps> };

type TinaBox = Pick<
  BoxProps,
  | 'display'
  | 'position'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'overflow'
  | 'visibility'
  | 'opacity'
  | 'zIndex'
  | 'rounded'
  | 'shadow'
  | 'border'
>;

type TinaSettings = {
  spacing: Spacing;
  decorative: Decorative;
  typography: Typography;
  box: TinaBox;
} & DefaultSettings;

type TinaContainerProps = {
  body: TinaMarkdownContent | TinaMarkdownContent[];
  settings: TinaSettings;
};

/* -------------------------------------------------------------------------- */
/*                                     BOX                                    */
/* -------------------------------------------------------------------------- */
type SectionBoxProps = {
  poly: 'box' | 'stack' | 'card' | 'hidden';
  body: TinaContainerProps['body'];
  settings: TinaContainerProps['settings'] & {
    box: TinaBox;
  };
};

const polymorphicMap = {
  box: Box,
  stack: Stack,
  card: Card,
  hidden: VisuallyHidden,
};

export const SectionBox: React.FC<SectionBoxProps> = ({
  poly = 'box',
  body,
  settings,
  ...props // {title}
}) => {
  return (
    <Box
      as={polymorphicMap[poly]}
      {...settings?.box}
      {...settings?.spacing}
      {...settings?.decorative}
      {...settings?.typography}
    >
      <CUITinaMarkdown content={body} />
    </Box>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   Section                                  */
/* -------------------------------------------------------------------------- */

export const Section: React.FC<ContainerProps & TinaContainerProps> = ({
  body,
  settings: {
    flex,
    spacing,
    decorative,
    typography,
    centerContent,
    contained,
    ...settings
  },
}) => {
  //  n9ZOvMI0UGU @TODO: ADD zod validation
  const [mounted, setMounted] = useState(false);
  const components = useComponents('section');
  useEffect(() => {
    if (!isBrowser) return;
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, [setMounted]);

  if (mounted && contained) {
    return (
      <CUIContainer
        as={Stack}
        gap={0}
        centerContent={centerContent}
        layerStyle="container.default"
        {...spacing}
        {...decorative}
        {...typography}
        {...settings}
        {...flex}
      >
        <CUITinaMarkdown
          {...spacing}
          {...typography}
          content={body}
          components={components}
        />
      </CUIContainer>
    );
  }

  return mounted ? (
    <Stack
      gap={0}
      layerStyle="container.default"
      mx={centerContent ? 'auto' : 0}
      {...decorative}
      {...settings}
      {...flex}
    >
      <CUITinaMarkdown
        {...typography}
        {...spacing}
        content={body}
        components={components}
      />
    </Stack>
  ) : null;
};
