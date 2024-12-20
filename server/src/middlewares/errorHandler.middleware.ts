import logger from "../config/pino.config.js";
import type { Request, Response, NextFunction } from "express";
import type { IExpressError } from "../utils/ExpressError.util.js";

const errorHandler = (
  err: IExpressError | Error,
  req: Request,
  res: Response,
  next: NextFunction
):void => {
  const { 
    status = 500, 
    message = "Internal Server Error" 
  } = err as IExpressError;
  logger.error(`Express Error with ${status} and ${message}`);
  res.status(status).json({ message });
};

export default errorHandler;