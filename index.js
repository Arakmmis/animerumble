//Dependencies
let express = require("express");
let app = require("express")();
let http = require("http").Server(app);
let path = require("path");

const _ = require("lodash");
app.set("view engine", "ejs");
app.use(express.static("public"));

//Routes
require("./app/routes/index.js")(app);

//Socket
require("./app/sockets/index.js")(http);

//Initiate
http.listen(3000, function() {
  console.log("listening on *:3000");
});
