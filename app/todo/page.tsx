"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";

export default function TodoMain() {
  const [todoItems, setToDoItems] = useState([]);
  const [companyName, setCompanyName] = useState<string | null>(null);

  const displayToDo = () => {};
  const changeStateOfItem = () => {};
  const submitToDoList = () => {};

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
    taskrepeatability:
      Oneoff,
      Rollover,
      Weekly: [0,1,2,3,4,5,6]
  }
  */

  return <div></div>;
}
