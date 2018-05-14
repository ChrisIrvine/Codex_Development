var mysql = require('mysql');
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'CAI',
    password: 'Fr3y@2017',
    database: 'CodexDB'
});

export default connection;