import styles from "./styles.css";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className="todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
            <div className="icon">
                <i class="fa-regular fa-pen-to-square" onClick={()=>editTodo(task.id)}></i>
                <i class="fa-solid fa-trash" onClick={()=>deleteTodo(task.id)}></i>
            </div>
        </div>
    )
}