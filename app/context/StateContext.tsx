"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const StateContext = createContext<any>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <StateContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </StateContext.Provider>
  );
}

export function useGlobalState() {
  return useContext(StateContext);
}
