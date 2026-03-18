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
  const [repeatability, setRepeatability] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [editMode, setEditMode] = useState(true);

  const handlerId = () => {
    //using crypto uuid
    const uuid = crypto.randomUUID();
    setItemId(uuid);
  };

  const handlerPriority = (priority) => {
    // priority: 1~99
    setPriority(priority);
  };

  const handlerHeader = (headerValue) => {
    //     taskHeader: text
    setTaskHeader(headerValue);
  };
  const handlerText = (textValue) => {
    // taskText: text
    setTaskText(textValue);
  };
  const handlerState = (taskStateValue) => {
    //Uncompleted, coompleted, partial-completed, canceled?
    setTaskState(taskStateValue);
  };
  const handlerSubTasks = (subTaskValue) => {
    //     subTasks: []
    setSubtasks(subTaskValue);
  };
  const repeatabilityHandler = (repeatValue, repeatKey) => {
    console.log(repeatValue, repeatKey);
    repeatabilityCopy = repeatability.slice();
    if (repeatabilityCopy[repeatabilityKey] == 0) {
      repeatabilityCopy[repeatabilityKey] = 1;
    } else {
      repeatabilityCopy[repeatabilityKey] = 0;
    }

    setRepeatability(repeatabilityCopy);
  };

  const handlerEditMode = () => {
    setEditMode(!editMode);
  };

  const editModeListener = () => {};

  return (
    <div className="flex flex-col p-1">
      {editMode ? (
        <div
          id={itemId}
          className="flex flex-col h-auto rounded-lg bg-blue-500 p-4  text-white"
          onClick={handlerEditMode}>
          <div className="font-bold border-b border-blue-400 pb-2">
            Header: {taskHeader}
          </div>
          <br></br>
          <div className="font-bold border-b border-blue-400 pb-2">
            Text: {taskText}
          </div>
          <br></br>
          <div className="font-bold border-b border-blue-400 pb-2">
            Priority: {priority}
          </div>
          <br></br>
          <div className="font-bold border-b border-blue-400 pb-2">
            State: {taskState}
          </div>
          <br></br>
          <div className="font-bold border-b border-blue-400 pb-2">
            Subtasks: {subtasks}
          </div>
          <br></br>
          <div className="font-bold border-b border-blue-400 pb-2">
            Repeatability: {repeatability}
          </div>
          <br></br>
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
                setPriority(parseInt(e.target.value));
              }}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">State:</header>
            <input
              type="text"
              value={taskState}
              // onChange={(e) => {
              //   setTaskState(e.target.value);
              // }}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Subtasks:</header>
            <input
              type="text"
              value={subtasks}
              // onChange={(e) => {
              //   setSubTasks(e.target.value);
              // }}
              className="flex-1 rounded px-2 py-1 text-black"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <header className="shrink-0 w-24">Repeatability:</header>

            <div key={"0"} className="flex items-center gap-1">
              <label>Sunday</label>
              <input
                type="checkbox"
                name="Sunday"
                value="Sunday"
                key="key"
                onChange={(e) => {
                  repeatabilityHandler(e.target.value, 0);
                }}></input>
            </div>
            <div key={"1"} className="flex items-center gap-1">
              <label>Monday</label>
              <input
                type="checkbox"
                name="Monday"
                value="Monday"
                key="key"
                onChange={(e) => {
                  repeatabilityHandler(e.target.value, 1);
                }}></input>
            </div>
            <div key={"2"} className="flex items-center gap-1">
              <label>Tuesday</label>
              <input
                type="checkbox"
                name="Tuesday"
                value="Tuesday"
                key="key"
                onChange={(e) => {
                  repeatabilityHandler(e.target.value, 2);
                }}></input>
            </div>
            <div key={"3"} className="flex items-center gap-1">
              <label>Wednesday</label>
              <input
                type="checkbox"
                name="Wednesday"
                value="Wednesday"
                key="key"
                onChange={(e) => {
                  repeatabilityHandler(e.target.value, 3);
                }}></input>
            </div>
            <div key={"4"} className="flex items-center gap-1">
              <label>Thursday</label>
              <input
                type="checkbox"
                name="Thursday"
                value="Thursday"
                key="key"
                onChange={(e) => {
                  repeatabilityHandler(e.target.value, 4);
                }}></input>
            </div>
            <div key={"5"} className="flex items-center gap-1">
              <label>Friday</label>
              <input
                type="checkbox"
                name="Friday"
                value="Friday"
                key="key"
                onChange={(e) => {
                  repeatabilityHandler(e.target.value, 5);
                }}></input>
            </div>
            <div key={"6"} className="flex items-center gap-1">
              <label>Saturday</label>
              <input
                type="checkbox"
                name="Saturday"
                value="Saturday"
                key="key"
                onChange={(e) => {
                  repeatabilityHandler(e.target.value, 6);
                }}></input>
            </div>
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
