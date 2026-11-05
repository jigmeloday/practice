// DB layer: only Prisma queries here. No business rules.
// TODO(BE-2): implement with `db` from "@/lib/db" once the Patient model exists (BE-1).

import { db } from '@/lib/db';

export const patientRepository = {
  // TODO(BE-3): findMany with `where` (search q on fullName/email, status), `orderBy`, `skip`/`take`,
  //   and a separate `count` for the same where. Return { items, total }.
  async findMany(_params: { q?: string; status?: string; sort?: string; page: number; pageSize: number }) {
    db.patient.findMany()
    throw new Error("Not implemented");
  },

  // TODO(BE-4): findUnique by id (include medications).
  async findById(_id: string) {
    throw new Error("Not implemented");
  },

  // TODO(BE-5): create patient AND its medications in one nested write.
  async create(_data: unknown) {
    throw new Error("Not implemented");
  },

  // TODO(BE-6): update patient; replace the medications list (deleteMany + create) in a transaction.
  async update(_id: string, _data: unknown) {
    throw new Error("Not implemented");
  },

  // TODO(BE-7): delete by id.
  async delete(_id: string) {
    throw new Error("Not implemented");
  },
};
