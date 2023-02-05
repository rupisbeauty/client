import { Container, Divider } from '@chakra-ui/react';
import React from 'react';

import type { PagesBlocks, PagesBlocksSectionCover } from '.tina';
import type { DividerProps } from '@chakra-ui/react';

import { AboutBlock } from '../about';
import { ContactInfoBlock } from '../contact';
import { FullLogoBlock } from '../full-logo-block';
import { HeroBlock } from '../hero/hero-block';
import { SectionCoverBlock, SectionTitleBlock } from '../section';
import { CoreServicesBlock, ServiceMenuBlock } from '../services';
import { LocationCTABlock } from '../visit-location-cta-block';

export const PageBlocks: React.FC<{ blocks: PagesBlocks[] }> = (props) => {
  return (
    // @TODO: refactor to use an object Map instead of switch
    <>
      {props?.blocks?.map((block) => {
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
              <Container maxW="container.xl" w="full" key={block.__typename}>
                <Divider
                  orientation={
                    String(block.orientation) as DividerProps['orientation']
                  }
                  borderColor={String(block.borderColor)}
                />
              </Container>
            );
          case 'PagesBlocksSectionCover':
            return (
              <SectionCoverBlock
                {...(block as PagesBlocksSectionCover)} // @FIXME: type issue
                key={block.__typename}
              />
            );
          case 'PagesBlocksServiceMenu':
            return <ServiceMenuBlock {...block} key={block.__typename} />;
          default:
            return null;
        }
      })}
    </>
  );
};
