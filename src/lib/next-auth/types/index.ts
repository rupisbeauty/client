import type { Session } from 'next-auth';
import type { BuiltInProviderType } from 'next-auth/providers';
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react';

export type NextAuthProvider = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
> | null;

export type NextAuthProviders = {
  [key: string]: NextAuthProvider;
};
export interface SessionWithUser extends Session {
  id: string;
  email: string;
  image: string;
  emailVerified?: string;
}

// export type SessionUser = {
//   id: string;
//   email: string;
//   image: string;
//   emailVerified?: string;
// };
