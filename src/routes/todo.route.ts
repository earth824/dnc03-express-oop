import { Router } from 'express';
import {
  MockTodoController,
  TodoController,
  TodoControllerContract,
  type ITodoController
} from '../controllers/todo.controller.js';

export class TodoRouter {
  private readonly router = Router();
  // inject dependency via constructor => dependency injection (DI)
  constructor(private readonly todoController: TodoControllerContract) {
    // const todoController = new TodoController(); do not do this
    // const todoController = new MockTodoController();
    this.router.get('/', this.todoController.getAll());
  }

  register() {
    return this.router;
  }
}
