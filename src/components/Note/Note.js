import './Note.css'
import { BiTrash } from 'react-icons/all'

function Note({ note, removeTask }) {

    return (
            <div className="Note">
                <span>{note.text}</span>
                <button className="rm-btn" onClick={() => removeTask(note.id)} >
                    <BiTrash size="1.5em" />
                </button>
            </div>
        )
}

export default Note
