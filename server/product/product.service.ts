// Business logic layer: rules, validation beyond shape, combining repositories.
// Knows nothing about tRPC or HTTP, so it can be reused and tested on its own.
import { TRPCError } from "@trpc/server";
import { productRepository } from "./product.repository";

export const productService = {
  list() {
    return productRepository.findAll();
  },

  async getById(id: string) {
    const product = await productRepository.findById(id);
    if (!product) throw new TRPCError({ code: "NOT_FOUND" });
    return product;
  },
};
