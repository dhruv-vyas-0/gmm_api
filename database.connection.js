const mysql = require('mysql2');

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const pool = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    connectionLimit: 10
}).promise();

pool.getConnection((err, conn) => {
    if (err) console.log(err);
    console.log("Connected successfully");
})

module.exports = pool;