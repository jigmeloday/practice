// Fake data so the UI works before the backend exists.
// TODO(FE): once data fetching works, delete this file and its imports.
import type { Patient } from "@/types/patient";

export const MOCK_PATIENTS: Patient[] = [
  { id: "1", fullName: "Amelia Brown", email: "amelia@example.com", phone: "555-0101", dateOfBirth: "1990-04-12", status: "active", createdAt: "2026-01-04", medications: [{ name: "Metformin", dosage: "500mg", frequency: "twice-daily" }] },
  { id: "2", fullName: "Liam Johnson", email: "liam@example.com", phone: "555-0102", dateOfBirth: "1984-09-30", status: "pending", createdAt: "2026-02-11", medications: [] },
  { id: "3", fullName: "Sofia Garcia", email: "sofia@example.com", phone: "555-0103", dateOfBirth: "1976-01-22", status: "active", createdAt: "2026-02-19", notes: "Allergic to penicillin", medications: [{ name: "Lisinopril", dosage: "10mg", frequency: "daily" }, { name: "Aspirin", dosage: "81mg", frequency: "daily" }] },
  { id: "4", fullName: "Noah Williams", email: "noah@example.com", phone: "555-0104", dateOfBirth: "2001-07-08", status: "inactive", createdAt: "2026-03-02", medications: [] },
  { id: "5", fullName: "Olivia Martinez", email: "olivia@example.com", phone: "555-0105", dateOfBirth: "1968-12-15", status: "active", createdAt: "2026-03-18", medications: [{ name: "Atorvastatin", dosage: "20mg", frequency: "daily" }] },
  { id: "6", fullName: "Ethan Davis", email: "ethan@example.com", phone: "555-0106", dateOfBirth: "1995-05-27", status: "pending", createdAt: "2026-04-05", medications: [] },
  { id: "7", fullName: "Mia Rodriguez", email: "mia@example.com", phone: "555-0107", dateOfBirth: "1988-03-03", status: "active", createdAt: "2026-04-21", medications: [{ name: "Albuterol", dosage: "2 puffs", frequency: "as-needed" }] },
  { id: "8", fullName: "James Wilson", email: "james@example.com", phone: "555-0108", dateOfBirth: "1959-10-19", status: "inactive", createdAt: "2026-05-09", medications: [] },
];
