let mongoose = require("mongoose");

let model = require("../helper/model.js");
let Chat = require("../models/Chat.js");

module.exports = function(io, socket) {
  let auth = socket.request.user;

  socket.on("chat", function(payload) {
    let channel = payload.channel;
    let message = auth.username + ": " + payload.message;

    if (channel === "lobby") {
      let chat = new Chat({
        name: auth.username,
        channel: "lobby",
        room: "lobby",
        message: payload.message,
        timestamp: Date.now()
      }).save();

      io.emit("chat", {
        channel: "lobby",
        message: message
      });
    } else if (channel === "ingame") {
      let roomName = payload.room;

      let chat = new Chat({
        name: auth.username,
        channel: "ingame",
        room: roomName,
        message: payload.message,
        timestamp: Date.now()
      }).save();

      io.to(roomName).emit("chat", {
        channel: "ingame",
        message: message
      });
    }
  });

  socket.on("gameInitiate", function(payload) {
    let roomName = payload.room;
    socket.join(roomName);

    //Load History
    Chat.find({
      channel: "ingame",
      room: roomName
    })
      .limit(10)
      .sort({ _id: -1 })
      .exec((err, res) => {
        let packet = res.map(x => {
          return x.name + ": " + x.message;
        });
        packet.reverse();

        socket.emit("gameInitiate", packet);
      });

    //Announce Presence
    let message = auth.username + " join game";
    io.to(roomName).emit("chat", {
      channel: "ingame",
      message: message
    });
  });

  socket.on("lobbyInitiate", function(payload) {
    Chat.find({
      channel: "lobby"
    })
      .limit(10)
      .sort({ _id: -1 })
      .exec((err, res) => {
        if (err) return;
        let packet = res.map(x => {
          return {
            name: x.name,
            message: x.message,
            timestamp: x.timestamp
          };
          // return x.name + ": " + x.message;
        });
        packet.reverse();

        socket.emit("lobbyInitiate", packet);
      });
  });
};
