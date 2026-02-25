"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>
    </main>
  );
}
