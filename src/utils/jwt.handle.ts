import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101'

const signToken = (id: string) => {
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: "72h",
    })
    return jwt
}

const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export {signToken, verifyToken}