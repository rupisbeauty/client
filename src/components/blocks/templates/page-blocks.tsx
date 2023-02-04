import { Container, Divider } from '@chakra-ui/react';
import React from 'react';

import type { PagesBlocks } from '.tina';
import type { DividerProps } from '@chakra-ui/react';

import { AboutBlock } from '../about';
import { ContactInfoBlock } from '../contact';
import { FullLogoBlock } from '../full-logo-block';
import { HeroBlock } from '../hero/hero-block';
import {
  SectionCover,
  SectionCoverBlock, // @FIXME: this needs to be added in place ov SectionCover
  SectionTitleBlock,
  type SectionCoverProps,
} from '../section';
import { CoreServicesBlock, ServiceMenuBlock } from '../services';
import { LocationCTABlock } from '../visit-location-cta-block';

export const Blocks = (props: any) => {
  return (
    // @TODO: refactor to use an object Map instead of switch
    <>
      {(props?.blocks as PagesBlocks[])?.map((block) => {
        switch (block?.__typename) {
          case 'PagesBlocksLogo':
            return <FullLogoBlock key={block.__typename} />;
          case 'PagesBlocksHero':
            return <HeroBlock {...block} key={block.__typename} />;
          case 'PagesBlocksAbout':
            return <AboutBlock {...block} key={block.__typename} />;
          case 'PagesBlocksLocationCTA':
            return <LocationCTABlock {...block} key={block.__typename} />;
          case 'PagesBlocksCoreServices':
            return <CoreServicesBlock {...block} key={block.__typename} />;
          case 'PagesBlocksContact':
            return <ContactInfoBlock {...block} key={block.__typename} />;
          case 'PagesBlocksSectionTitle':
            return <SectionTitleBlock {...block} key={block.__typename} />;
          case 'PagesBlocksDivider':
            return (
              <Container maxW="container.xl" w="full">
                <Divider
                  orientation={
                    String(block.orientation) as DividerProps['orientation']
                  }
                  borderColor={String(block.borderColor)}
                  key={block.__typename}
                />
              </Container>
            );
          case 'PagesBlocksSectionCover':
            return (
              <SectionCover
                {...(block as SectionCoverProps)} // @FIXME: type issue
                key={block.__typename}
              />
            );
          case 'PagesBlocksServiceMenu':
            return <ServiceMenuBlock {...block} key={block.__typename} />;
        }
      })}
    </>
  );
};
