import "./TasksHeader.css";
import { useState } from "react";
import Input from "./../Input/Input";
import Button from "./../Button/Button";

function TasksHeader({ handleAddNote }) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(value) {
    setInputText(value);
  }

  return (
    <header className="TodoHeader">
      <Input
        value={inputText}
        onChange={handleInputChange}
        handleAddNote={handleAddNote}
      />
      <Button handleAddNote={handleAddNote} inputText={inputText}>
        Add
      </Button>
    </header>
  );
}

export default TasksHeader;
