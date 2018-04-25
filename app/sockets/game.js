let engine = require("../engine/main.js");
let battle = require("../engine/battle.js");
let model = require("../helper/model.js");

let connection = 0;
let store = {};
let roomSpace = [];

module.exports = function(io, socket) {
  socket.on("initiate", payload => {
    console.log("a user connected");
    //Check Matches
    let match = model.getMatch(payload.room);
    if (match === undefined) {
      roomSpace = roomSpace.filter(x => x === payload.room);
      socket.emit("noMatch", {});
      console.log(socket.id);
      return;
    }
    let user = model.getUser(payload.token);
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
        io
          .to(roomName)
          .emit("apply", store[roomName][store[roomName].length - 1]);
      });

      roomSpace.push(roomName);
    } else {
      io
        .to(roomName)
        .emit("apply", store[roomName][store[roomName].length - 1]);
    }
  });

  socket.on("sequence", payload => {
    let roomName = payload.room;
    if (store[roomName] === undefined) {
      socket.emit("noMatch", {});
      console.log(socket.id);
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

  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
  });
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
};
