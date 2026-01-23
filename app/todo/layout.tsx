"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import TextboxWithButton from "./../textinput/page";
import Header from "./components/Header";
import { Button } from "@/app/ui/button";
import { useState } from "react";
import { StateProvider } from "@/app/context/StateContext";
import { useGlobalState } from "@/app/context/StateContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [jobScraperOpen, setJobScraperOpen] = useState(false);
  const [buttonDiv, setButtonDiv] = useState(true);
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
    if (rightSidebarOpen) {
      setButtonDiv(true);
      setRightSidebarOpen(false);
      setJobScraperOpen(true);
    } else {
      setButtonDiv(false);
      setRightSidebarOpen(true);
      setJobScraperOpen(false);
    }
  };

  const toggleScraperSidebar = () => {
    if (jobScraperOpen) {
      setButtonDiv(true);
      setRightSidebarOpen(true);
      setJobScraperOpen(false);
    } else {
      setButtonDiv(false);
      setRightSidebarOpen(false);
      setJobScraperOpen(true);
    }
  };

  const toggleButtonDiv = () => {
    if (buttonDiv) {
      setButtonDiv(false);
      setRightSidebarOpen(true);
      setJobScraperOpen(true);
    } else {
      setButtonDiv(true);
      setRightSidebarOpen(false);
      setJobScraperOpen(false);
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StateProvider>
          <div className="grid min-h-screen grid-cols-[240px_1fr_240px] grid-rows-[auto_1fr]">
            <div className="col-start-2 row-start-1">
              <Header />
            </div>
            <div className="col-start-1 row-span-2">
              <Sidebar />
            </div>
            <main className="col-start-2 row-start-2 p-4">{children}</main>
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
            {jobScraperOpen ? (
              <div className="col-start-3 row-span-2">
                <TextboxWithButton />{" "}
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
            {rightSidebarOpen ? (
              <div className="col-start-3 row-span-2">
                <RightSidebar />{" "}
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
          </div>
        </StateProvider>
      </body>
    </html>
  );
}
