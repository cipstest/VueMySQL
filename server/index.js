const express = require("express");
const mysql = require("mysql");

const port = "3000";

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
  //   ,
  //   database: "testdb"
});

(async () => {
  await db.connect(err => {
    if (err) {
      throw err;
    }
    console.log("MySQL Connected.");
  });
  console.log("Done");
})();

const app = express();

// Create Database
app.get("/createdb", (req, response) => {
  let sql = "CREATE DATABASE testdb";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(response);
    response.send("Database created.");
  });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
