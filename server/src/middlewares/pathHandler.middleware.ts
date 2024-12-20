import ExpressError from "../utils/ExpressError.util.js";
import type { Request,Response,NextFunction } from "express"

const pathHandler = (
  req: Request, 
  res: Response, 
  next: NextFunction
):void => {
  next(new ExpressError("Page not Found!", 404));
};

export default pathHandler;