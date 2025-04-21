import { Router } from 'express';
import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controllers/todo.controller';



const router: Router = Router();

// Get all todos
router.get("/", getTodos);

// Get a single todo
router.get("/:id", getTodo);

// Add todo
router.post("/", addTodo);

// Update todo
router.put("/:id", updateTodo);

// Delete todo
router.delete("./id", deleteTodo);


export default router;