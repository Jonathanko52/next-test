"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
import TaskItem from "./components/todoitem/page";

export default function TodoMain() {
  const { toDoItemList, setToDoItemList } = useGlobalState();
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

  return (
    <div
      className="w-full flex min-h-screen flex-col p-6"
      style={{
        fontSize: "1.2em",
        margin: "1em",
        marginLeft: "2em",
      }}>
      {toDoItemList.length > 0 ? (
        toDoItemList.map((item, index) => <TaskItem key={index}></TaskItem>)
      ) : (
        <div>No Items in todo</div>
      )}
    </div>
  );
}
