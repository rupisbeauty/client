import { AspectRatio, Container, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import type { imageSchema } from '.tina';
import type { z } from 'zod';

import { SectionTitle } from '../../section/section-title-block';
import { MoreBox } from './more-services-box';
import { ServiceBox } from './service-box';

import { tinaSchema } from '@/schema';

export type Category = {
  category: string;
  image: z.TypeOf<typeof imageSchema>;
  link: string;
};

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
