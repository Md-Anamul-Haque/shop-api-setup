import { Request, Response } from "express"
import { errorResponse, successResponse } from "../../lib/responses"

const findUser = async (req: Request, res: Response) => {
    try {
        const hostname: string = req.hostname
        const category: string | number = req.params.category
        return (
            successResponse({
                res,
                data: { abc: 'abc' },
                message: "find success"
            })
        )
    } catch (err: any) {
        return (
            errorResponse({ res, message: err.message })
        )
    }
}

export default findUser