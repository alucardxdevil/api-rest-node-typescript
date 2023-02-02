import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { RequestExt } from "../interfaces/req-ext.interface"
import { handleHttp } from "../utils/error.handle"

const getItems = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: 'Esto solo lo pueden ver las personas con sesiones activas',
            user: req.user,
        })
    } catch (e) {
        handleHttp(res, 'Error get order')
    }
}

export {getItems}