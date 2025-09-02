import express from 'express'
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todoController.js';


const router = express.Router()

router.get("/", getTodos);       // GET all todos
router.post("/add", createTodo);    // POST new todo
router.put("/:id", updateTodo);  // PUT update todo
router.delete("/:id", deleteTodo); // DELETE todo
console.log("✅ Todo routes loaded");

export default router;