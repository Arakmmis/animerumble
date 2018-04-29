module.exports = function(http) {
  let io = require("socket.io")(http);
  io.on("connection", function(socket) {
    require("./lobby.js")(io, socket);
  });

  let game = io.of("/game");
  game.on("connection", function(socket) {
    require("./game.js")(game, socket);
  });
};
