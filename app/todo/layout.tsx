"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import TextboxWithButton from "./../textinput/page";
import Header from "./components/Header";
import GoalsWindow from "./components/GoalsWindow";
import { Button } from "@/app/ui/button";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [jobScraperOpen, setJobScraperOpen] = useState(false);

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
    setJobScraperOpen(false);
  };

  const toggleScraperSidebar = () => {
    setJobScraperOpen(!jobScraperOpen);
    setRightSidebarOpen(false);
  };

  console.log("CHILDREN", children.props);

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
          <main className="col-start-2 row-start-2 p-4">
            <GoalsWindow></GoalsWindow>
            {children}
            <Button
              className="bg-success justify-center"
              style={{
                width: "200px",
                height: "40px",
                fontSize: "1.2em",
                margin: "1em",
                marginLeft: "2em",
              }}
              onClick={toggleRightSidebar}>
              RightSidebar
            </Button>
            <Button
              className="bg-success justify-center"
              style={{
                width: "200px",
                height: "40px",
                fontSize: "1.2em",
                margin: "1em",
                marginLeft: "2em",
              }}
              onClick={toggleScraperSidebar}>
              Job Scraper
            </Button>
          </main>

          {jobScraperOpen ? (
            <div className="col-start-3 row-span-2">
              <TextboxWithButton />
            </div>
          ) : null}
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
