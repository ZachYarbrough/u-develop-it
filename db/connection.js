const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1luvBilb0',
        database: 'election'
    }
);

module.exports = db;