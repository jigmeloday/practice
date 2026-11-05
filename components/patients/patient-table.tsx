import Link from "next/link";
import type { Patient } from "@/types/patient";
import { PatientStatusBadge } from "./patient-status-badge";

export function PatientTable({ patients }: { patients: Patient[] }) {
  // TODO(FE-4 empty state): when `patients` is empty, render a friendly "No patients found" message.
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100 text-xs uppercase text-slate-500">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Medications</th>
            <th className="px-4 py-3" />
          </tr>
        </thead>
        <tbody className="divide-y">
          {patients.map((p) => (
            <tr key={p.id} className="hover:bg-slate-50">
              <td className="px-4 py-3 font-medium">{p.fullName}</td>
              <td className="px-4 py-3 text-slate-600">{p.email}</td>
              <td className="px-4 py-3"><PatientStatusBadge status={p.status} /></td>
              <td className="px-4 py-3">{p.medications.length}</td>
              <td className="px-4 py-3 text-right">
                <Link href={`/patients/${p.id}`} className="text-teal-700 hover:underline">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
