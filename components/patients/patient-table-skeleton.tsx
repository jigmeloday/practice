export function PatientTableSkeleton() {
  return (
    <div className="space-y-2 rounded-lg border bg-white p-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-8 animate-pulse rounded bg-slate-100" />
      ))}
    </div>
  );
}
