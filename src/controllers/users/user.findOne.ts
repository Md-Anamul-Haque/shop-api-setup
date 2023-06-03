import { Request, Response } from "express"
import { sendError, sendSuccess } from "../../../lib/responses"

const findOneUser = async (req: Request, res: Response) => {
    try {
        // const hostname: string = req.hostname
        // const id:string | number = req.params.id
        return (
            sendSuccess({
                res,
                data: { abc: 'abc' },
                message: "findOne success"
            })
        )
    } catch (err: any) {
        return (
            sendError({ res, message: err.message })
        )
    }
}

export default findOneUser