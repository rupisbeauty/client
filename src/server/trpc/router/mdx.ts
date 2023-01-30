import { trpcPrismaErrorHandler } from '@/utils';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

import * as fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

interface FrontMatterData {
  [key: string]: any;
}

const parseFrontMatterData = async (
  filePaths: string[]
): Promise<FrontMatterData> => {
  const data: FrontMatterData = {};

  for (const filePath of filePaths) {
    const fileContents = await fs.readFile(
      path.join(__dirname, filePath),
      'utf-8'
    );
    const { data: frontMatterData } = matter(fileContents);
    const key = filePath.split('/').pop() || '';

    data[key] = frontMatterData;
  }

  return data;
};

export const mdxRouter = router({
  parseFMList: publicProcedure
    .input(z.object({ filePaths: z.array(z.string()) }))
    .query(async ({ ctx, input }) => {
      if (!input.filePaths || !input.filePaths.length) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'missing input value(s)',
        });
      }

      const data = await parseFrontMatterData(input.filePaths);
      return data;
      try {
      } catch (error) {
        trpcPrismaErrorHandler(error, 'Error Parsing files from filePaths.');
        // return error;
      }
    }),
});
