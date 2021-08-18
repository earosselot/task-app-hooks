import Note from './../Note/Note'
import './TasksList.css'

function TasksList({notes, removeTask, toggleComplete}) {

    return (
        <section className="TodoBody">
            {notes.map(note => <Note 
                                    key={note.id} 
                                    note={note} 
                                    removeTask={removeTask} 
                                    toggleComplete={toggleComplete}
                                    />
            )}
        </section>
    )
}

export default TasksList
