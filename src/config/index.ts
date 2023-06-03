import dotenv from 'dotenv';
import auth from './auth';
import db from './db';
dotenv.config();
const PORT = process.env.PORT || 3302;
const app_config = {
  PORT,
  db,
  auth
}

export default app_config