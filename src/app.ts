import express, { Express } from 'express';
import router from './routes';
const app: Express = express();

import cookieParser from 'cookie-parser';
import cors from 'cors';
import findMax_id from './lib/actions/findMaxId';
(async () => {
    const pd_id = await findMax_id({ table: 'product_mt', colName: 'pd_id' }) || `pd-1${new Int8Array(11).join('')}`;
    console.log({ pd_id })
})()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.options('*', cors()); // enable pre-flight request for all routes
// app.use(cors({ credentials: true, origin: process.env.CLINT_URL })); // only CLINT_URL credentials
app.use(express.static("public"));
app.use(cookieParser())
// all routes have this router
app.use(router);

export default app