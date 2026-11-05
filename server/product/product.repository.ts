// DB layer: the ONLY place that talks to the database (Prisma). No business rules here.
// Replace the fake data with e.g. `db.product.findMany()` once Prisma is set up.
export const productRepository = {
  async findAll() {
    return [{ id: "1", name: "Example product" }];
  },

  async findById(id: string) {
    return { id, name: "Example product" };
  },
};
