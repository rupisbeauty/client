import React from 'react';

import type { PagesBlocks } from '.tina';

import { AboutBlock } from '../about';
// import { FullLogoBlock } from '../full-logo-block';
import { HeroBlock } from '../hero/hero-block';
import { CoreServicesBlock } from '../services';
import { LocationCTABlock } from '../visit-location-cta-block';

export const Blocks = (props: any) => {
  return (
    <>
      {(props?.blocks as PagesBlocks[])?.map((block) => {
        switch (block?.__typename) {
          // case 'PagesBlocksLogo':
          //   return <FullLogoBlock key={block.__typename} />;
          case 'PagesBlocksHero':
            return <HeroBlock {...block} key={block.__typename} />;
          case 'PagesBlocksAbout':
            return <AboutBlock {...block} key={block.__typename} />;
          case 'PagesBlocksLocationCTA':
            return <LocationCTABlock {...block} key={block.__typename} />;
          case 'PagesBlocksCoreServices':
            return <CoreServicesBlock {...block} key={block.__typename} />;
        }
      })}
    </>
  );
};
