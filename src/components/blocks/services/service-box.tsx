import { AspectRatio, Box, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { MotionBox } from 'chakra.ui';

import type { CDNImage } from '@/_content';
import type { FC } from 'react';

const ChLink = chakra(Link);

export const ServiceBox: FC<{ image: CDNImage; category: string }> = ({
  category,
  image,
}) => {
  return (
    <MotionBox
      key={image?.src}
      position="relative"
      w="100%"
      whileHover={{ y: -10 }}
    >
      <ChLink href={`/services/${category}`}>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={image.src}
            alt={`${image.alt} | ${image?.attr}`}
            height={image.height}
            width={image.width}
            style={{
              borderRadius: '15px',
              boxShadow:
                '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
            }}
          />
        </AspectRatio>
        <Box
          position="relative"
          w="60%"
          zIndex={2}
          mt={-14}
          ml="auto"
          _after={{
            content: '""',
            position: 'absolute',
            width: 'full',
            height: 'full',
            background: 'white',
            top: 0,
            zIndex: -1,
            opacity: 0.7,
          }}
        >
          <chakra.p
            px={2}
            // padding="50px"
            color="red.400"
            fontWeight={600}
            fontSize={{ base: 'lg', xl: '2xl' }}
            // add embossed text shadow
            title="category"
            // textShadow="0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)"
            // textShadow="0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)"
            _before={{
              content: '""',
              padding: 2,
              color: 'rgba(255, 255, 255, 0.1)',
              position: 'absolute',
              top: '1px',
              left: '1px',
            }}
            _after={{
              content: '""',
              padding: 2,
              color: 'rgba(255, 255, 255, 0.1)',
              position: 'absolute',
              top: '2px',
              left: '2px',
            }}
          >
            {category}
          </chakra.p>
        </Box>
      </ChLink>
    </MotionBox>
  );
};
