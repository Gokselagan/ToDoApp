import { useState } from "react";
import style from "./style.css";

export const TodoList = () => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(value);
        
    }
    return(
    <form className="bucket_list" onSubmit={handleSubmit}>
        <input type="text" className="blInput" placeholder="text your dreams" onChange={(e)=>setValue(e.target.value)}/>
        <button type="submit" className="blBtn">Add Dream</button>
    </form>
    )
}