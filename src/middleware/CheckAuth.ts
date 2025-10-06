import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getEnvs } from "../config/envConfig";

export const checkAuth = () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accessToken = req.headers.authorization || req.cookies.accessToken;
      if (!accessToken) {
        throw new AppError(StatusCodes.NOT_FOUND, "Access token is missing");
      }

      const decodedToken = jwt.verify(
        accessToken,
        getEnvs().ACCESS_TOKEN_SECRET
      );

      req.user = decodedToken as JwtPayload;

      next()
    } catch (error) {
      next(error);
    }
};
