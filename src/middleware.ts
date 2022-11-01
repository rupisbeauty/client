import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { debug as globalDebug, dev } from './utils';

const debug = globalDebug || false;

export async function middleware(req: NextRequest) {
  const start = Date.now();
  dev.log('middleware running...', { start }, debug);
  //token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  dev.log('token at middleware', token);

  const { pathname } = req.nextUrl;

  const whitelist = ['api/auth', '/'];

  if (whitelist.includes(pathname) || token) {
    dev.log('response.next at middleware', null, debug);
    return NextResponse.next();
  }

  //redirect them to login if they don't have token and are
  //requesting a protected route

  // const protectedRoutes = ['admin', 'me'];
  const protectedRoutes: string[] = ['/admin'];

  const isProtectedRoute = protectedRoutes.every((path) => path === pathname);

  if (!token && isProtectedRoute) {
    dev.log('redirect to login middleware', null, debug);
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  const end = Date.now();
  dev.log('middleware ended', { start, end, elapsed: end - start }, debug);
}

export const config = {
  matcher: '/',
};
