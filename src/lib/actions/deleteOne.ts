import { pool } from "../../config/db";
import tableNameTypes from "../../types/tableNameTypes";

interface deleteOneTypes { table: tableNameTypes; condition: string; }

async function deleteOne({ table, condition }: deleteOneTypes): Promise<number | null> {
    try {
        const connection = await pool.getConnection();
        const [result]: any = await connection.execute(`DELETE FROM ${table} WHERE ${condition} LIMIT 1`);
        connection.release();
        return result.affectedRows;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default deleteOne