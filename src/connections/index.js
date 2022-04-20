const mysql = require("mysql");

const connection = mysql.createConnection({
    database: "lesson",
    host: "localhost",
    password: "",
    user: "root"
});

module.exports = {
    connection
}