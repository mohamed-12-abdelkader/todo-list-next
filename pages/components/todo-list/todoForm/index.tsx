import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
type TodoItem = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};
const TodoForm: React.FC<TodoItem> = ({ title, setTitle }) => {
  return (
    <form className="flex w-[500px]">
      <TextField
        id="outlined-basic"
        label="Add Todo"
        variant="outlined"
        className="w-[90%] m-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        className="m-2 "
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          console.log(title);
        }}
      >
        Send
      </Button>
    </form>
  );
};

export default TodoForm;
