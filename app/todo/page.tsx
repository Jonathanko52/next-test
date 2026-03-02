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
      style={{
        width: "200px",
        height: "40px",
        fontSize: "1.2em",
        margin: "1em",
        marginLeft: "2em",
      }}>
      {toDoItemList.length > 0 ? (
        toDoItemList.map((item, index) => <TaskItem key={index}></TaskItem>)
      ) : (
        // <div key={item.id}>
        //   {/* Added key prop for React performance */} <p>{item.id}</p>
        //   <p>{item.priority}</p>
        //   <p>{item.taskHeader}</p>
        //   <p>{item.taskText}</p>
        //   <p>{item.taskState}</p>
        //   <p>{item.subTasks}</p>
        //   <p>{item.taskrepeatability}</p>
        // </div>
        <div>No Items in todo</div>
      )}
    </div>
  );
}
