import { Response } from 'express'

const sendSuccess = async (
    { res, message = '', data, statusCode = 200 }
        : { res: Response, message?: string, data?: any[] | any, statusCode?: number }
) => {
    if (data) {
        return (
            res.status(statusCode).json({
                "success": true,
                "message": message,
                "data": data
            })
        )
    } else {
        res.status(statusCode).json({
            "success": true,
            "message": message,
        })
    }
}

export default sendSuccess