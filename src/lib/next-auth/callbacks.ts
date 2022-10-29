import { Awaitable } from '@/types';
import { PrismaUser } from '@/types/zod/prisma';
import { debug as globalDebug, dev } from '@/utils';
import { Account, Profile, User, type CallbacksOptions } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import { refreshAccessToken } from '../spotify-web-api/token';

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

  if (account && user) {
    // initial sign in - add tokens to jwt
    dev.log('callback:jwt::initial-signin', { token }, debug);
    return {
      ...token,
      accessToken: account.access_token,
      refreshToken: account.refresh_token,
      username: account.providerAccountId,
      // converted to milliseconds
      accessTokenExpires: Number(account.expires_at) * 1000, // convert to MS
    };
  }

  if (Date.now() < Number(token.accessTokenExpires)) {
    dev.log(
      'callback:jwt:token NOT EXPIRED',
      {
        expired: Date.now() > (token?.accessTokenExpires as number),
        expiresIn: (token?.accessTokenExpires as number) - Date.now(),
        tokenExpires: token?.accessTokenExpires,
        now: Date.now(),
      },
      debug
    );
    return token;
  }

  //access token has expired, so we need to refresh it
  dev.log(
    '🎟 Token Expired. REFRESHING...',
    { token: token.accessToken },
    debug
  );
  const jwt: JWT = await refreshAccessToken(token);
  dev.log('🔵 | jwtCallback:RefreshedToken| line 65 | jwt', jwt, debug);
  if (!jwt) throw jwt;
  return jwt;
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
