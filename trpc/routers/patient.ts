// Router layer: validate input + auth, call the service. Nothing else.
import { z } from "zod";
import { patientService } from "@/server/patient/patient.service";
import { createTRPCRouter, protectedProcedure } from "../init";

// TODO(BE-11): move this to a shared file and reuse the same zod schema as the form (incl. medications).
const patientInput = z.object({
  fullName: z.string().min(1),
  email: z.email(),
  phone: z.string().min(7),
  dateOfBirth: z.string(),
  status: z.enum(["active", "inactive", "pending"]),
  notes: z.string().optional(),
  medications: z
    .array(z.object({ name: z.string().min(1), dosage: z.string().min(1), frequency: z.string() }))
    .default([]),
});

export const patientRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        q: z.string().optional(),
        status: z.enum(["active", "inactive", "pending"]).optional(),
        sort: z.enum(["newest", "oldest", "name"]).default("newest"),
        page: z.number().int().min(1).default(1),
        pageSize: z.number().int().min(1).max(50).default(10),
      }),
    )
    .query(({ input }) => patientService.list(input)),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => patientService.getById(input.id)),

  create: protectedProcedure
    .input(patientInput)
    .mutation(({ input }) => patientService.create(input)),

  update: protectedProcedure
    .input(z.object({ id: z.string(), data: patientInput }))
    .mutation(({ input }) => patientService.update(input.id, input.data)),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => patientService.delete(input.id)),
});
