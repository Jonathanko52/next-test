import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="grid min-h-screen grid-cols-[240px_1fr_240px] grid-rows-[auto_1fr]">
          {/* Header (center only) */}
          <div className="col-start-2 row-start-1">
            <Header />
          </div>

          {/* Left sidebar */}
          <div className="col-start-1 row-span-2">
            <Sidebar />
          </div>

          {/* Page content */}
          <main className="col-start-2 row-start-2 p-4">{children}</main>

          {/* Right sidebar */}
          <div className="col-start-3 row-span-2">
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
