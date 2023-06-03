import { Request, Response } from "express";
import { connection } from "../../config/db";
import sendError from "../../lib/responses/sendError";
import sendSuccess from "../../lib/responses/sendSuccess";
const customerFind = async (req: Request, res: Response) => {
    console.log('hello')
    try {
        connection.query(
            'SELECT * FROM `customers` where ',
            function (err, results, fields) {
                console.log(fields); // fields contains extra meta data about results, if available
                sendSuccess({
                    res,
                    data: results
                })
                // console.log(results); // results contains rows returned by server
            }
        );
    } catch (err: any) {
        sendError({ res, message: err.message })
    }
}
export default customerFind