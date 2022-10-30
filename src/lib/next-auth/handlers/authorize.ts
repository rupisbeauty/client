import { User } from '@prisma/client';
import { prisma } from '@/server/db/client';
import { dev } from '@/utils';
// import { comparePasswords } from '../../argon2';

type AuthorizeFnCredentials = Record<'email' | 'password', string> | undefined;

/**
 * Unused in this project, - used for credentials auth
 */

export async function authorize(
  credentials: AuthorizeFnCredentials
): Promise<User | null> {
  return null;
}
