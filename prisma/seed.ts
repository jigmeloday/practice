// Seeds patients + medications. Idempotent: upserts by email and replaces medications.
// Run with `npx prisma db seed`.
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { MOCK_PATIENTS } from "../lib/mock/patients";

const FREQUENCY = {
  daily: "daily",
  "twice-daily": "twice_daily",
  weekly: "weekly",
  "as-needed": "as_needed",
} as const;

const db = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  for (const p of MOCK_PATIENTS) {
    const data = {
      fullName: p.fullName,
      email: p.email,
      phone: p.phone,
      dateOfBirth: new Date(p.dateOfBirth),
      status: p.status,
      notes: p.notes ?? null,
      createdAt: new Date(p.createdAt),
    };
    const medications = p.medications.map((m) => ({
      name: m.name,
      dosage: m.dosage,
      frequency: FREQUENCY[m.frequency],
    }));

    await db.patient.upsert({
      where: { email: p.email },
      create: { ...data, medications: { create: medications } },
      update: { ...data, medications: { deleteMany: {}, create: medications } },
    });
  }
  console.log(`Seeded ${MOCK_PATIENTS.length} patients`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
