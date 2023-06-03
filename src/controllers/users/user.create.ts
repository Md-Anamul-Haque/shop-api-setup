import { Request, Response } from "express"
import { errorResponse, successResponse } from "../../lib/responses"

const createUser = async (req: Request | any, res: Response) => {
    try {
        const hostname: string = req.hostname
        const category: string | number = req.params.category
        const user: string = req.user // {usrname:string,role:string}
        return (
            successResponse({
                res,
                data: { abc: 'abc' },
                message: "create success"
            })
        )
    } catch (err: any) {
        return (
            errorResponse({ res, message: err.message })
        )
    }
}

export default createUser