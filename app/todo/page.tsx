"use client";

import { useState } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
import TaskItem from "./components/todoitem/page";

export default function TodoMain() {
  const { toDoItemList, setToDoItemList } = useGlobalState([]);

  const createNewItem = () => {
    let newItemList = toDoItemList.slice();
    newItemList.push(<TaskItem></TaskItem>);
    setToDoItemList(newItemList);
  };

  return (
    <div
      className="w-full flex min-h-screen flex-col p-6"
      style={{
        fontSize: "1.2em",
        margin: "1em",
        marginLeft: "2em",
      }}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={createNewItem}>
        CREATE ITEM
      </button>
      {toDoItemList.length > 0 ? (
        toDoItemList.map((item, index) => <TaskItem key={index}></TaskItem>)
      ) : (
        <div>No Items in todo</div>
      )}
    </div>
  );
}
