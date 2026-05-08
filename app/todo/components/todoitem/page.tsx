"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Subtask {
  id: string;
  text: string;
  isCompleted: boolean;
}

// For Typescript
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
  setTaskState: Dispatch<SetStateAction<number>>;

  subtasks: Subtask[];
  setSubtasks: Dispatch<SetStateAction<string>>;

  repeatability: number[];
  setRepeatability: Dispatch<SetStateAction<number[]>>;

  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
}

export default function Page({
  deleteItem,
  itemId,
  data,
  updateItemList,
}: {
  deleteItem: (id: string) => void;
  itemId: string;
  data: any;
  updateItemList: (id: string, item: object) => void;
}) {
  const [priority, setPriority] = useState(0);
  const [taskHeader, setTaskHeader] = useState(data?.taskHeader ?? "");
  const [taskText, setTaskText] = useState("Task Text");
  const [taskState, setTaskState] = useState(0);
  const [subTasks, setSubtasks] = useState<string[]>([]);
  const [repeatability, setRepeatability] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [editMode, setEditMode] = useState(true);

  // Used for repeatability
  const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const iconMap = ["⭕", "✅", "❌", "⏳"];

  // Use effect converting props to state
  useEffect(() => {
    if (data?.taskHeader) {
      setTaskHeader(data.taskHeader);
    }
    if (data?.priority) {
      setPriority(data?.priority);
    }
    if (data?.taskHeader) {
      setTaskHeader(data?.taskHeader);
    }
    if (data?.taskText) {
      setTaskText(data.taskText);
    }
    if (data?.taskState) {
      setTaskState(data.taskState);
    }
    if (data?.subtasks) {
      setSubtasks(data.subtasks);
    }
    if (data?.repeatability) {
      setRepeatability(data.repeatability);
    }
    if (data?.editMode) {
      setEditMode(data.editMode);
    }
  }, []);

  // Handlers
  const priorityHandler = (priority: number) => {
    // priority: 1~99
    setPriority(priority);
  };

  const handlerHeader = (headerValue: string) => {
    //taskHeader: text
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

  const taskStateHandler = (taskStateValue: number) => {
    setTaskState(taskStateValue);
  };

  const subTasksHandler = (subTaskValue: string) => {
    // let subTasksCopy = subTasks.slice();
    // subTasksCopy.push(subTaskValue);
    // setSubtasks(subTasksCopy);
  };

  const repeatabilityHandler = (repeatKey: number) => {
    let repeatabilityCopy = repeatability.slice();
    if (repeatabilityCopy[repeatKey] == 0) {
      repeatabilityCopy[repeatKey] = 1;
    } else {
      repeatabilityCopy[repeatKey] = 0;
    }
    setRepeatability(repeatabilityCopy);
  };

  const handlerEditMode = (index) => {
    setEditMode(!editMode);
    updateItemList(index, {
      priority: priority,
      taskHeader: taskHeader,
      taskText: taskText,
      taskState: taskState,
      subTasks: subTasks,
      repeatability: repeatability,
      editMode: editMode,
    });
  };

  const printState = () => {
    console.log("HEADER:", taskHeader);
    console.log("TEXT:", taskText);
    console.log("STATE:", taskState);
    console.log("SUB:", subTasks);
    console.log("REPEATABILITY:", repeatability);
  };

  return (
    <div className="flex flex-col p-1">
      {editMode ? (
        <div
          id={itemId}
          className="flex flex-col h-auto rounded-lg bg-blue-500 p-4  text-white">
          <div onClick={taskStateHandlerOutsideEdit}>{iconMap[taskState]}</div>
          <br></br>
          <div
            onClick={() => {
              handlerEditMode(itemId);
            }}>
            <div className="font-bold border-b border-blue-400 pb-2">
              Header: {taskHeader}
            </div>
            <br></br>
            <div className="font-bold border-b border-blue-400 pb-2">
              Text: {taskText}
            </div>
          </div>
          <button
            className="mt-4 text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            onClick={() => deleteItem(itemId)}>
            Delete
          </button>
        </div>
      ) : (
        // EDIT MODE TEXT
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
            onClick={() => {
              handlerEditMode(itemId);
            }}>
            Edit mode off
          </button>
          <button
            className="mt-4 text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            onClick={() => deleteItem(itemId)}>
            Delete
          </button>
          <button
            className="mt-4 text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            onClick={() => printState()}>
            Print State
          </button>
        </div>
      )}
    </div>
  );
}
