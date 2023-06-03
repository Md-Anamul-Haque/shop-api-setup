import { Request, Response } from "express";
import sendError from "../../lib/responses/sendError";
import sendSuccess from "../../lib/responses/sendSuccess";

const findImage = async (req: Request, res: Response) => {
    try {
        sendSuccess({
            res,
            message: "return meny images",
            data: ['abc.jpg', 'xyz.png']
        })
    } catch (err: any) {
        sendError({
            res,
            message: err.message,
            statusCode: 404
        })
    }
}

export default findImage