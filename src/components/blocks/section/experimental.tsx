import {
  AspectRatio,
  Box,
  Container as CUIContainer,
  Stack,
  TabPanels,
  Tabs,
  type ChakraProps,
} from '@chakra-ui/react';

import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import type { AppRouter } from '@/server/trpc/router/_app';
import type { ContainerProps } from '@chakra-ui/react';
import type { inferProcedureOutput } from '@trpc/server';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';

import { trpc } from '@/utils/trpc';
import { TabPanelContent } from '../services/tab-content';
import { SectionTitle } from './section-title';

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
export type ServiceCategoryFrontMatter = inferProcedureOutput<
  AppRouter['mdx']['parseFMList']
>;

// n9ZOvMI0UGU @TODO: type this
export const ServiceMenu = ({ options, relatedServices, ...props }: any) => {
  const { data: allServices } = trpc.mdx.parseFMList.useQuery(
    {
      // n9ZOvMI0UGU @TODO: type this
      filePaths: relatedServices.map((service: any) => service.service),
    },
    { enabled: !!relatedServices.length }
  );

  return (
    <Stack w="full" direction="row" gap={6} my={12} mx="auto">
      <Tabs bg="white" w="full" p={2} borderRadius="15px" py={12}>
        <TabPanels>
          {allServices &&
            Object.keys(allServices).map((serviceKey) => {
              const service = allServices[serviceKey];
              if (!service) return null;
              return (
                <TabPanelContent
                  services={Object.keys(allServices).map(
                    (key) => allServices[key]
                  )}
                  serviceKey={serviceKey}
                  key={serviceKey}
                />
              );
            })}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   Section                                  */
/* -------------------------------------------------------------------------- */
type TinaContainerProps = {
  // contained: boolean;
  body: TinaMarkdownContent | TinaMarkdownContent[];
  settings: {
    spacing: Pick<ChakraProps, 'px' | 'py' | 'mx' | 'my'>;
    decorative: Pick<
      ChakraProps,
      'border' | 'borderColor' | 'rounded' | 'shadow'
    >;
    typography: Pick<
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
  } & Pick<
    ContainerProps,
    'centerContent' | 'width' | 'maxW' | 'backgroundColor' | 'color'
  > & { contained: boolean };
};

const components = {
  sectionTitle: SectionTitle,
  sectionCover: SectionCover,
  serviceMenu: ServiceMenu,
};

export const Section: React.FC<ContainerProps & TinaContainerProps> = ({
  body,
  settings: { spacing, decorative, typography, ...settings },
}) => {
  //  n9ZOvMI0UGU @TODO: ADD zod validation
  const { centerContent, contained } = settings;
  if (contained) {
    return (
      <CUIContainer
        centerContent={centerContent}
        layerStyle="container.default"
        {...typography}
        {...spacing}
        {...decorative}
        {...settings}
      >
        <TinaMarkdown content={body} components={components} />
      </CUIContainer>
    );
  }

  return (
    <Box
      layerStyle="container.default"
      {...typography}
      {...spacing}
      mx={centerContent ? 'auto' : 0}
      {...decorative}
      {...settings}
    >
      <TinaMarkdown content={body} components={components} />
    </Box>
  );
  return null;
};
