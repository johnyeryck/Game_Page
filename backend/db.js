require('dotenv').config();
const { Poll } = require('pg');

const Poll = new Poll({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT
})