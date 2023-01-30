import { Box,chakra } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { MotionBox } from 'chakra.ui';

import type { coreServiceCategorySchema } from '@/schema';
import type { FC } from 'react';
import type { z } from 'zod';

const ChLink = chakra(Link);

export const ServiceBox: FC<{
  item: z.TypeOf<typeof coreServiceCategorySchema>;
}> = ({ item }) => {
  return (
    <MotionBox
      key={item?.image?.src}
      position="relative"
      w="full"
      h="full"
      whileHover={{ y: -10 }}
    >
      <ChLink href={'#'}>
        {item.image ? (
          <Box w="full" h="full" objectFit="cover">
            <Image
              src={String(item?.image?.src)}
              alt={item.category}
              fill={true}
              style={{
                borderRadius: '15px',
                boxShadow:
                  '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
                objectFit: 'cover',
              }}
            />
          </Box>
        ) : null}
        <Box
          position="relative"
          w="80%"
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
            color="red.400"
            fontWeight={600}
            fontSize={{ base: 'lg', xl: '2xl' }}
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
            {item.category}
          </chakra.p>
        </Box>
      </ChLink>
    </MotionBox>
  );
};
