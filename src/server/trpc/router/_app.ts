import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { propertyRouter } from "./property";
import { propertyTypeRouter } from "./propertyType";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  property: propertyRouter,
  propertyType: propertyTypeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
