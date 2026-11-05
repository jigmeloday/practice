import { z } from "zod";

// Starter schema (basic fields only).
export const PATIENT_SCHEMA = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().min(7, "Phone is too short"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  status: z.enum(["active", "inactive", "pending"]),
  notes: z.string().optional(),
  // TODO(FE-9 form array): add `medications: z.array(z.object({ name, dosage, frequency })).max(10)`
  //   and make each field required with a helpful message.
});

export type PatientFormType = z.infer<typeof PATIENT_SCHEMA>;
