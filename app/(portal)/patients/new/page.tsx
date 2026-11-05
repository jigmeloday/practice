import { PatientForm } from "@/components/patients/patient-form";

export default function NewPatientPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">New patient</h1>
      <PatientForm />
    </div>
  );
}
