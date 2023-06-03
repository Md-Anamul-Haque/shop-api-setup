import { pool } from "../../config/db";
import tableNameTypes from "../../types/tableNameTypes";

async function findOne({ table, condition, sql }: { table?: tableNameTypes, condition?: string; sql?: string }) {
    try {
        const connection = await pool.getConnection();
        let sqlQuery: string;
        if (sql) {
            sqlQuery = sql;
        } else {
            sqlQuery = `SELECT * FROM ${table} WHERE ${condition} LIMIT 1`
        }
        const [rows]: any = await connection.execute(sqlQuery);
        connection.release();
        // return rows.length ? rows[0] : null;
        return ({ row: rows?.[0] || null })
    } catch (err) {
        return ({ err })
    }
}
export default findOne