import Note from './../Note/Note'
import './TasksList.css'

function TasksList({notes, removeTask}) {

    return (
        <section className="TodoBody">
            {notes.map(note => <Note key={note.id} note={note} removeTask={removeTask} />)}
        </section>
    )
}

export default TasksList
