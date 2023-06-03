import { Request, Response } from "express"
import { sendError, sendSuccess } from "../../../lib/responses"

const findUser = async(req: Request, res: Response) => {
    try {
        const hostname: string = req.hostname
        const category:string | number = req.params.category
        return (
            sendSuccess({
                res,
                data: { abc: 'abc' },
                message: "find success"
            })
        )
    } catch (err: any) {
        return (
            sendError({ res, message: err.message })
        )
    }
}

export default findUser