import { router } from '../trpc';
import { authRouter } from './auth';
import { mdxRouter } from './mdx';
import { subsRouter } from './subs';

export const appRouter = router({
  auth: authRouter,
  mdx: mdxRouter,
  subs: subsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
