import { router } from "../trpc";
import { authRouter } from "./auth";
import { subsRouter } from "./subs";

export const appRouter = router({
  auth: authRouter,
  subs: subsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
