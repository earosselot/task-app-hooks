import Note from './../Note/Note'
import './TasksList.css'

function TasksList({notes}) {

    return (
        <section className="TodoBody">
            {notes.map(note => <Note key={note.id} text={note.text}/>)}
        </section>
    )
}

export default TasksList