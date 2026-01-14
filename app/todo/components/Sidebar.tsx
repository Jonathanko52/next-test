import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r p-4">
      <nav className="space-y-2">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/reports">Reports</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}
