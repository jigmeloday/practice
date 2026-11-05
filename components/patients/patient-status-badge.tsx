import type { PatientStatus } from "@/types/patient";

const STYLES: Record<PatientStatus, string> = {
  active: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  inactive: "bg-slate-200 text-slate-600",
};

export function PatientStatusBadge({ status }: { status: PatientStatus }) {
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${STYLES[status]}`}>
      {status}
    </span>
  );
}
