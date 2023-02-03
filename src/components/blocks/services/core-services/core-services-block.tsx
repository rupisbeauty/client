import { AspectRatio, Container, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import type {
  imageSchema,
  PagesBlocksCoreServices,
  PagesBlocksCoreServicesRelatedServices,
} from '.tina';
import type { z } from 'zod';

import { SectionTitle } from '../../section/section-title-block';
import { MoreBox, ServiceBox, ServiceBox2 } from './core-services.components';

import { tinaSchema } from '@/schema';
import { trpc } from '@/utils';

export type Category = {
  category: string;
  image: z.TypeOf<typeof imageSchema>;
  link: string;
};

// 00icQ @WIP : block migration : @FIXME: Remove after migration
export const CoreServices: React.FC<{
  title: string;
  serviceCategories: Category[];
}> = (props) => {
  const router = useRouter();
  const data = tinaSchema.coreServices.parse(props);
  return (
    <>
      <Container
        as="section"
        id="services"
        position="relative"
        maxW="container.xl"
        centerContent
        p={{ sm: 12, md: 16 }}
        pt={{ lg: 32 }}
        bgGradient={[
          'linear(to-r, #FDE4CC, #FFF1E4 )',
          'linear(to-b, #FFF1E4, #FDE4CC )',
        ]}
      >
        <SectionTitle title={String(data?.title)} />
        <SimpleGrid
          w="full"
          my={16}
          p={{ base: 4, lg: 12 }}
          gap={9}
          alignItems="center"
          columns={[1, 2, 3]}
          autoRows="1fr"
          justifyContent="center"
          border="6px dashed"
          borderColor="red.200"
          borderRadius="10px"
        >
          {props.serviceCategories?.length
            ? props.serviceCategories?.map((category: Category) => (
                <ServiceBox key={category.category} item={category} />
              ))
            : null}
          <AspectRatio ratio={16 / 9}>
            <MoreBox onClick={() => router.push('/services')} />
          </AspectRatio>
        </SimpleGrid>
      </Container>
    </>
  );
};

export const CoreServicesBlock: React.FC<PagesBlocksCoreServices> = (props) => {
  console.log('🚀 | file: core-services-block.tsx:68 | props', props);
  const router = useRouter();

  // 00icQ @WIP : block migration @FIXME: update zod schema
  // const data = tinaSchema.coreServices.parse(props); // @FIDME:
  return (
    <>
      <Container
        as="section"
        id="services"
        position="relative"
        maxW="container.xl"
        centerContent
        p={{ sm: 12, md: 16 }}
        pt={{ lg: 32 }}
        bgGradient={[
          'linear(to-r, #FDE4CC, #FFF1E4 )',
          'linear(to-b, #FFF1E4, #FDE4CC )',
        ]}
        tina-data
      >
        <SectionTitle title={"Rupi's Core Services"} />
        <SimpleGrid
          w="full"
          my={16}
          p={{ base: 4, lg: 12 }}
          gap={9}
          alignItems="center"
          columns={[1, 2, 3]}
          autoRows="1fr"
          justifyContent="center"
          border="6px dashed"
          borderColor="red.200"
          borderRadius="10px"
        >
          {props.relatedServices?.length
            ? props.relatedServices?.map(
                // @FIXME: update type
                (service: any) =>
                  service?.service && (
                    <ServiceBox2
                      key={service?.service?.__typename}
                      item={service?.service}
                    />
                  )
              )
            : null}
          <AspectRatio ratio={16 / 9}>
            <MoreBox onClick={() => router.push('/services')} />
          </AspectRatio>
        </SimpleGrid>
      </Container>
    </>
  );
};
