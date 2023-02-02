import { ChakraNextImage } from 'chakra.ui/components';

import type { FC } from 'react';

export const FullLogo: FC = () => (
  <ChakraNextImage
    width="300"
    height="258"
    objectFit="contain"
    src={`/uploads/assets/brand/rupi-new-logo-md.webp`}
    alt="Rupi Beauty Studio"
    priority
  />
);
