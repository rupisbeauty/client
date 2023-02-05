import { Container,Divider } from '@chakra-ui/react';
import React from 'react';

import type { CategoriesBlocks,CategoriesBlocksSectionCover } from '.tina';
import type { DividerProps } from '@chakra-ui/react';

import { FullLogoBlock } from '../full-logo-block';
import {
SectionCoverBlock,
SectionTitleBlock
} from '../section';
import { ServiceMenuBlock } from '../services';
import { LocationCTABlock } from '../visit-location-cta-block';

export const ServiceBlocks: React.FC<{ blocks: CategoriesBlocks[] }> = (
  props
) => {
  return (
    // @TODO: refactor to use an object Map instead of switch
    <>
      {props?.blocks?.map((block) => {
        switch (block?.__typename) {
          case 'CategoriesBlocksLogo':
            return <FullLogoBlock key={block.__typename} />;
          case 'CategoriesBlocksLocationCTA':
            return <LocationCTABlock {...block} key={block.__typename} />;
          case 'CategoriesBlocksSectionTitle':
            return <SectionTitleBlock {...block} key={block.__typename} />;
          case 'CategoriesBlocksDivider':
            return (
              <Container maxW="container.xl" w="full" key={block.__typename}>
                <Divider
                  orientation={
                    String(block.orientation) as DividerProps['orientation']
                  }
                  borderColor={String(block.borderColor)}
                />
              </Container>
            );
          case 'CategoriesBlocksSectionCover':
            return (
              <SectionCoverBlock
                {...(block as CategoriesBlocksSectionCover)} // @FIXME: type issue
                key={block.__typename}
              />
            );
          case 'CategoriesBlocksServiceMenu':
            return <ServiceMenuBlock {...block} key={block.__typename} />;
          default:
            return null;
        }
      })}
    </>
  );
};
