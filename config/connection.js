const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "WrexyBoi!9",
    database: "burgers_db",
  });
}

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
