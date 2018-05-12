module.exports = function(http, passportSocketAuthorize) {
  //Initiate
  let io = require("socket.io")(http);

  //Middleware
  io.use(function(socket, next) {
    var handshakeData = socket.handshake.query.token;
    // console.log("middleware:", handshakeData);
    next();
  });
  io.use(passportSocketAuthorize);

  //Connections
  let lobby = io.of("/lobby");
  lobby.on("connection", function(socket) {
    require("./lobby.js")(lobby, socket);
  });

  let chat = io.of("/chat");
  chat.on("connection", function(socket) {
    require("./chat.js")(chat, socket);
  });

  let game = io.of("/game");
  game.on("connection", function(socket) {
    require("./game.js")(game, socket, lobby);
  });
};
