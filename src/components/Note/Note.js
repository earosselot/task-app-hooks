import './Note.css'
import { BiTrash } from 'react-icons/all'

function Note({ text }) {

    return (
            <div className="Note">
                <span>{text}</span>
                <button className="rm-btn"><BiTrash size="1.5em" /></button>
            </div>
        )
}

export default Note