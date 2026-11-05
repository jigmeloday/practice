import Link from "next/link";
import { PatientFilters } from "@/components/patients/patient-filters";
import { PatientPagination } from "@/components/patients/patient-pagination";
import { PatientTable } from "@/components/patients/patient-table";
import { MOCK_PATIENTS } from "@/lib/mock/patients";
import { getQueryClient, trpc } from '@/trpc/server';
import z from 'zod';

export default async function PatientsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string; sort?: string; page?: string }>;
}) {
  
  // TODO(FE-6 data fetching): `await searchParams`, then fetch patients through tRPC
  //   (see trpc/server.tsx for prefetch, or use `useQuery` in a client component).
  //   Replace MOCK_PATIENTS. Pass q/status/sort/page to the query.
  const statusSchema =  z.enum(["active", "inactive", "pending"]);
const sortSchema = z.enum(["newest", "oldest", "name"]);
  const { q, status, sort, page } = await searchParams;
  const qc = getQueryClient();
  const data = qc.query(trpc.patient.list.queryOptions({ q: q ?? undefined, status: statusSchema.safeParse(status).data ?? 'active', sort: sortSchema.catch("newest").parse(sort), page: page ?? 1  }))
  const patients = MOCK_PATIENTS;
console.log(data)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Patients</h1>
          <p className="text-sm text-slate-500">Search, filter and manage patients.</p>
        </div>
        <Link href="/patients/new" className="rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800">
          + New patient
        </Link>
      </div>

      <PatientFilters />

      {/* TODO(FE-7 loading): add app/(portal)/patients/loading.tsx using PatientTableSkeleton,
          or wrap the table in <Suspense fallback={<PatientTableSkeleton />}>. */}
      {/* TODO(FE-8 error): add error.tsx next to this page to show a retry button. */}
      <PatientTable patients={patients} />

      <PatientPagination page={1} totalPages={1} />
    </div>
  );
}
