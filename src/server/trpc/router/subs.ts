import { trpcPrismaErrorHandler } from '@/utils';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const subsRouter = router({
  subscribe: publicProcedure
    .input(z.object({ email: z.string() }))
    .mutation(({ ctx, input }) => {
      if (!input.email) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'missing input value(s)',
        });
      }

      try {
        const data = ctx.prisma.subscriber.create({
          data: {
            email: input.email,
          },
        });
        return data;
      } catch (error) {
        trpcPrismaErrorHandler(error, 'You are already subscribed.');
        // return error;
      }
    }),
});
