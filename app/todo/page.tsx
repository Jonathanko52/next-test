"use client";

import { useState, useEffect } from "react";
// import { Button } from "@/app/ui/button";
import { useGlobalState } from "@/app/context/StateContext";
import TaskItem from "./components/todoitem/page";

export default function TodoMain() {
  const { toDoItemList, setToDoItemList } = useGlobalState();
  const [newTaskHeader, setNewTaskHeader] = useState("");

  const createNewItem = () => {
    if (!newTaskHeader.trim()) return;
    setToDoItemList([
      ...toDoItemList,
      { id: crypto.randomUUID(), taskHeader: newTaskHeader },
    ]);
    setNewTaskHeader("");
  };

  const deleteItem = (idToRemove: string) => {
    setToDoItemList(
      toDoItemList.filter(
        (item: { id: string; [key: string]: unknown }) =>
          item.id !== idToRemove,
      ),
    );
  };

  const updateItemList = (id: string, itemObject: Record<string, unknown>) => {
    setToDoItemList(
      toDoItemList.map((item) =>
        item.id === id ? { ...item, ...itemObject } : item,
      ),
    );
  };

  const saveItemList = () => {
    localStorage.setItem("ToDoItemList", JSON.stringify(toDoItemList));
  };

  const retrieveItemList = () => {
    // try catch block added so if it only loads if saved.
    const saved = localStorage.getItem("ToDoItemList");
    if (saved) {
      try {
        setToDoItemList(JSON.parse(saved));
      } catch {}
    }
  };

  const printState = () => {
    console.log(toDoItemList);
  };

  // useEffect(() => {
  //   retrieveItemList();
  // }, [retrieveItemList]);

  useEffect(() => {
    const saved = localStorage.getItem("ToDoItemList");
    if (saved) {
      try {
        setToDoItemList(JSON.parse(saved));
      } catch {}
    }
  }, []);

  return (
    <div className="w-full flex flex-col p-2 text-base m-4 ml-8">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor="new-task-input" className="shrink-0 w-24">
          New Item Name:
        </label>
        <input
          id="new-task-input"
          type="text"
          value={newTaskHeader}
          onChange={(e) => {
            setNewTaskHeader(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && createNewItem()}
          className="flex-1 rounded px-2 py-1 text-black"
        />
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={createNewItem}>
          CREATE ITEM
        </button>
      </div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={saveItemList}>
        SAVE LIST
      </button>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={retrieveItemList}>
        LOAD LIST
      </button>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={printState}>
        Print state
      </button>
      {toDoItemList.length > 0 ? (
        toDoItemList.map((item: { id: string; [key: string]: unknown }) => (
          <TaskItem
            key={item.id}
            data={item}
            itemId={item.id}
            deleteItem={deleteItem}
            updateItemList={updateItemList}
          />
        ))
      ) : (
        <div>No Items in todo</div>
      )}
    </div>
  );
}
