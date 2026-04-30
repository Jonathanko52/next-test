"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ToDoItem {
  id: number;
  priority: number;
  taskHeader: string;
  taskText: string;
  taskState: string; //"pending" | "completed" | "in-progress";
  subTasks: string[]; // Or another interface if subtasks are objects
  taskrepeatability: string;
}

const StateContext = createContext<any>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
  const [toDoItemList, setToDoItemList] = useState<ToDoItem[]>([
    // {
    //   id: 1,
    //   priority: 1,
    //   taskHeader: "TASK HEADER",
    //   taskText: "TASK TEXT \n",
    //   taskState: "Uncompleted",
    //   subTasks: [],
    //   taskrepeatability: "Oneoff",
    // },
  ]);
  return (
    <StateContext.Provider value={{ toDoItemList, setToDoItemList }}>
      {children}
    </StateContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(StateContext);
}
