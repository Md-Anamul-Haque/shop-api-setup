import { NextFunction, Request, Response } from 'express'
import sendError from '../lib/responses/sendError'
const auth = (req: Request | any, res: Response, next: NextFunction) => {
    try {
        // ... write your authentication or authorization code.
        // success -->
        req.user = {
            org_code: 'org-10001',//varchar(20)
            user_id: 'userId-10009', //varchar(20)
            username: 'Rajon', //varchar(50)
            role: 'admin',//varchar(20)
            status: 'A',//varchar(1)
        }
        next()
    } catch (err: any) {
        sendError({
            res,
            message: err.message,
        })
    }
}

export default auth