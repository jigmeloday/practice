-- CreateEnum
CREATE TYPE "PatientStatus" AS ENUM ('active', 'inactive', 'pending');

-- CreateEnum
CREATE TYPE "MedicationFrequency" AS ENUM ('daily', 'twice-daily', 'weekly', 'as-needed');

-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "status" "PatientStatus" NOT NULL DEFAULT 'pending',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medication" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" "MedicationFrequency" NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "medication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_email_key" ON "patient"("email");

-- CreateIndex
CREATE INDEX "patient_status_idx" ON "patient"("status");

-- CreateIndex
CREATE INDEX "patient_createdAt_idx" ON "patient"("createdAt");

-- CreateIndex
CREATE INDEX "medication_patientId_idx" ON "medication"("patientId");

-- AddForeignKey
ALTER TABLE "medication" ADD CONSTRAINT "medication_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
