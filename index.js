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

let connection = 0;
let testStore = {};
let func = {};
let store = [];

//Socket
io.on("connection", function(socket) {
  console.log("a user connected");
  //Engine Initiate
  connection = connection + 1;
  console.log(connection);
  if (connection <= 2) {
    engine.main({}, action => {
      console.log(action);
      func = action.sequence;
      testStore = action.store;
      store.push(action.store);
      action.store.myTeam = "teamA";
      io.emit("initiate", store[store.length - 1]);

      action.view = payload => {
        testStore = payload;
        store.push(payload);
        console.log(payload);
        payload.myTeam = "teamA";
        console.log("view", payload);
        io.emit("apply", payload);
      };
    });

    initiate = 1;
  } else {
    io.emit("initiate", testStore);
  }

  socket.on("registerAttack", function(payload) {
    func(payload, store[store.length - 1], payload => {
      testStore = payload;
      store.push(payload);
      console.log(payload);
      payload.myTeam = "teamA";
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
