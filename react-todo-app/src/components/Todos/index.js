import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import axios from 'axios';


function Todos() {
    const [todoList, setTodoList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/todos', [])
        .then(res=>{
            console.log(res)
            setTodoList(res.data)
        }).catch(err=>console.log(err))
    }, [])

    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:5000/todos/${id}`)
        .then(res=>{
            console.log(res)
            let newTodos = todoList.filter(each => each.id !== id)
            setTodoList(newTodos)
        }).catch(err=>console.log(err))
    }

    const updateHandler = (updatedTodo)=>{

        axios.put(`http://localhost:5000/todos/${updatedTodo.id}`, updatedTodo)
        .then(res=>{
            console.log(res)
            let updatedList = todoList.map(todo=>{
                if(todo.id === updatedTodo.id){
                    return {
                        ...todo,
                        message: updatedTodo.message
                    }
                }else{
                    return todo
                }
            })
            setTodoList(updatedList)
        }).catch(err=>console.log(err))
    }

    return <div>
        <TodoForm todoList={todoList} setTodoList={setTodoList}/>
        <TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
    </div>
}

export default Todos