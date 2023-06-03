import { Request, Response } from "express"
import { errorResponse, successResponse } from "../../lib/responses"

const deleteUser = async (req: Request, res: Response) => {
    try {
        // const hostname: string = req.hostname
        // const id:string | number = req.params.id
        // const user: string = req.user // {usrname:string,role:string}
        return (
            successResponse({
                res,
                data: { abc: 'abc' },
                message: "delete success"
            })
        )
    } catch (err: any) {
        return (
            errorResponse({ res, message: err.message })
        )
    }
}

export default deleteUser