import { Response } from "express";

export const ApiResponse = (
  res: Response,
  success: boolean,
  statusCode: number,
  message: string,
  data: any,
  meta?: any
) => {
  res.status(statusCode).json({
    success,
    statusCode,
    message,
    data,
    meta,
  });
};
