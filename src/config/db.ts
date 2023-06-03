import mysql from 'mysql2';
import mysqlPromise from 'mysql2/promise';

const dbName = 'shop',
  dbPassword = 'password';
const config = {
  host: 'localhost',
  user: 'root',
  password: dbPassword,
  database: dbName
}
export const connection = mysql.createConnection({
  ...config
});

export const pool = mysqlPromise.createPool({
  ...config
});