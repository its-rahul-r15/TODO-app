import mongoose from 'mongoose';
import Todo from '../models/todoModel.js'

//get all todos

export const getTodos = async (req, res)=> {
    try {
        const todos = await Todo.find();
        res.send(todos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//create todo

export const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo({text: req.body.text})
        const saveTodo = await newTodo.save();
        res.status(200).json(saveTodo)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


//update Todo

export const updateTodo = async (req, res) => {
    try {
        const update = await Todo.findByIdAndUpdate(req.params.id, {completed: req.body.completed}, {new: true})
         res.json(update);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// delete todo

export const deleteTodo = async (req,res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.json({ message: "Todo deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}