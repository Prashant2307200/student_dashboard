import type { Request,Response,NextFunction } from "express";

type AsyncMiddleware<T = Request> = (req: T, res: Response, next: NextFunction) => Promise<void>;

const asyncHandler = <T>(fn: AsyncMiddleware<T>) =>
  (req: T, res: Response, next: NextFunction) => 
    fn(req, res, next).catch(next)

export default asyncHandler;