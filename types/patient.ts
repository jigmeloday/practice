// Shared shape used by UI, tRPC and DB. Keep it in sync with your Prisma model.
export type PatientStatus = "active" | "inactive" | "pending";

export type Medication = {
  name: string;
  dosage: string;
  frequency: "daily" | "twice-daily" | "weekly" | "as-needed";
};

export type Patient = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string; // ISO date
  status: PatientStatus;
  notes?: string;
  medications: Medication[];
  createdAt: string; // ISO date
};
