// TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteHandler, updateHandler }) {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} updateHandler={updateHandler} />
            ))}
        </div>
    );
}

export default TodoList;
