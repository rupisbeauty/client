import { Awaitable } from '@/types';
import { PrismaUser } from '@/types/zod/prisma';
import { debug as globalDebug, dev } from '@/utils';
import { Account, Profile, User, type CallbacksOptions } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
// import { refreshAccessToken } from '../spotify-web-api/token';

const debug: boolean = globalDebug || false;

/**
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

  if (!email?.verificationRequest) {
    // @TODO: add logic to ensure a verification message is shown, and should ideally block login
  } else if (!(user as PrismaUser)?.isActive) {
    //
  }
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
