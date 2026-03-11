"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
export default function Page() {
  const [itemId, setItemId] = useState(crypto.randomUUID());
  const [priority, setPriority] = useState(0);
  const [taskHeader, setTaskHeader] = useState("Task Header");
  const [taskText, setTaskText] = useState("Task Text");
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
    <main className="w-full flex min-h-screen flex-col p-6">
      {editMode ? (
        <div
          id={itemId}
          className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"
          onClick={setterEditMode}>
          Header: {taskHeader}
          <br></br>
          Text: {taskText}
          <br></br>
          Priority: {priority}
          <br></br>
          State: {taskState}
          <br></br>
          Subtasks: {subtasks}
          <br></br>
          Repeatability: {repeatability}
          <br></br>
        </div>
      ) : (
        <div
          id={itemId}
          className="flex flex-col gap-4 h-auto shrink-0 rounded-lg bg-blue-500 p-6 md:min-h-52 text-white"
          onClick={setterEditMode}>
          <div className="font-bold border-b border-blue-400 pb-2 mb-2">
            EDIT MODE ON: {taskHeader}
          </div>

          {/* Field Row: Text */}
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Text:</header>
            <input
              type="text"
              value={taskText}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>

          {/* Field Row: Priority */}
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Priority:</header>
            <input
              type="text"
              value={priority}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>

          {/* Field Row: State */}
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">State:</header>
            <input
              type="text"
              value={taskState}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>

          {/* Field Row: Subtasks */}
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Subtasks:</header>
            <input
              type="text"
              value={subtasks}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>

          {/* Field Row: Repeatability */}
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Repeatability:</header>
            <input
              type="text"
              value={repeatability}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>

          <button
            className="mt-4 text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            onClick={setterEditMode}>
            Edit mode off
          </button>
        </div>
      )}
    </main>
  );
}
