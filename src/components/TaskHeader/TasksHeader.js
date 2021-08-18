import './TasksHeader.css'

function TasksHeader({ children }) {
    return (
        <header className="TodoHeader">
            { children }
        </header>
    )
}

export default TasksHeader