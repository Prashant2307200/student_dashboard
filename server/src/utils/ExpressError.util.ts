export interface IExpressError extends Error {
  message: string;
  status: number;
}

class ExpressError extends Error implements IExpressError {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status; 
  }
}

export default ExpressError;
