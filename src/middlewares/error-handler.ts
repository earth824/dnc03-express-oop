import type { NextFunction, Request, Response } from 'express';

export class ErrorHandler {
  handle() {
    return (
      error: unknown,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {};
  }
}
