var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
//set port
var PORT = process.env.PORT || 8080;
//express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Caleb050701",
    database: "burgers_db"
  });
  