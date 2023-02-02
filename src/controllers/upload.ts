import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { RequestExt } from "../interfaces/req-ext.interface";
import { Storage } from "../interfaces/storage.interface";
import { registrarUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const {user, file} = req
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const response = await registrarUpload(dataToRegister)
        res.send(response)
    } catch (e) {
        handleHttp(res, 'Error upload file')
    }
}

export {getFile}