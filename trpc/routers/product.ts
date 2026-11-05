// Router layer: thin. Validate input, check auth, call the service. Nothing else.
import { z } from "zod";
import { productService } from "@/server/product/product.service";
import { baseProcedure, createTRPCRouter } from "../init";

export const productRouter = createTRPCRouter({
  list: baseProcedure.query(() => productService.list()),

  getById: baseProcedure
    .input(z.object({ productId: z.string() }))
    .query(({ input }) => productService.getById(input.productId)),
});
