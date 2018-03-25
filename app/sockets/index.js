module.exports = function(http) {
  let io = require("socket.io")(http);
  io.on("connection", function(socket) {
    require("./lobby.js")(io, socket);
    require("./game.js")(io, socket);
  });
};
