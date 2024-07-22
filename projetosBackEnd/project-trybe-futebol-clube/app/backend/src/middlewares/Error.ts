import { Request, Response, NextFunction } from 'express';
import ErrorHttp from '../utils/utils';

const errorHandlerMiddleware = (
  err:ErrorHttp,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { message, http } = err;
  if (err.name === 'ValidationError') {
    res.status(400).json({ message });
  }
  res.status(http || 500).json({ message });
};

export default errorHandlerMiddleware;
