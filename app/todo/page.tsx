"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";

export default function TodoMain() {
  const { toDoItemList, setToDoItemList } = useGlobalState();
  console.log("TEST", toDoItemList);
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
  const items = [];

  return (
    <div
      style={{
        width: "200px",
        height: "40px",
        fontSize: "1.2em",
        margin: "1em",
        marginLeft: "2em",
      }}>
      {items.length > 0 ? (
        <div>Items Present in todo</div>
      ) : (
        <div>No Items in todo</div>
      )}
    </div>
  );
}
