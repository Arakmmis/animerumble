//Dependencies
let express = require("express");
let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let path = require("path");
let engine = require("./engine/main.js");

const _ = require("lodash");

//Route
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/")));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/2", function(req, res) {
  res.render("index2");
});

let connection = 0;
let sequence = {};
let store = [];

//Socket
io.on("connection", function(socket) {
  console.log("a user connected");
  //Engine Initiate
  connection = connection + 1;
  console.log(connection);
  if (connection <= 2) {
    engine.main({}, action => {      
      sequence = action.sequence;      
      store.push(action.store);
      action.store.myTeam = "teamEven";
      console.log("initiate", action);
      io.emit("initiate", store[store.length - 1]);
    });

    initiate = 1;
  } else {
    io.emit("initiate", store[store.length - 1]);
  }

  socket.on("registerAttack", function(payload) {
    sequence(payload, store[store.length - 1], payload => {      
      store.push(payload);      
      payload.myTeam = "teamEven";
      console.log("view", payload);
      io.emit("apply", payload);
    });
  });

  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
  });
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

//Initiate
http.listen(3000, function() {
  console.log("listening on *:3000");
});
