module.exports = function(http) {
  let io = require("socket.io")(http);

  io.use(function(socket, next) {
    var handshakeData = socket.handshake.query.token;
    console.log("middleware:", handshakeData);
    next();
  });

  let lobby = io.of('/lobby')

  lobby.on("connection", function(socket) {    
    console.log("First!", socket.id);
    require("./lobby.js")(lobby, socket);
  });

  let game = io.of("/game");
  game.on("connection", function(socket) {
    require("./game.js")(game, socket);
  });
};
