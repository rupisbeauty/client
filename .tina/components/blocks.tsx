import React from 'react';

import type { Maybe } from '../__generated__/types';

import { tinaSchema } from '@/schema';
import { z } from 'zod';
import { Hero } from '../../src/components';

export type BlocksProps = z.TypeOf<typeof tinaSchema.pages.blocks>;
export const Blocks: React.FC<BlocksProps> = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block: Maybe<BlocksProps>, i: number) => {
        switch (true) {
          case block?.__typename?.includes('PagesBlocksHero'):
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
