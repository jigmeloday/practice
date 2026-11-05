"use client";
// UI is done. Buttons do nothing yet.

export function PatientPagination({ page = 1, totalPages = 1 }: { page?: number; totalPages?: number }) {
  // TODO(FE-5 pagination): wire Prev/Next to change the `page` (URL param ?page=) and
  //   disable Prev on the first page and Next on the last.
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-500">Page {page} of {totalPages}</span>
      <div className="flex gap-2">
        <button className="rounded-md border bg-white px-3 py-1.5 disabled:opacity-50">Prev</button>
        <button className="rounded-md border bg-white px-3 py-1.5 disabled:opacity-50">Next</button>
      </div>
    </div>
  );
}
