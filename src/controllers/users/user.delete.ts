import { Request, Response } from "express"
import { sendError, sendSuccess } from "../../../lib/responses"

const deleteUser = async(req: Request, res: Response) => {
    try {
        // const hostname: string = req.hostname
        // const id:string | number = req.params.id
        // const user: string = req.user // {usrname:string,role:string}
        return (
            sendSuccess({
                res,
                data: { abc: 'abc' },
                message: "delete success"
            })
        )
    } catch (err: any) {
        return (
            sendError({ res, message: err.message })
        )
    }
}

export default deleteUser