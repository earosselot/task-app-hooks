import './TasksHeader.css'
import { useState } from 'react'
import Input from './../Input/Input'
import Button from './../Button/Button'

function TasksHeader(props) {
    const [inputText, setInputText] = useState('');

    function handleInputChange(value) {
        setInputText(value)
    }

    return (
        <header className="TodoHeader">
            <Input 
                value={inputText}
                onChange={handleInputChange}/>
            <Button 
                handleAddNote={props.handleAddNote} 
                inputText={inputText} >
                    Add
            </Button>
        </header>
    )
}

export default TasksHeader