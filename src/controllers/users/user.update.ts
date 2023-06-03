import { Request, Response } from "express"
import { errorResponse, successResponse } from "../../lib/responses"

const updateUser = async (req: Request, res: Response) => {
    try {
        // const hostname: string = req.hostname
        // const id:string | number = req.params.id
        // const user: string = req.user // {usrname:string,role:string}
        return (
            successResponse({
                res,
                data: { abc: 'abc' },
                message: "update success"
            })
        )
    } catch (err: any) {
        return (
            errorResponse({ res, message: err.message })
        )
    }
}

export default updateUser