import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
const Todo = ({ title }: { title: string }) => {
  return (
    <div className="grid grid-cols-[1fr,2fr] w-[500px] h-[80px] bg-blue-500 mt-3 mb-3">
      <div className=" flex  justify-center items-center">
        <IconButton
          aria-label="delete"
          className=" text-red-500 h-[50px] m-2"
          style={{ border: "2px solid red" }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          className=" text-white-500 h-[50px] m-2"
          style={{ border: "2px solid white" }}
        >
          <CheckIcon />
        </IconButton>
      </div>
      <div className=" flex items-center justify-end">
        {" "}
        <h1 className="mr-3">{title}</h1>
      </div>
    </div>
  );
};

export default Todo;
