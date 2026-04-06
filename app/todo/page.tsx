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
  const deleteItem = () => {};

  // localStorage.setItem('user_profile', JSON.stringify(user));

  // useEffect(() => {
  //   const saved = localStorage.getItem('app_settings');
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={createNewItem}>
        CREATE ITEM
      </button>
      {toDoItemList.length > 0 ? (
        toDoItemList.map((item, index) => (
          <TaskItem
            key={index}
            deleteIndex={index}
            deleteItem={deleteItem}></TaskItem>
        ))
      ) : (
        <div>No Items in todo</div>
      )}
    </div>
  );
}
