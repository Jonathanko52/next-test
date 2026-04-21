"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
import TaskItem from "./components/todoitem/page";

export default function TodoMain() {
  const { toDoItemList, setToDoItemList } = useGlobalState();
  const [newTaskHeader, setNewTaskHeader] = useState("");
  console.log(toDoItemList, "LIST");

  const createNewItem = () => {
    setToDoItemList([...toDoItemList, { taskHeader: newTaskHeader }]);
    setNewTaskHeader("");
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

  const printState = () => {
    toDoItemList.forEach((cur) => {
      console.log(cur);
    });
  };
  useEffect(() => {
    // retrieveItemList();
  }, []);
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
          value={newTaskHeader}
          onChange={(e) => {
            setNewTaskHeader(e.target.value);
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={printState}>
        Print state
      </button>
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
