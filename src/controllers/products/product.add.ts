import { Request, Response } from "express";
import findMaxId_PlusOne from "../../lib/actions/findMaxIdPlusOne";
import insertData from "../../lib/actions/insertData";
import sendError from "../../lib/responses/sendError";
import sendSuccess from "../../lib/responses/sendSuccess";
import productMt_Types from "../../types/productMt_types";
import userTypes from "../../types/userTypes";

const addProduct = async (req: Request | any, res: Response) => {
    try {
        const user: userTypes = req.user;
        console.log({user})
        const table = 'product_mt';
        const pd_image = '',
            pd_id = `pd-${findMaxId_PlusOne({ table, colName: 'pd_id' })}`;
        const { org_code, user_id } = user;

        console.log(req.body)
        // from user to send in body
        const { pd_name, pd_brand, pd_model, pd_price, pd_type, pd_category, sale_margin_price, uom, color, feature, pd_desc }: productMt_Types = req.body;

        let data: productMt_Types = {
            org_code,
            pd_id,
            pd_name,
            pd_model,
            pd_type,
            pd_brand,
            pd_category,
            pd_price,
            feature,
            pd_image,
            sale_margin_price,
            uom,
            createBy: user_id,
            pd_desc,
            color,
        };
        const { err, fields, rows } = await insertData({ table, data });
        if (err) {
            sendError({
                res,
                message: err.message,
            })
        } else {
            sendSuccess({
                res,
                data: { ...data, pd_id, org_code },
                message: 'add success'
            })
        }
    } catch (err: any) {
        sendError({
            res,
            message: err.message,
        })
    }
}

export default addProduct;