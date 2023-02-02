import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'Error get blog')
    }
}

const getItems = (req: Request, res: Response) => {
    try {
    
    } catch (e) {
        handleHttp(res, 'Error get blogs')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {
    
    } catch (e) {
        handleHttp(res, 'Error update blog')
    }
}

const postItem = ({body}: Request, res: Response) => {
    try {
        res.send(body)
    } catch (e) {
        handleHttp(res, 'Error post blog')
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
    
    } catch (e) {
        handleHttp(res, 'Error delete blog')
    }
}

export {getItem, getItems, updateItem, postItem, deleteItem}