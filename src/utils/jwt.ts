import jwt from "jsonwebtoken"
import { getEnvs } from "../config/envConfig";

interface IPayload {
    id: number;
    name: string;
    email: string
} 

export const generateToken = (payload: IPayload) => {
    const accessToken = jwt.sign(payload, getEnvs().ACCESS_TOKEN_SECRET, {
        expiresIn: getEnvs().ACCESS_TOKEN_EXPIRY as jwt.SignOptions["expiresIn"]
    })

    return accessToken
}