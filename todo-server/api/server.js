const express = require('express')
const cors = require('cors');
const helmet = require('helmet')

const db = require('./dbConfig')
server = express()

server.use(cors())
server.use(helmet())
server.use(express.json())

server.get('/', (req, res)=>res.send('welcome to server!'))

server.get('/todos', async (req, res)=>{
    // Get all todos
    try{
        const todos = await db('todos')
        res.json(todos)
    }catch(err){
        console.log(err)
    }
});

server.get('/todos/:id', async (req, res)=>{
    // Get all todos
    const {id} = req.params

    try{
        const todo = await db('todos').where({id})
        todo.length===0 ? res.status(404).send({message: 'todo not found'}) : res.json(todo)
        
    }catch(err){
        console.log(err)
    }
});

server.post('/todos',async (req, res)=>{
    // post a todo
    const {message} = req.body
    
    if(!message){
        return res.status(400).send({message: 'you must include a message in request'})
    }
    try{
        await db('todos').insert({message})
        res.status(201).json({message: 'todo successfully stored!'})
    }catch(err){
        console.log(err)
    }

});


server.put('/todos/:id', async (req, res)=>{
    // update a todo
    const {id} = req.params
    const { message } = req.body

    if(!message){
        return res.status(400).send({message: 'you must include a message in request'})
    }

    try{
        await db('todos').where({id}).update({message})
        res.status(200).send({message: 'update successful!'})

    }catch(err){
        console.log(err)
    }

});


server.delete('/todos/:id', async (req, res)=>{
    // delete a todo
    const {id} = req.params
    
    try{
        await db('todos').where({id}).del()
        res.status(200).send({message: 'deleted successful!'})

    }catch(err){
        console.log(err)
    }
})


module.exports = server