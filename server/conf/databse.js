import {Pool} from 'pg';
import 'dotenv/config';

const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME
})

export default pool;