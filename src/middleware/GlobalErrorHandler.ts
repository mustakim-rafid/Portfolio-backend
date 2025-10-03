import { NextFunction, Request, Response } from "express";
import { getEnvs } from "../config/envConfig";

export const globarErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err?.statusCode || 500;
  const message = err?.message || "Something went wrong";

  res.status(statusCode).json({
    statusCode: statusCode,
    success: false,
    message,
    error: {
      err,
    },
    stack: getEnvs().NODE_ENV === "development" && err?.stack,
  });
};
