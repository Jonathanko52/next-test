"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
export default function Page() {
  const [itemId, setItemId] = useState(crypto.randomUUID());
  const [priority, setPriority] = useState(0);
  const [taskHeader, setTaskHeader] = useState([]);
  const [taskText, setTaskText] = useState([]);
  const [taskState, setTaskState] = useState([]);
  const [subtasks, setSubtasks] = useState([]);
  const [repeatability, setRepeatability] = useState([]);
  const [editMode, setEditMode] = useState(false);

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

  const setterId = () => {
    //using crypto uuid
    const uuid = crypto.randomUUID();
    setItemId(uuid);
  };

  const setterPriority = (priority) => {
    // priority: 1~99
    setPriority(priority);
  };

  const setterHeader = (headerValue) => {
    //     taskHeader: text
    setTaskHeader(headerValue);
  };
  const setterText = (textValue) => {
    // taskText: text
    setTaskText(textValue);
  };
  const setterState = (taskStateValue) => {
    //Uncompleted, coompleted, partial-completed, canceled?
    setTaskState(taskStateValue);
  };
  const setterSubTasks = (subTaskValue) => {
    //     subTasks: []
    setSubtasks(subTaskValue);
  };
  const setterRepeatability = (repeatValue) => {
    // taskrepeatability:
    //  Oneoff,
    //  Rollover,
    //  Weekly: [0,1,2,3,4,5,6]
    setRepeatability(repeatValue);
  };

  const setterEditMode = () => {
    setEditMode(!editMode);
  };

  const editModeListener = () => {};

  return (
    <main className="flex min-h-screen flex-col p-6">
      (editMode ?
      <div
        className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"
        onClick={setterEditMode}>
        {taskHeader}
        {taskText}
      </div>
      :
      <div
        className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"
        onClick={setterEditMode}>
        EDIT MODE
        <text>{taskHeader}</text>
        <text>{taskText}</text>
      </div>
      )
    </main>
  );
}
