"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
export default function Page() {
  const { itemId, setItemId } = useState([]);
  const { taskHeader, setTaskHeader } = useState([]);
  const { taskText, setTaskText } = useState([]);
  const { taskState, setTaskState } = useState([]);
  const { subtasks, setSubtasks } = useState([]);
  const { repeatability:, setRepeatability } = useState([]);


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


  const setterId = () => 
    {   
      const uuid = crypto.randomUUID();
      setItemId(uuid)
    }
  const setterHeader = (headerValue) => 
    { 
      setTaskHeader(headerValue)
    }
  const setterText = (textValue) => 
    { 
      setTaskText(textValue)
    }
  const setterState = (taskStateValue) => 
    { 
      setTaskState(taskStateValue)
    }
  const setterSubTasks = (subTaskValue) => 
    { 
      setSubtasks(subTaskValue)
    }
  const setterRepeatability = (repeatValue) => 
    { 
      setRepeatability(repeatValue)
    }

  

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>
    </main>
  );
}
