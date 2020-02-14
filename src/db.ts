import { Client } from 'pg';
import * as config from './config';

export const db = new Client({
    host: config.PG_HOST,
    database: config.PG_DATABASE,
    port: config.PG_PORT,
    user: config.PG_USER,
    password: config.PG_PASSWORD
})

db.connect();