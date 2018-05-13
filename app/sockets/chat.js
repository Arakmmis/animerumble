let model = require("../helper/model.js");

module.exports = function(io, socket) {
  let auth = socket.request.user;

  socket.on("chat", function(payload) {
    let channel = payload.channel;
    let message = auth.username + ": " + payload.message;

    if (channel === "lobby") {
      io.emit("chat", {
        channel: "lobby",
        message: message
      });
    } else if (channel === "ingame") {
      let roomName = payload.room;

      io.to(roomName).emit("chat", {
        channel: "ingame",
        message: message
      });
    }
  });

  socket.on("gameInitiate", function(payload) {
    let roomName = payload.room;
    socket.join(roomName);
    let message = auth.username + " join game";
    io.to(roomName).emit("chat", {
      channel: "ingame",
      message: message
    });
  });
};
