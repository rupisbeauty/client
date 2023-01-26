import { AspectRatio, Container, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import type { CDNImage, ServiceImages } from '@/_content';
import type { FC } from 'react';

import { SectionTitle } from '../section-title';
import { MoreBox } from './more-services-box';
import { ServiceBox } from './service-box';

import { imageMap } from '@/_content';

export const CoreServices: FC<{ title: string; images: CDNImage[] }> = ({
  title,
  images,
}) => {
  const router = useRouter();
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
        <SectionTitle title="Core Services" />
        <SimpleGrid
          w="full"
          my={16}
          p={{ base: 4, lg: 12 }}
          gap={9}
          alignItems="center"
          columns={[1, 2, 3]}
          justifyContent="center"
          border="6px dashed"
          borderColor="red.200"
          borderRadius="10px"
        >
          {/* {Object.keys(imageMap).map((serviceKey) => (
            <ServiceBox
              key={imageMap[serviceKey as keyof ServiceImages].cover.src}
              image={imageMap[serviceKey as keyof ServiceImages].cover}
              category={serviceKey}
            />
          ))} */}
          {images.length
            ? images.map((image) => (
                <ServiceBox
                  key={image.src}
                  image={image}
                  category={'test'} // @FIXME: needs the service category
                />
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
