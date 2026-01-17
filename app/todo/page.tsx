"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";

export default function TodoMain() {
  const [todoItems, setToDoItems] = useState([]);
  const [companyName, setCompanyName] = useState<string | null>(null);

  const test = async () => {};

  return <div></div>;
}
