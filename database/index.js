var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "mysql-pprotask",
  user: "root",
  password: "okok123",
  database: "pprotask"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE if not exists helloworld (message VARCHAR(255))";
  var insertsql= "INSERT IGNORE INTO helloworld (message) values('hello world')"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  con.query(insertsql, function (err, result) {
    if (err) throw err;
    console.log("Query inserted");
  });
});

module.exports=con