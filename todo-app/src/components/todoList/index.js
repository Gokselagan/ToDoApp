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
        <>
            <div className="btn-group">
                <button type="submit">Done</button>
                <button type="submit">All</button>
                <button type="submit">Undone</button>
            </div>
            <form className="bucket-list" onSubmit={handleSubmit}>

                <input type="text" className="blInput" placeholder="text your dreams" value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="blBtn">Add Dream</button>
            </form>
        </>
    )
}