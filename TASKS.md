# Practice: Clinic Patient Portal

The UI is built. The behavior is yours to write. Search the code for `TODO(FE-` and `TODO(BE-` to find each spot.

```bash
grep -rn "TODO(FE-" app components
grep -rn "TODO(BE-" server trpc
```

Run `npm run dev`, then open `/patients`, `/patients/new` and `/patients/1`. Everything shows fake data from `lib/mock/patients.ts` until you replace it.

## Where things live
| What | File |
|---|---|
| Patients list page | `app/(portal)/patients/page.tsx` |
| Search/filter/sort bar | `components/patients/patient-filters.tsx` |
| Table, pagination, skeleton | `components/patients/patient-table.tsx`, `patient-pagination.tsx`, `patient-table-skeleton.tsx` |
| Create/edit form | `components/patients/patient-form.tsx` |
| Form schema | `app/(portal)/patients/schema/patient.schema.ts` |
| Detail page | `app/(portal)/patients/[id]/page.tsx` |
| tRPC router, then service, then repository | `trpc/routers/patient.ts`, `server/patient/patient.service.ts`, `patient.repository.ts` |

## Suggested order

### Round 1: Frontend only (use the mock data)
| # | Task | You practice |
|---|---|---|
| FE-1 | Search input filters the list as you type | `useState`, controlled inputs, derived data, `filter` |
| FE-4 | Empty state when nothing matches | conditional rendering |
| FE-2 | Debounce the search (300ms) | `useEffect` cleanup, custom `useDebounce` hook |
| FE-3 | Keep search, status and sort in the URL | `useSearchParams`, `useRouter`, `usePathname`, client vs server components |
| FE-5 | Pagination (Prev/Next, disabled states) | state vs URL state |
| FE-9 | Medications as a form array: add, remove, per-row errors | `useFieldArray`, zod `array`, `register("medications.0.name")` |
| FE-10 | Submit shows loading, success and error feedback | async handlers, `isSubmitting` |

### Round 2: Backend (do these in order)
| # | Task | You practice |
|---|---|---|
| BE-1 | Add `Patient` and `Medication` models to `prisma/schema.prisma`, then run `npx prisma migrate dev` | Prisma modeling, 1-to-many relation |
| BE-2 to 7 | Implement the repository | Prisma `findMany`, `where`/`contains`/`mode: "insensitive"`, `skip`/`take`, `count`, nested writes, transactions |
| BE-8 to 10 | Service rules: clamp page size, NOT_FOUND, duplicate email, DOB not in the future | business-logic layer, `TRPCError` |
| BE-11 | Share one zod schema between form and router | DRY validation |

### Round 3: Connect FE to BE
| # | Task | You practice |
|---|---|---|
| FE-6 | Fetch the patients through tRPC and delete `MOCK_PATIENTS` | server component + prefetch, or `useQuery`; query keys |
| FE-7 | `loading.tsx` or `<Suspense>` with the skeleton | streaming, loading UI |
| FE-8 | `error.tsx` with a retry button | error boundaries |
| FE-10 | Wire the form to `patient.create` (`useMutation`) and invalidate the list | mutations, cache invalidation, `router.push` |
| FE-11 | Detail page fetches by `id`, with `notFound()` and `not-found.tsx` | dynamic routes (`params` is a Promise in this Next version) |
| FE-12 | `generateMetadata` for the page title | Next metadata API |
| FE-13 | Edit page reuses `<PatientForm defaultValues>` | form reuse, `reset` |
| FE-14 | Delete with confirm dialog, then redirect | mutations, UX |

### Round 4: Stretch (common interview extras)
- Optimistic delete with `useOptimistic` or the React Query `onMutate` pattern.
- Protect `/patients/*`: redirect to `/login` if there is no session (`proxy.ts`, or `auth.api.getSession` in the layout).
- Show the logged-in user and a sign-out button in `app/(portal)/layout.tsx`.
- Write one test for the debounce hook, or for the service's duplicate-email rule.
- Make the table responsive (cards on mobile) and keyboard accessible (labels, `aria-*`).

## Interview concepts to be able to explain out loud
- Server Components vs Client Components: when does `"use client"` become necessary?
- Controlled vs uncontrolled inputs, and why `react-hook-form` uses refs.
- Why `key` matters in lists, and why not to use the index when items can be reordered.
- `useEffect` dependency array and cleanup.
- `useMemo` / `useCallback`: when they help, and when they're noise.
- Where state should live: component, URL, server cache, or global.
- `fetch` caching and revalidation in Next, and `revalidatePath` after a mutation.
- Why the three layers (router, service, repository) exist.

## Tips
- One task at a time. Make it work, then commit.
- Try without AI first. If you're stuck for 10+ minutes, ask me for a hint, not the solution.
- When a task is done, you can ask me to review your code.
