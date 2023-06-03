import { pool } from "../../config/db";
import tableNameTypes from "../../types/tableNameTypes";

interface updateOneTypes {
    table: tableNameTypes;
    values: any[];
    condition: string;
}
async function updateOne({ table, values, condition }: updateOneTypes): Promise<number | null> {
    try {
        const connection = await pool.getConnection();
        const [result]: any = await connection.execute(`UPDATE ${table} SET ? WHERE ${condition} LIMIT 1`, [values]);
        connection.release();
        return result.affectedRows;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default updateOne