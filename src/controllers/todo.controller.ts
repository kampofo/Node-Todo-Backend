import { Request, Response } from "express";

// Get All Todos
const getTodos = async (req: Request, res: Response) => {

};

// Get single Todo
const getTodo = async (req: Request, res: Response) => {
  res.send(`get single todo at id: ${req.params.id}`);
};

// Add single todo
const addTodo = async (req: Request, res: Response) => {

};

// Update single todo
const updateTodo = async (req: Request, res: Response) => {

};

// Delete single todo
const deleteTodo = async (req: Request, res: Response) => {

};

export { addTodo, getTodos, getTodo, updateTodo, deleteTodo };