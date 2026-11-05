"use client";
// UI is done. The inputs are NOT connected to anything yet.

export function PatientFilters() {
  // TODO(FE-1 search): store the search text in state and filter the list as you type.
  // TODO(FE-2 debounce): wait ~300ms after typing stops before filtering / fetching.
  // TODO(FE-3 url state): move search/status/sort into the URL (?q=&status=&sort=) using
  //   useSearchParams + useRouter, so refresh and back-button keep the filters.
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <input
        type="search"
        placeholder="Search by name or email..."
        className="h-10 flex-1 rounded-md border bg-white px-3 text-sm"
      />
      <select className="h-10 rounded-md border bg-white px-3 text-sm" defaultValue="">
        <option value="">All statuses</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="inactive">Inactive</option>
      </select>
      <select className="h-10 rounded-md border bg-white px-3 text-sm" defaultValue="newest">
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="name">Name A-Z</option>
      </select>
    </div>
  );
}
