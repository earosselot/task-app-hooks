import TasksHeader from "../TaskHeader/TasksHeader";
import TasksList from "../TaskList/TasksList";
import './MainApp.css'
import {useState} from "react"
import uniqid from 'uniqid'

const init_notes = [
    {id: uniqid(), text: 'note1'},
    {id: uniqid(), text: 'note2'},
    {id: uniqid(), text: 'note3'}
]

function MainApp() {
    const [notes, setNotes] = useState(init_notes);

    function handleAddNote(text) {
        const newNote = {
            id: uniqid(),
            text: text
        }
        const newNotesList = [...notes, newNote]
        setNotes(newNotesList)
    }

    function removeTask(noteId) {
        const filteredNotes = notes.filter(note => note.id !== noteId)
        setNotes(filteredNotes)
    }
    
    return (
        <div className="MainApp">
            <TasksHeader handleAddNote={handleAddNote} />
            <TasksList notes={notes} removeTask={removeTask} />
        </div>
    )
}

export default MainApp
