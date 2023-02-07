import { Container, Divider } from '@chakra-ui/react';
import React from 'react';
// PagesBlocksSectionCover
import type { Pages } from '.tina';
import type { DividerProps } from '@chakra-ui/react';

import { AboutBlock } from '../about';
import { ContactInfoBlock } from '../contact';
import { LocationCTABlock } from '../cta/visit-location-cta-block';
import { FullLogoBlock } from '../full-logo-block';
import { HeroBlock } from '../hero/hero-block';
import { SectionCoverBlock, SectionTitleBlock } from '../section';
import { SimpleContent } from '../section/prose/simple-content';
import { CoreServicesBlock, ServiceMenuBlock } from '../services';

export const PageBlocks: React.FC<Pages> = (props) => {
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
            return (
              <ServiceMenuBlock
                {...block}
                key={block.__typename}
                // category={props?.slug}
              />
            );
          case 'PagesBlocksContent':
            // @TODO: update key -- this element might have multiple instances so need a better key
            return <SimpleContent {...block} key={block.__typename} />;
          default:
            return null;
        }
      })}
    </>
  );
};
