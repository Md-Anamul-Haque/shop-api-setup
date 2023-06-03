import { connection, pool } from "../../config/db";
import tableNameTypes from "../../types/tableNameTypes";
interface insertDataTypes { table: tableNameTypes; data: object }
const insertData = async ({ table, data }: insertDataTypes) => {
    try {
        // const connection = await pool.getConnection();
        // const sql = `INSERT INTO ${table} SET ?`;
        const sql = `INSERT INTO ${table} SET ?`;
        // const [rows, fields] = await connection.execute(sql, [data]);
        const [rows, fields] = await connection.execute(sql,[data]);
        console.log(sql)
        // connection.release();
        console.log('Data inserted successfully!');
        return { rows, fields };
    } catch (err: any) {
        console.log(err)
        return { err }
    }
};

export default insertData