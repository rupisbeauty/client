import { CDN_URL, SERVICES_DIR } from '@/utils';
import { Box, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import { type NextJSImage } from './service-images';

export const ServiceBox = ({
  image,
  isCDN = false,
}: {
  image: NextJSImage;
  isCDN?: boolean;
}) => {
  return (
    <Box
      key={image.fileName}
      position="relative"
      w="100%"
    >
      <Image
        src={`${CDN_URL}${SERVICES_DIR}${image.fileName}`}
        alt={`${image.alt} | ${image?.attr}`}
        height={image.height}
        width={image.width}
        style={{
          borderRadius: '15px',
          boxShadow:
            '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
        }}
      />
      <Box
        position="relative"
        w="60%"
        zIndex={2}
        mt={-16}
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
          color="gray.600"
          fontWeight={600}
          fontSize={{ base: 'lg', xl: '2xl' }}
        >
          {image?.title}
        </chakra.p>
      </Box>
    </Box>
  );
};
