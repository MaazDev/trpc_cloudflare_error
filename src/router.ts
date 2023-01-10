import {publicProcedure, router} from "./index";
export const appRouter = router({
    hello: publicProcedure.query(() => "hello")
});

export type AppRouter = typeof appRouter;