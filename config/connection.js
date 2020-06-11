// MYSQL CONNECTION
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Untitled1229',
    database: 'burgers_db'
});

// CONNECTION
connection.connect((err) => {
    if (err) {
        console.error('error connectin: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// EXPORT CONNECTION
module.exports = connection;