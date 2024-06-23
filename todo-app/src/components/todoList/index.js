import { useState } from "react";
import styles from "./style.css";

export const TodoList = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);

        setValue("");

    }
    return (
        <form className="bucket-list" onSubmit={handleSubmit}>

            <input type="text" placeholder="text your dreams" value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit" >Add Dream</button>
        </form>
    )
}