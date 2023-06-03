import { Response } from "express"

const sendError = async (
    { res, message = 'Internal Server Error', statusCode = 200 }
        : { res: Response, message?: string, statusCode?: number }
) => {
    return (
        res.status(statusCode).json({
            "success": false,
            "message": message,
        })
    )
}

export default sendError