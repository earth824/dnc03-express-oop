import express, { type Request, type Response } from 'express';
import { ErrorHandler } from './middlewares/error-handler.js';
import { TodoRouter } from './routes/todo.route.js';
import {
  MockTodoController,
  TodoController
} from './controllers/todo.controller.js';

class Server {
  private readonly app = express();

  constructor(private readonly todoRouter: TodoRouter) {
    this.app.use(express.json());

    this.configureRoute();
    this.configureError();
  }

  configureRoute() {
    this.app.use('/todos', this.todoRouter.register());
  }

  configureError() {
    const errorHandler = new ErrorHandler();
    this.app.use(errorHandler.handle());
  }

  listen(port: number): void {
    this.app.listen(port, (error) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }
      console.log(`server running on port: ${port}`);
    });
  }
}

// const test = {
//   getAll() {
//     return (req: Request, res: Response) => {
//       // call service: real controller
//       // todo serivce
//     };
//   },

//   findAll() {}
// };

// DI container
// we dont need to write this code in Nest.js.
// Nest do this for us via DI container (place to store instance).
const todoController = new TodoController();
const mockTodoController = new MockTodoController();
const todoRouter = new TodoRouter(mockTodoController);
const server = new Server(todoRouter);
server.listen(8000);
