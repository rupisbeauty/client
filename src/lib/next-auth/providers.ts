import { type NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';

const GOOGLE = GoogleProvider({
  clientId: '',
  clientSecret: '',
  // authorization: LOGIN_URL,
  authorization: '',
});

const EMAIL = EmailProvider({
  // server: {
  //   host: env.SMTP_HOST,
  //   port: Number(env.SMTP_PORT),
  //   auth: {
  //     user: env.EMAIL_FROM,
  //     pass: env.SMTP_PASS,
  //   },
  // },
  // from: env.EMAIL_FROM,
  // maxAge: ONE_DAY, // maxAge of magiclink jwt
  /**
   * @link: https://next-auth.js.org/providers/email
   * tap into the builtin email verification request
   */
  // sendVerificationRequest({
  //   identifier: email,
  //   url,
  //   provider: { server, from },
  // }) {
  //   /* your function */
  // },
});

// const CREDENTIALS = CredentialsProvider({
//   type: 'credentials',
//   credentials: {
//     // @link: https://next-auth.js.org/configuration/providers/credentials#how-to
//     // The credentials is used to generate a suitable form on the sign in page.
//     // You can specify whatever fields you are expecting to be submitted.
//     email: {
//       label: 'Email',
//       type: 'text',
//       placeholder: 'you@youremail.com',
//     },
//     password: { label: 'Password', type: 'password' },
//   },

//   authorize: async (
//     credentials: Record<'email' | 'password', string> | undefined
//   ) => authorize(credentials),
// });

export const providers: NextAuthOptions['providers'] = [GOOGLE, EMAIL];
