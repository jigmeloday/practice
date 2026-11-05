import Link from "next/link";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link href="/patients" className="font-semibold text-teal-700">
            ClinicPortal
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/patients" className="hover:underline">Patients</Link>
            <Link href="/patients/new" className="hover:underline">New patient</Link>
            {/* TODO(FE): show the logged-in user's name + a Sign out button (authClient.useSession, authClient.signOut) */}
            <span className="text-slate-400">user here</span>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
    </div>
  );
}
