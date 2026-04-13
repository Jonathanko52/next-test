"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
import TaskItem from "./components/todoitem/page";

export default function TodoMain() {
  const { toDoItemList, setToDoItemList } = useGlobalState();

  const createNewItem = (newHeader: string) => {
    let newItemList = toDoItemList.slice();
    newItemList.push(<TaskItem taskHeader={newHeader}></TaskItem>);
    setToDoItemList(newItemList);
  };
  const deleteItem = (indexToRemove: number) => {
    let newItemList = toDoItemList.toSpliced(indexToRemove, 1);
    setToDoItemList(newItemList);
  };

  const saveItemList = () => {
    localStorage.setItem("ToDoItemList", JSON.stringify(toDoItemList));
  };

  const retrieveItemList = () => {
    const saved = localStorage.getItem("ToDoItemList");
    if (saved) {
      setToDoItemList(JSON.parse(saved));
    }
  };
  // useEffect(() => {
  //   const saved = localStorage.getItem("app_settings");
  //   if (saved) {
  //     setData(JSON.parse(saved));
  //   }
  // }, []);
  return (
    <div
      className="w-full flex flex-col p-2"
      style={{
        fontSize: "1em",
        margin: "1em",
        marginLeft: "2em",
      }}>
      <div className="flex items-center justify-between gap-4">
        <header className="shrink-0 w-24">New Item Name:</header>
        <input
          type="text"
          // value={subTasks}
          onChange={(e) => {
            // subTasksHandler(e.target.value);
          }}
          className="flex-1 rounded px-2 py-1 text-black"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={createNewItem}>
          CREATE ITEM
        </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={saveItemList}>
        SAVE LIST
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={retrieveItemList}>
        LOAD LIST
      </button>
      saveItemList
      {toDoItemList.length > 0 ? (
        toDoItemList.map((item, index) => (
          <TaskItem
            key={index}
            data={item}
            deleteIndex={index}
            deleteItem={deleteItem}></TaskItem>
        ))
      ) : (
        <div>No Items in todo</div>
      )}
    </div>
  );
}
