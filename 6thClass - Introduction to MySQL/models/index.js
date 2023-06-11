const mysql = require("mysql2");

function connection() {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'toooooor',
        database: 'mern_bootcamp_2'
    });

    return connection.promise();
}

module.exports = connection;