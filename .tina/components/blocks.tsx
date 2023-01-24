import React from 'react';

import type { Maybe, Page_Sections, Page_SectionsBlocks } from '.tina';

import { ChImage } from 'chakra.ui';

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
                <h1>{block?.heading}</h1>
                <p>{block?.subheading}</p>
                <ChImage
                  src={String(block?.image?.src)}
                  alt={String(block?.image?.alt)}
                  width={Number(block?.image?.width)}
                  height={Number(block?.image?.height)}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};
