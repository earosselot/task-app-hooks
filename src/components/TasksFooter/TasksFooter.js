
function TasksFooter({ notes }) {
    const pendingTasks = notes.reduce((acc, note) => note.isComplete ? acc : acc + 1, 0)
    const text = setText(notes.length, pendingTasks)

    return <footer>{text}</footer>
}

export default TasksFooter

function setText(totalTasks, pendingTasks) {
    if (totalTasks === 0) {
        return 'There are no tasks.'
    } else if (pendingTasks === 0) {
        return 'No tasks to do !'
    } else {
        return `${pendingTasks} pending tasks out of ${totalTasks} to do.`
    }
}