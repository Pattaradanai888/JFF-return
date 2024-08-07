const express = require("express");
const app = express();
const db = require("./config/db");
const bodyParser = require("body-parser");
const TodoItemsModel = require("./model/list");


app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('contact');
});


app.listen("3000", () => {
    console.log("Server is running on Port 3000.");
});
