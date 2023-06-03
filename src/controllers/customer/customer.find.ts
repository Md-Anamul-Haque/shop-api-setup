import { Request, Response } from "express";
import { connection } from "../../config/db";
import { errorResponse, successResponse } from "../../lib/responses";
const customerFind = async (req: Request, res: Response) => {
    console.log('hello')
    try {
        connection.query(
            'SELECT * FROM `customers` where ',
            function (err, results, fields) {
                console.log(fields); // fields contains extra meta data about results, if available
                successResponse({
                    res,
                    data: results
                })
                // console.log(results); // results contains rows returned by server
            }
        );
    } catch (err: any) {
        errorResponse({ res, message: err.message })
    }
}
export default customerFind