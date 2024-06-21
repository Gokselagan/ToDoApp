import { useState } from "react";
import styles from "./styles.css";

export const EditTodoList = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
        
    }
    return(
    <form className="bucket_list" onSubmit={handleSubmit}>
        <input type="text" className="blInput" placeholder="update your dreams" value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit" className="blBtn">Update Dream</button>
    </form>
    )
}