
import { useState } from "react";
import { TodoList } from "../todoList";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../todo";
import { EditTodoList } from "../editTodoForm";
import styles from "./styles.css";

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    }

    const filteredTodos = todos.filter((todo)=>{
        if(filter === "done") return todo.completed;
        if(filter === "undone") return !todo.completed;
        return true;
    });

    return (
        <div className="wrapper">
            <h1>Bucket List!</h1>
            <div className="btn-group">
                <button type="submit" onClick={()=> handleFilterChange("done")}>Done</button>
                <button type="submit" onClick={()=> handleFilterChange("all")}>All</button>
                <button type="submit" onClick={()=> handleFilterChange("undone")}>Undone</button>
            </div>
            <TodoList addTodo={addTodo} />
            {filteredTodos.map((todo, index) => (
                todo.isEditing ? (<EditTodoList editTodo={editTask} task={todo}/>) :
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            ))}

        </div>
    );
}