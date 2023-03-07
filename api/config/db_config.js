require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection( {
    user: process.env.dbUser,
    database: process.env.dbDatabase,
    host: process.env.dbHost,
    password: process.env.dbPassword,
    port: process.env.dbPort,
    multipleStatements: true
});

module.exports = connection;