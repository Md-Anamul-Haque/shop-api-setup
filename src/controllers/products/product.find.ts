import { Request, Response } from "express"
import getData from "../../lib/actions/find"
import { errorResponse, successResponse } from "../../lib/responses"
import userTypes from "../../types/userTypes"

const productFind = async (req: Request | any, res: Response) => {
    try {
        const user: userTypes = req.user
        const { err, fields, rows } = await getData('select * from product_mt')
        successResponse({
            res,
            data: rows,
            message: 'successfully inserted'
        })
    } catch (err: any) {
        errorResponse({
            res,
            message: err.message,
            statusCode: 200
        })
    }
}

export default productFind