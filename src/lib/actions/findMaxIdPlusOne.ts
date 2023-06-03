import tableNameTypes from "../../types/tableNameTypes";
import findMax_id from "./findMaxId";

async function findMaxId_PlusOne({ table, colName, length = 12 }: { table: tableNameTypes, colName: string; length?: number }) {
    try {
        const maxId = findMax_id({ table, colName, length });
        return maxId ? Number(maxId) + 1 : new Int8Array(length).join('');
    } catch (err) {
        return ({ err })
    }
}
export default findMaxId_PlusOne

















