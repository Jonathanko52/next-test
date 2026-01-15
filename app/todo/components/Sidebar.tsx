import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r p-4">
      <nav className="space-y-2">
        <Link href="/dashboard">Goals</Link>
        <br></br>
        <Link href="/dashboard">Monthly Target</Link>
        <br></br>
        <Link href="/dashboard">Milestone</Link>
        <br></br>
      </nav>
    </aside>
  );
}
