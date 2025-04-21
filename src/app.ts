import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();


app.use(express.json());

interface Todo {
  id: number;
  content: any;
  status: string;
}

const todos: Todo[] = [];

let id = 1;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create
app.post("/api/todos", (req: Request, res: Response) => {
  const todo: Todo = {
    "id": id,
    "content": req.body["content"],
    "status": "todo"
  };

  todos.push(todo);
  id += 1;

  res.status(200).send("Todo added successfully");
});


// Read
app.get("/api/todos", (req: Request, res: Response) => {
  res.send(JSON.stringify(todos));
});

app.get("/api/todos/:id", (req: Request, res: Response) => {
  const id = req.params["id"];

  for (let i = 0; i < todos.length; i++) {
    if (todos[i]["id"].toString() == id) {
      res.status(200).send(todos[i]);
    }
  }
  // res.send("no todo with that id found");
});

// Update
app.put("/api/todos/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const updatedContent = { ...req.body };

  for (let i = 0; i < todos.length; i++) {
    if (todos[i]["id"].toString() == id) {
      todos[i] = { ...todos[i], ...updatedContent };
      console.log(todos[i]);
    }
  }

  res.send(`Todo with id ${id} successfully updated`);
});

// Delete
app.delete("/api/todos/:id", (req: Request, res: Response) => {
  const id = req.params["id"];
  todos.filter((todo) => todo["id"].toString() != id);

  res.send(`Todo with id ${id} successfully deleted`);
});


app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});