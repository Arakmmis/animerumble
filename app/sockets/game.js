let engine = require("../engine/main.js");
let battle = require("../engine/battle.js");
let surrender = require("../engine/surrender.js");
let model = require("../helper/model.js");

let connection = 0;
let store = {};
let roomSpace = [];

module.exports = function(io, socket, lobby) {
  let auth = socket.request.user;

  socket.on("initiate", payload => {
    console.log("a user connected");
    let update_ = model.updateUser({
      username: auth.username,
      position: 0,
      socket: socket.id,
      room: payload.room,
      status: "ingame"
    });

    if (update_ === undefined) {
      socket.emit("noMatch", {});
      return;
    }

    lobby.emit("users", update_[1]);

    //Check Matches
    let match = model.getMatch(payload.room);
    if (match === undefined) {
      roomSpace = roomSpace.filter(x => x === payload.room);
      socket.emit("noMatch", {});
      return;
    }
    let user = model.getUser(auth.username);
    let team = {
      teamOdd: "",
      teamOddChar: [],
      teamEven: "",
      teamEvenChar: []
    };
    if (match.challenger.order === 1) {
      team.teamOdd = match.challenger.name;
      team.teamOddChar = match.challenger.char;
      team.teamEven = match.accept.name;
      team.teamEvenChar = match.accept.char;
    } else {
      team.teamOdd = match.accept.name;
      team.teamOddChar = match.accept.char;
      team.teamEven = match.challenger.name;
      team.teamEvenChar = match.challenger.char;
    }

    let roomName = payload.room;
    let roomCheck = roomSpace.some(x => x === roomName) ? true : false;
    console.log(roomSpace);
    socket.join(payload.room);
    //Engine Initiate
    connection = connection + 1;

    console.log(connection);
    if (!roomCheck) {
      engine.main({ team: team, room: roomName }, payload => {
        store[roomName] = [];
        store[roomName].push(payload);
        console.log("apply", payload);
        socket.emit("apply", store[roomName][store[roomName].length - 1]);
      });

      roomSpace.push(roomName);
    } else {
      socket.emit("apply", store[roomName][store[roomName].length - 1]);
    }
  });

  socket.on("sequence", payload => {
    let roomName = payload.room;
    if (store[roomName] === undefined) {
      socket.emit("noMatch", {});
      return;
    }
    battle(
      payload.packet,
      store[roomName][store[roomName].length - 1],
      payload => {
        store[roomName].push(payload);
        console.log("view", payload);

        io.to(roomName).emit("apply", payload);

        if (payload.winner.state === true) {
          console.log("Winner");
          model.deleteMatch(roomName);
        }
      }
    );
  });

  socket.on("surrender", payload => {
    let roomName = payload.room;
    if (store[roomName] === undefined) {
      socket.emit("noMatch", {});
      return;
    }
    surrender(
      auth.username,
      store[roomName][store[roomName].length - 1],
      payload => {
        store[roomName].push(payload);
        console.log("view", payload);

        io.to(roomName).emit("apply", payload);

        if (payload.winner.state === true) {
          console.log("Winner");
          model.deleteMatch(roomName);
        }
      }
    );
  });

  socket.on("chat", function(payload) {
    console.log("message: " + payload.message);
    let roomName = payload.room;
    let message = auth.username + ": " + payload.message;
    io.to(roomName).emit("chat", message);
  });

  socket.on("disconnect", function() {
    let deleted = model.offline(socket.id);
    lobby.emit("users", deleted);
    console.log("user disconnected: " + auth.username);
  });
};
