import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';

export function trpcPrismaErrorHandler(error: any, message?: string) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      throw new TRPCError({
        code: 'CONFLICT',
        message: message ?? 'Item Already Exists.',
        cause: error,
      });
    }
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Something went wrong',
      cause: error,
    });
  }
  throw new TRPCError({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Something went wrong',
    cause: error,
  });
}
