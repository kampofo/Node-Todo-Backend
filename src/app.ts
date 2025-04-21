import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";


// import routes
import todoRoutes from "./routes/todo.routes";

dotenv.config();

const port = process.env.PORT || 3000;
const app: Express = express();


// app middlewear
app.use(express.json());

// Routing middleware
app.use("/api/todos", todoRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});