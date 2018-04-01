//Dependencies
let express = require("express");
let app = require("express")();
let http = require("http").Server(app);
let path = require("path");
let port = process.env.PORT || 3000;
let env = process.env.NODE_ENV || "development";

let forceSsl = function(req, res, next) {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  return next();
};

const _ = require("lodash");
if (env === "production") {
  app.use(forceSsl);
}
app.set("view engine", "ejs");
app.use(express.static("public"));

//Routes
require("./app/routes/index.js")(app);

//Socket
require("./app/sockets/index.js")(http);

//Initiate
http.listen(port, function() {
  console.log("listening on *:3000");
});
