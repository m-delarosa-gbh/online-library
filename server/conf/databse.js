import {Pool} from 'pg';


const pool = new Pool({
    user: "postgres",
    password: "postgress",
    host: "localhost",
    port: 5432,
    database: "bookstore"
})

export default pool;