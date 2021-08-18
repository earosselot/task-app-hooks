import './Note.css'
import { BiTrash } from 'react-icons/all'

function Note({ note, removeTask, toggleComplete }) {

    return (
        <div className="Note">
            <div>
                <input 
                    type="checkbox" 
                    checked={note.isComplete}
                    onChange={() => toggleComplete(note.id)} 
                />
                <span className={note.isComplete ? 'complete' : ''}>{note.text}</span>
            </div>
            <button className="rm-btn" onClick={() => removeTask(note.id)} >
                <BiTrash size="1.5em" />
            </button>
        </div>
    )
}

export default Note
