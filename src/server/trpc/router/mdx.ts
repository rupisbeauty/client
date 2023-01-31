import { trpcPrismaErrorHandler } from '@/utils';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure,router } from '../trpc';

import * as fs from 'fs/promises';
import matter from 'gray-matter';

interface FrontMatterData {
  [key: string]: any;
}
/**
 * Takes in a list of tina reference filePaths and returns a list of frontmatter data
 *
 * filePaths: [
 *   '_content/options/addons/dermaplaning.mdx',
 *   '_content/options/addons/led-light-therapy.mdx',
 *   '_content/options/addons/microdermabrasion.mdx',
 * ]
 *
 * @param {string[]} filePaths
 * @return {*}  {Promise<FrontMatterData>}
 *
 * @see: '.tina/schema.ts'
 */
const parseFrontMatterData = async (
  filePaths: string[]
): Promise<FrontMatterData> => {
  const data: FrontMatterData = {};

  for (const filePath of filePaths) {
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const { data: frontMatterData } = matter(fileContents);
    const key = filePath.split('/').pop() || '';

    data[key] = frontMatterData;
  }

  return data;
};

export const mdxRouter = router({
  parseFMList: publicProcedure
    .input(z.object({ filePaths: z.array(z.string()) }))
    .query(async ({ input }) => {
      if (!input.filePaths || !input.filePaths.length) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'missing input value(s)',
        });
      }
      try {
        const data = await parseFrontMatterData(input.filePaths);
        return data;
      } catch (error) {
        trpcPrismaErrorHandler(error, 'Error Parsing files from filePaths.');
        // return error;
      }
    }),
});
