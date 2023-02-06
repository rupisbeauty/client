import { Container,Divider } from '@chakra-ui/react';
import React from 'react';

import type { Categories,CategoriesBlocksSectionCover } from '.tina';
import type { DividerProps } from '@chakra-ui/react';

import { LocationCTABlock } from '../cta/visit-location-cta-block';
import { FullLogoBlock } from '../full-logo-block';
import { SectionCoverBlock,SectionTitleBlock } from '../section';
import { SimpleContent } from '../section/prose';
import { ServiceMenuBlock } from '../services';

export const ServiceBlocks: React.FC<Categories> = (props) => {
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
            return (
              <ServiceMenuBlock
                {...block}
                key={block.__typename}
                category={props?.slug}
              />
            );
          case 'CategoriesBlocksContent':
            // @TODO: update key -- this element might have multiple instances so need a better key
            return <SimpleContent {...block} key={block.__typename} />;
          default:
            return null;
        }
      })}
    </>
  );
};
