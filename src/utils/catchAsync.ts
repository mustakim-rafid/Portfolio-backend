import { NextFunction, Request, Response } from "express";

type TFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>

export const asyncHandler = (fn: TFunction) => async (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch((err) => {
        next(err)
    })
}