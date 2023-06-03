import { Request, Response } from "express";
import { connection } from "../../config/db";
import { errorResponse } from "../../lib/responses";
import userTypes from "../../types/userTypes";
const customerAdd = async (req: Request | any, res: Response) => {
    try {
        const user: userTypes = req.user
        const { org_code, user_id, username, role, status } = user;
        const createBy = user_id;
        const { cust_id, cust_name, cust_phone, cust_address, cust_image, cust_email, cust_Desc } = req.body

        connection.query(
            `INSERT INTO customers (
                org_code,
                cust_id,
                cust_name,
                cust_phone,
                cust_address,
                cust_image,
                cust_email,
                cust_Desc,
                createBy,
            ) VALUES(
                ${org_code},
                ${cust_id},
                ${cust_name},
                ${cust_phone},
                ${cust_address},
                ${cust_image},
                ${cust_email},
                ${cust_Desc},
                ${createBy},
            )
            
            `
        )
    } catch (err: any) {
        errorResponse({ res, message: err.message })
    }
}



console.log(

)
export default customerAdd