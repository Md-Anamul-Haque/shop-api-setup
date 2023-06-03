import { connection } from "../../config/db";

const find = async (sql: string) => {
    try {
        const [rows, fields] = await connection.execute(sql);
        // console.log(rows);
        return ({ rows, fields })
    } catch (err) {
        return ({ err })
    }
};

export default find