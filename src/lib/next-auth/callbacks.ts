import type{ Account, Profile, User, CallbacksOptions } from 'next-auth';
import type{ AdapterUser } from 'next-auth/adapters';
import type{ JWT } from 'next-auth/jwt';
import type{ Awaitable } from '@/types';
import { debug as globalDebug, dev } from '@/utils';

const debug: boolean = globalDebug || false;

/**
 * UNUSED IN THIS PROJECT
 * Next Auth Callbacks
 * Order of operation: [redirect => signIn => jwt => session]
 */

type JWTCallback = (params: {
  token: JWT;
  user?: User | AdapterUser;
  account?: Account | null;
  profile?: Profile;
  isNewUser?: boolean;
}) => Awaitable<JWT>;

export const redirectCallback: CallbacksOptions['redirect'] = ({
  url,
  baseUrl,
}) => {
  dev.log('🔁 callback:redirect', { url, baseUrl }, debug);

  return baseUrl;
};

export const jwtCallback: JWTCallback = async ({
  token,
  account,
  user,
  profile,
  isNewUser,
}) => {
  const debug = true;

  dev.log(
    '🔒 callback:jwt',
    { token, user, account, profile, isNewUser },
    debug
  );

  return token;
};

export const signInCallback: CallbacksOptions['signIn'] = ({
  user,
  account,
  profile,
  email,
  credentials,
}) => {
  dev.log(
    '🔓 callback:signin',
    { user, account, profile, email, credentials },
    debug
  );

  return true;
};

export const sessionCallback: CallbacksOptions['session'] = ({
  session,
  token,
  user,
}) => {
  dev.log('🎫 callback:session', { session, user, token }, debug);
  return {
    ...session,
    user: {
      ...(session.user as User),
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      username: token.username,
    },
  };
};
