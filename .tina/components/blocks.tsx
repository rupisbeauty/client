import React from 'react';

import type { Maybe, Page_Sections, Page_SectionsBlocks } from '.tina';

import { Hero } from '@/components';

export type BlocksProps = Omit<Page_Sections, 'id' | '_sys' | '_values'>;
export const Blocks = (props: BlocksProps) => {
  return (
    <>
      {props.blocks?.map((block: Maybe<Page_SectionsBlocks>, i: number) => {
        switch (true) {
          case block?.__typename?.includes('Page_sectionsBlocksHero'):
            const tinaField = `blocks.${i}`;
            return (
              <div data-tinafield={tinaField} key={tinaField}>
                <Hero data={block} />
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};
