"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";

export default function TodoMain() {
  const [todoItems, setToDoItems] = useState([]);
  const [companyName, setCompanyName] = useState<string | null>(null);

  const displayToDo = () => {};
  const changeStateOfItem = () => {};

  const test = async () => {};

  //todoitem structure:
  /*
  {
    id:
    priority: 1~99  
    taskHeader: text
    taskText: text
    taskState:
      Uncompleted, coompleted, partial-completed, canceled?
    subTasks: []
  }
  */

  return <div></div>;
}
