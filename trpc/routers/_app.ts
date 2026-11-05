// Step 2: the root router. Add every feature router here.
import { createTRPCRouter } from "../init";
import { patientRouter } from "./patient";
import { productRouter } from "./product";

export const appRouter = createTRPCRouter({
  product: productRouter,
  patient: patientRouter,
});

// The client only imports this *type*, which is how you get end-to-end type safety.
export type AppRouter = typeof appRouter;
