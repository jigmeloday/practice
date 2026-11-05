import Link from "next/link";
import { PatientStatusBadge } from "@/components/patients/patient-status-badge";
import { MOCK_PATIENTS } from "@/lib/mock/patients";

export default async function PatientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // TODO(FE-11 dynamic route): fetch the patient by `id` through tRPC (`patient.getById`).
  //   If it doesn't exist, call `notFound()` from "next/navigation" and add a not-found.tsx.
  // TODO(FE-12 metadata): export `generateMetadata` so the tab title is the patient's name.
  const patient = MOCK_PATIENTS.find((p) => p.id === id) ?? MOCK_PATIENTS[0];

  return (
    <div className="space-y-6">
      <Link href="/patients" className="text-sm text-teal-700 hover:underline">&larr; Back to patients</Link>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{patient.fullName}</h1>
          <p className="text-sm text-slate-500">{patient.email} &middot; {patient.phone}</p>
        </div>
        <PatientStatusBadge status={patient.status} />
      </div>

      <section className="grid gap-4 rounded-lg border bg-white p-6 sm:grid-cols-2">
        <div><p className="text-xs uppercase text-slate-500">Date of birth</p><p>{patient.dateOfBirth}</p></div>
        <div><p className="text-xs uppercase text-slate-500">Registered</p><p>{patient.createdAt}</p></div>
        <div className="sm:col-span-2"><p className="text-xs uppercase text-slate-500">Notes</p><p>{patient.notes ?? "-"}</p></div>
      </section>

      <section className="space-y-2 rounded-lg border bg-white p-6">
        <h2 className="font-medium">Medications</h2>
        {patient.medications.length === 0 ? (
          <p className="text-sm text-slate-500">None</p>
        ) : (
          <ul className="divide-y text-sm">
            {patient.medications.map((m, i) => (
              <li key={i} className="flex justify-between py-2">
                <span>{m.name} &middot; {m.dosage}</span>
                <span className="text-slate-500">{m.frequency}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* TODO(FE-13 edit): "Edit" opens /patients/[id]/edit reusing <PatientForm defaultValues={...} />. */}
      {/* TODO(FE-14 delete): "Delete" asks for confirmation, calls `patient.delete`, then redirects. */}
      <div className="flex gap-3">
        <button className="rounded-md border px-4 py-2 text-sm">Edit</button>
        <button className="rounded-md px-4 py-2 text-sm text-red-600 hover:bg-red-50">Delete</button>
      </div>
    </div>
  );
}
