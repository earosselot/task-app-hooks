import TasksHeader from "../TaskHeader/TasksHeader";
import TasksList from "../TaskList/TasksList";
import Input from "../Input/Input";
import Button from "../Button/Button";
import './MainApp.css'
import {useState} from "react";

const init_notes = [
    {id: 1, text: 'note1'},
    {id: 2, text: 'note2'},
    {id: 3, text: 'note3'}
]

function MainApp() {
    const [notes, setNotes] = useState(init_notes);
    const [inputText, setInputText] = useState('');

    function handleInputChange(value) {
        setInputText(value)
    }

    function handleAddTask() {
        setNotes((prevNotes) => {
            return prevNotes.concat({
                id: prevNotes.lenght,
                text: inputText
            })
        })
    }

    return (
        <div className="MainApp">
            <TasksHeader>
                <Input value={inputText} onChange={handleInputChange}/>
                <Button onClick={handleAddTask} >Add</Button>
            </TasksHeader>
            <TasksList notes={notes}/>
        </div>
    )
}

export default MainApp
