import { pool } from "../../config/db";
import tableNameTypes from "../../types/tableNameTypes";

async function update({table, values, condition}:{table:tableNameTypes; values:any[]; condition:string}) {
    try {
        const connection = await pool.getConnection();
        const [result]:any = await connection.execute(`UPDATE ${table} SET ? WHERE ${condition}`, [values]);
        connection.release();
        return result.affectedRows;
      } catch (error) {
        console.error(error);
        return null;
      }
  }
  
  export default update