let model = require("../helper/model.js");
let character = require("../engine/character/index.js");

module.exports = function(http, passportSocketAuthorize) {
  //Initiate
  let io = require("socket.io")(http);

  //Middleware
  io.use(function(socket, next) {
    var handshakeData = socket.handshake.query;
    // console.log("middleware:", handshakeData);
    next();
  });
  io.use(passportSocketAuthorize);

  io.on("connection", function(socket) {});

  //Connections
  let lobby = io.of("/lobby");
  lobby.on("connection", function(socket) {
    let auth = socket.request.user;

    //Reconnect
    let user_ = model.getUser();
    let index = user_.findIndex(x => x.username === auth.username);
    if (index !== -1) {
      let update_ = model.updateUser({
        username: auth.username,
        position: 0,
        socket: socket.id,
        room: "lobby",
        status: "online"
      });
      socket.emit("logged", {
        user: update_[0].username,
        character: character.map(x => {
          return {
            name: x.name,
            id: x.id,
            anime: x.anime
          };
        })
      });
      io.emit("users", update_[1]);
    } else if (index === -1) {
      let userModel = {
        socket: socket.id,
        username: auth.username,
        status: "online",
        room: "lobby"
      };
      model.setUser(userModel);
      let user_ = model.getUser();
      io.emit("users", user_);

      socket.emit("logged", {
        user: auth.username,
        character: character.map(x => {
          return {
            name: x.name,
            id: x.id,
            anime: x.anime
          };
        })
      });
    }

    //Socket
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
