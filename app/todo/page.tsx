"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";

export default function TodoMain() {
  const { setIsActive, isActive } = useGlobalState();
  console.log("TEST", isActive);
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
  let items = isActive

  return (<div>
    {items.length > 0 ? (
      items.map((item) =>{
        <div>
            (item.id}
            (item.priority}
            (item.taskHeader}
            (item.taskText}
            (item.taskState}
            (item.subTasks}
            (item.taskrepeatability}
        </div>}
    )}

    ): null}
  
  
  
  
  </div>);
}
