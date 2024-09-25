// TodoForm.js
import axios from "axios";
import React, { useState } from "react";

function TodoForm({ setTodoList, todoList }) {
    const initialState = {
        id: '',
        message: ''
    };

    const [todo, setTodo] = useState(initialState);

    const handleChange = (e) => {
        setTodo({ id: Date.now(), message: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([todo, ...todoList]);
        axios.post('http://localhost:5000/todos', todo)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        setTodo(initialState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                value={todo.message}
                placeholder="Enter your todo item"
                onChange={handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;
