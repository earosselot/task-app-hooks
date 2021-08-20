import TasksHeader from "../TaskHeader/TasksHeader";
import TasksList from "../TaskList/TasksList";
import TasksFooter from "../TasksFooter/TasksFooter";
import "./MainApp.css";
import { useState } from "react";
import uniqid from "uniqid";

const init_notes = [
  {
    id: uniqid(),
    text: "note1",
    isComplete: true,
  },
  {
    id: uniqid(),
    text: "note2",
    isComplete: true,
  },
  {
    id: uniqid(),
    text: "note3",
    isComplete: false,
  },
];

function MainApp() {
  const [notes, setNotes] = useState(init_notes);

  function handleAddNote(text) {
    if (text.length >= 3) {
      const newNote = {
        id: uniqid(),
        text: text,
        isComplete: false,
      };
      const newNotesList = [...notes, newNote];
      setNotes(newNotesList);
    }
  }

  function removeTask(noteId) {
    const filteredNotes = notes.filter((note) => note.id !== noteId);
    setNotes(filteredNotes);
  }

  function toggleComplete(noteId) {
    const task = notes.find((note) => note.id === noteId);
    task.isComplete = !task.isComplete;
    setNotes([...notes]);
  }

  return (
    <div className="MainApp">
      <TasksHeader handleAddNote={handleAddNote} />
      <TasksList
        notes={notes}
        removeTask={removeTask}
        toggleComplete={toggleComplete}
      />
      <TasksFooter notes={notes} />
    </div>
  );
}

export default MainApp;
