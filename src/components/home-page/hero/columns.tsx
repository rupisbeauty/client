import { CDN_URL, PEOPLE_DIR } from '@/utils';
import { Box, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import column1 from '__data/site/pages/home/hero.json';

export const Column1 = () => {
  return (
    <Box>
      <chakra.p
        color="gray.600"
        fontSize={{ base: '2xl', md: '4xl', lg: '2xl' }}
        fontWeight={600}
        letterSpacing={1.1}
        textAlign={{ base: 'center', lg: 'left' }}
        textShadow="0px 1px 1px #555"
        textTransform="uppercase"
        w="100%"
      >
        {column1.subtitle}
      </chakra.p>
      <Box position="relative">
        <chakra.h2
          as="h1"
          color="primary"
          fontSize={{ base: '6xl', sm: '7xl', md: '8Fxl', lg: '7xl' }}
          fontWeight={400}
          lineHeight={1.2}
          textShadow="0px 1px 1px #555"
          textAlign={['center', null, null, 'left']}
        >
          {column1.title}
        </chakra.h2>
        <Box
          display={{ base: 'none', sm: 'block' }}
          position="absolute"
          width="188"
          height="190"
          mt={{ sm: -24 }}
          ml={{ sm: '65%', md: '70%', lg: 64 }}
          transform={{ base: 'rotate(23deg) scale(35%)' }}
          zIndex={-1}
        >
          <Image
            src="/leaf.png"
            alt="decorative leaf"
            width="188"
            height="190"
          />
        </Box>
      </Box>
    </Box>
  );
};

export const Column2 = () => {
  return (
    <Box
      maxW={{ lg: '1100px', xl: '800px' }}
      maxH={{ lg: '1100px', xl: '800px' }}
      p={{ base: 0, sm: 0, md: 0, lg: 0 }}
      mb={{ base: 20, sm: 0 }}
    >
      <Image
        src={`${CDN_URL}${PEOPLE_DIR}/hero-composite.png`}
        alt="beautiful woman touching face after treatment | Image by cookie_studio on Freepik"
        width="1200"
        height="1200"
        priority
      />
    </Box>
  );
};
