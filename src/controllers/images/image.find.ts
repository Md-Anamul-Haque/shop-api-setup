import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../lib/responses";

const findImage = async (req: Request, res: Response) => {
    try {
        successResponse({
            res,
            message: "return meny images",
            data: ['abc.jpg', 'xyz.png']
        })
    } catch (err: any) {
        errorResponse({
            res,
            message: err.message,
            statusCode: 404
        })
    }
}

export default findImage