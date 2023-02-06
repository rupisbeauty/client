import type * as prismaSchema from '@/schema/prisma.schema';
import type { z } from 'zod';

// @NOTE: these types have been inferred from zod schema for prisma as imported above.

export type PrismaAccount = z.TypeOf<typeof prismaSchema.accountSchema>;
export type PrismaSession = z.TypeOf<typeof prismaSchema.sessionSchema>;
export type PrismaVerificationToken = z.TypeOf<
  typeof prismaSchema.verificationTokenSchema
>;
export type PrismaUser = z.TypeOf<typeof prismaSchema.prismaUserSchema>;
export type PrismaUserWithPassword = z.TypeOf<
  typeof prismaSchema.prismaUserWithPasswordSchema
>;
