import { Container,Divider } from '@chakra-ui/react';
import React from 'react';

import type { Routes, RoutesBlocksSectionCover } from '.tina';
import type { DividerProps } from '@chakra-ui/react';

import { AboutBlock } from '../about';
import { ContactInfoBlock } from '../contact';
import { LocationCTABlock } from '../cta/visit-location-cta-block';
import { FullLogoBlock } from '../full-logo-block';
import { HeroBlock } from '../hero/hero-block';
import { SectionCoverBlock,SectionTitleBlock } from '../section';
import { SimpleContent } from '../section/prose/simple-content';
import { CoreServicesBlock,ServiceMenuBlock } from '../services';

// 5886
export const RouteBlocks: React.FC<Routes> = (props) => {
  return (
    // @TODO: refactor to use an object Map instead of switch
    <>
      {props?.blocks?.map((block) => {
        switch (block?.__typename) {
          case 'RoutesBlocksLogo':
            return <FullLogoBlock key={block.__typename} />;
          case 'RoutesBlocksHero':
            return <HeroBlock {...block} key={block.__typename} />;
          case 'RoutesBlocksAbout':
            return <AboutBlock {...block} key={block.__typename} />;
          case 'RoutesBlocksLocationCTA':
            return <LocationCTABlock {...block} key={block.__typename} />;
          case 'RoutesBlocksCoreServices':
            return <CoreServicesBlock {...block} key={block.__typename} />;
          case 'RoutesBlocksContact':
            return <ContactInfoBlock {...block} key={block.__typename} />;
          case 'RoutesBlocksSectionTitle':
            return <SectionTitleBlock {...block} key={block.__typename} />;
          case 'RoutesBlocksDivider':
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
          case 'RoutesBlocksSectionCover':
            return (
              <SectionCoverBlock
                {...(block as RoutesBlocksSectionCover)} // @FIXME: type issue
                key={block.__typename}
              />
            );
          case 'RoutesBlocksServiceMenu':
            return (
              <ServiceMenuBlock
                {...block}
                key={block.__typename}
                // category={props?.slug}
              />
            );
          case 'RoutesBlocksContent':
            // @TODO: update key -- this element might have multiple instances so need a better key
            return <SimpleContent {...block} key={block.__typename} />;
          default:
            return null;
        }
      })}
    </>
  );
};
