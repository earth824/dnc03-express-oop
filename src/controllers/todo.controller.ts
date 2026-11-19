import type { Request, Response } from 'express';

export class TodoController {
  getAll() {
    return (req: Request, res: Response) => {
      // call service: real controller
      // todo serivce
    };
  }
}

// export class MockTodoController implements ITodoController {
//   getAll(): (req: Request, res: Response) => void {
//     return (req, res) => {};
//   }

//   delete() {}
// }

// INTERFACE, ABSTRACT CLASS
export interface ITodoController {
  getAll(): (req: Request, res: Response) => void;
}

export abstract class TodoControllerContract {
  abstract getAll(): (req: Request, res: Response) => void;
}

export class MockTodoController extends TodoControllerContract {
  getAll(): (req: Request, res: Response) => void {
    return (req, res) => {};
  }
}

// canno create instance of abstract class
// const t = new TodoControllerContract();
