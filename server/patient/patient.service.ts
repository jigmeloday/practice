// Business-rule layer. No Prisma here, no tRPC-specific input parsing.
import { patientRepository } from "./patient.repository";

export const patientService = {
  // TODO(BE-8): clamp pageSize (e.g. max 50), compute totalPages, return { items, total, totalPages }.
  list(params: { q?: string; status?: string; sort?: string; page: number; pageSize: number }) {
    return patientRepository.findMany(params);
  },

  // TODO(BE-9): throw TRPCError NOT_FOUND when missing.
  getById(id: string) {
    return patientRepository.findById(id);
  },

  // TODO(BE-10): rules - reject a duplicate email (CONFLICT); trim/normalise email to lowercase;
  //   patient must be at least 0 years old (dateOfBirth not in the future).
  create(data: unknown) {
    return patientRepository.create(data);
  },

  update(id: string, data: unknown) {
    return patientRepository.update(id, data);
  },

  delete(id: string) {
    return patientRepository.delete(id);
  },
};
