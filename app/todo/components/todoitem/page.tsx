"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
import { Dispatch, SetStateAction, useId } from "react";

interface Subtask {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface TaskItemProps {
  itemId: string;
  setItemId: Dispatch<SetStateAction<string>>;

  priority: number;
  setPriority: Dispatch<SetStateAction<number>>;

  taskHeader: string;
  setTaskHeader: Dispatch<SetStateAction<string>>;

  taskText: string;
  setTaskText: Dispatch<SetStateAction<string>>;

  taskState: string;
  setTaskState: Dispatch<SetStateAction<string>>;

  subtasks: Subtask[];
  setSubtasks: Dispatch<SetStateAction<Subtask[]>>;

  repeatability: number[];
  setRepeatability: Dispatch<SetStateAction<number[]>>;

  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

export default function Page() {
  const [itemId, setItemId] = useState(useId());
  const [priority, setPriority] = useState(0);
  const [taskHeader, setTaskHeader] = useState("Task Header");
  const [taskText, setTaskText] = useState("Task Text");
  const [taskState, setTaskState] = useState(0);
  const [subTasks, setSubtasks] = useState([]);
  const [repeatability, setRepeatability] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [editMode, setEditMode] = useState(true);

  const TASK_STATES = ["success", "error", "pending", "idle"];

  // Used for repeatability
  const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const iconMap = ["⭕", "✅", "❌", "⏳"];
  const handlerId = () => {
    //using crypto uuid
    const stableId = useId();
    setItemId(stableId);
  };

  const priorityHandler = (priority: number) => {
    // priority: 1~99
    setPriority(priority);
  };

  const handlerHeader = (headerValue: string) => {
    //     taskHeader: text
    setTaskHeader(headerValue);
  };

  const handlerText = (textValue: string) => {
    // taskText: text
    setTaskText(textValue);
  };

  const taskStateHandlerOutsideEdit = () => {
    let newTaskState = taskState;
    if (newTaskState >= 3) {
      newTaskState = 0;
    } else {
      newTaskState++;
    }
    setTaskState(newTaskState);
  };

  const taskStateHandler = (taskStateValue: string) => {
    setTaskState(taskStateValue);
  };

  const subTasksHandler = (subTaskValue: object[]) => {
    //     subTasks: []
    let subTasksCopy = subTasks.slice();
    subTasksCopy.push(subTaskValue);
    setSubtasks(subTasksCopy);
  };

  const repeatabilityHandler = (repeatKey: number) => {
    let repeatabilityCopy = repeatability.slice();
    if (repeatabilityCopy[repeatKey] == 0) {
      repeatabilityCopy[repeatKey] = 1;
    } else {
      repeatabilityCopy[repeatKey] = 0;
    }
    setRepeatability(repeatabilityCopy);
    console.log(repeatabilityCopy);
  };

  const handlerEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex flex-col p-1">
      {editMode ? (
        <div
          id={itemId}
          className="flex flex-col h-auto rounded-lg bg-blue-500 p-4  text-white">
          <div onClick={taskStateHandlerOutsideEdit}>{iconMap[taskState]}</div>
          <br></br>
          <div onClick={handlerEditMode}>
            <div className="font-bold border-b border-blue-400 pb-2">
              Header: {taskHeader}
            </div>
            <br></br>
            <div className="font-bold border-b border-blue-400 pb-2">
              Text: {taskText}
            </div>
          </div>
        </div>
      ) : (
        <div
          id={itemId}
          className="flex flex-col h-auto rounded-lg bg-blue-500 p-4  text-white">
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Text:</header>
            <input
              type="text"
              value={taskHeader}
              onChange={(e) => {
                setTaskHeader(e.target.value);
              }}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Text:</header>
            <input
              type="text"
              value={taskText}
              onChange={(e) => {
                setTaskText(e.target.value);
              }}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Priority:</header>
            <input
              type="text"
              value={priority}
              onChange={(e) => {
                priorityHandler(parseInt(e.target.value));
              }}
              className="flex-1 rounded px-2 py-1 text-black"></input>
          </div>

          {/* <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">State:</header>
            <select
              value={taskState}
              className="flex-1 rounded px-2 py-1 text-black"
              onChange={(e) => {
                taskStateHandler(e.target.value);
              }}>
              <option value="success">Success</option>
              <option value="error">Fail</option>
              <option value="pending">Onhold</option>
              <option value="idle">Ongoing</option>
            </select>
          </div> */}
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Subtasks:</header>
            <input
              type="text"
              value={subTasks}
              onChange={(e) => {
                subTasksHandler(e.target.value);
              }}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Repeatability:</header>
            {DAYS_OF_WEEK.map((cur, ind) => (
              <div key={ind} className="flex items-center gap-1">
                <label>{cur}</label>
                <input
                  type="checkbox"
                  name={cur}
                  value={cur}
                  key="key"
                  checked={repeatability[ind] == 1 ? true : false}
                  onChange={(e) => {
                    repeatabilityHandler(ind);
                  }}></input>
              </div>
            ))}
          </div>
          <button
            className="mt-4 text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            onClick={handlerEditMode}>
            Edit mode off
          </button>
        </div>
      )}
    </div>
  );
}
