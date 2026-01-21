"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import TextboxWithButton from "./../textinput/page";
import Header from "./components/Header";
import { Button } from "@/app/ui/button";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [jobScraperOpen, setJobScraperOpen] = useState(false);
  const [buttonDiv, setButtonDiv] = useState(false);
  const [toDoItemList, setToDoItemList] = useState([
    {
      id: 1,
      priority: 1,
      taskHeader: "TASK HEADER",
      taskText: "TASK TEXT \n",
      taskState: "Uncompleted",
      subTasks: [],
      taskrepeatability: "Oneoff",
    },
  ]);

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
    setJobScraperOpen(false);
  };

  const toggleScraperSidebar = () => {
    setJobScraperOpen(!jobScraperOpen);
    setRightSidebarOpen(false);
  };

  const toggleButtonDiv = () = {

  }

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
            {children}
            {buttonDiv ? (
              <div>
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
              </div>
            ) : null}
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
