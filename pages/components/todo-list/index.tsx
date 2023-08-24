import React from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";
type TodoItem = {
  id: number;
  title: string;
};

const TodoList: React.FC<{
  todos: TodoItem[];
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}> = ({ todos, title, setTitle }) => {
  return (
    <div
      className="h-auto w-[600px] grid justify-center text-center"
      style={{ backgroundColor: "#03a9f4" }}
    >
      <div>
        <h1 className="m-5">TodoList </h1>
      </div>
      <div style={{ backgroundColor: "#fff" }}>
        <TodoForm title={title} setTitle={setTitle} />
      </div>
      {todos.map((todo) => {
        return (
          <>
            <Todo title={todo.title} />
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
