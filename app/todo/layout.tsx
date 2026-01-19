"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Header from "./components/Header";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="grid min-h-screen grid-cols-[240px_1fr_240px] grid-rows-[auto_1fr]">
          <div className="col-start-2 row-start-1">
            <Header />
          </div>
          <div className="col-start-1 row-span-2">
            <Sidebar />
          </div>
          <main className="col-start-2 row-start-2 p-4">{children}</main>
          <button onClick={toggleRightSidebar}>RightSidebar</button>
          {rightSidebarOpen ? (
            <div className="col-start-3 row-span-2">
              <RightSidebar />
            </div>
          ) : null}
        </div>
      </body>
    </html>
  );
}
