// await (await findOne({ sql: }))?.row?.pd_id


import { pool } from "../../config/db";
import tableNameTypes from "../../types/tableNameTypes";

async function findMax_id({ table, colName, length = 12 }: { table: tableNameTypes, colName: string; length?: number }) {
    try {
        const connection = await pool.getConnection();
        const sql = `SELECT LPAD(MAX(SUBSTR(${colName},2)+1),${length},0) as max_id from ${table} LIMIT 1`;
        const [rows]: any = await connection.execute(sql);
        connection.release();
        // return rows.length ? rows[0] : null;
        return (rows?.[0]?.max_id || null)
    } catch (err) {
        return ({ err })
    }
}
export default findMax_id