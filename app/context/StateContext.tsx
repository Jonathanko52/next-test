"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const StateContext = createContext<any>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
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
  return (
    <StateContext.Provider value={{ toDoItemList, setToDoItemList }}>
      {children}
    </StateContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(StateContext);
}
