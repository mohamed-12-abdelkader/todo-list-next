import React, { useState } from "react";
import TodoList from "./components/todo-list";

// index.tsx
type TodoItem = {
  id: number;
  title: string;
};

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: Math.random(), title: "hjglkh" },
    { id: Math.random(), title: "hjglkh" },
    { id: Math.random(), title: "hjglk h" },
  ]);
  const [title, setTitle] = useState("");
  return (
    <div className="flex items-center h-[100vh]">
      <div>
        <TodoList todos={todos} title={title} setTitle={setTitle} />
      </div>
    </div>
  );
}
