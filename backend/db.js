import dotenv from 'dotenv';
dotenv.config();
import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'cadastros_usuarios',
    password : '1234',
    port : '5432'
})
export default pool
