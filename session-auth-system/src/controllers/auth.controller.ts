import {Request, Response} from 'express'

export const test = async (req: Request, res:Response): Promise<any> => {
    return res.status(200).json({message: "Test Auth API"})
}

export const login = async(req: Request, res: Response): Promise<any> => {
    return res.status(200).json({message: "User logged in successfully"})
}