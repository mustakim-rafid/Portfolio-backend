import { Request, Response } from "express";
import { asyncHandler } from "../../utils/catchAsync";
import { authServices } from "./auth.service";
import { ApiResponse } from "../../utils/ApiResponse";
import { StatusCodes } from "http-status-codes";
import { setCookie } from "../../utils/setCookie";

// *************** push on github ********************

const login = asyncHandler(async (req: Request, res: Response) => {
    const data = await authServices.login(req.body)
    setCookie(res, data.accessToken)
    ApiResponse(res, true, StatusCodes.OK, "Admin logged in successfully", data)
})

const logout = asyncHandler(async (req: Request, res: Response) => {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    })
    ApiResponse(res, true, StatusCodes.OK, "Admin logged out successfully", {})
}) 

export const authControllers = {
    login,
    logout
}