import { Request, Response } from "express"
import { errorResponse, successResponse } from "../../lib/responses"

const findOneUser = async (req: Request, res: Response) => {
    try {
        // const hostname: string = req.hostname
        // const id:string | number = req.params.id
        return (
            successResponse({
                res,
                data: { abc: 'abc' },
                message: "findOne success"
            })
        )
    } catch (err: any) {
        return (
            errorResponse({ res, message: err.message })
        )
    }
}

export default findOneUser