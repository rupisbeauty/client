import { AspectRatio, Container, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import type { imageSchema, PagesBlocksCoreServices } from '.tina';
import type { z } from 'zod';

import { SectionTitle } from '../../section/section-title-block';
import { MoreBox, ServiceBox } from './core-services.components';

export type Category = {
  category: string;
  image: z.TypeOf<typeof imageSchema>;
  link: string;
};

export const CoreServicesBlock: React.FC<PagesBlocksCoreServices> = (props) => {
  const router = useRouter();

  // @FIXME: update zod schema
  // const data = tinaSchema.coreServices.parse(props);
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
                    <ServiceBox // 15c1e649 Rename Components
                      key={service?.service?.title}
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
