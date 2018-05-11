let uniqid = require("uniqid");
let model = require("../helper/model.js");
let character = require("../engine/character/index.js");

module.exports = function(io, socket) {
  let auth = socket.request.user;

  socket.on("connectLobby", payload => {
    let user_ = model.getUser();
    let index = user_.findIndex(x => x[1] === auth.username);
    if (index !== -1) {
      let update_ = model.updateUser({
        token: payload.token,
        username: auth.username,
        position: 0,
        package: socket.id,
        status: "online"
      });
      socket.emit("logged", {
        user: update_[0][1],
        token: update_[0][2],
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
      let token = uniqid();
      model.setUser([socket.id, auth.username, token, "online"]);
      let user_ = model.getUser();
      io.emit("users", user_);

      socket.emit("logged", {
        user: auth.username,
        token: token,
        character: character.map(x => {
          return {
            name: x.name,
            id: x.id
          };
        })
      });
    }
  });

  // socket.on("log", payload => {
  //   console.log("LOGIN");
  //   let user_ = model.getUser();
  //   let exist = user_.some(x => x[1] === payload.name);
  //   if (exist === false) {
  //     console.log(socket.id);
  //     let token = uniqid();
  //     console.log("new token", token);

  //     // socket.id = token
  //     console.log("new socket", socket.id);
  //     model.setUser([socket.id, payload.name, token, true]);
  //     let user_ = model.getUser();
  //     console.log("45!", user_);
  //     io.emit("users", user_);

  //     socket.emit("logged", {
  //       user: payload.name,
  //       token: token,
  //       character: character.map(x => {
  //         return {
  //           name: x.name,
  //           id: x.id
  //         };
  //       })
  //     });
  //   } else {
  //     socket.emit("exist");
  //   }
  // });

  socket.on("challenge", function(payload) {
    let user_ = model.getUser();
    let index = user_.findIndex(x => x[1] === payload.to);
    if (index !== -1) {
      console.log(user_[index][0]);
      io
        .to(user_[index][0])
        .emit("challenge", { challenger: auth.username, char: payload.char });
    }
  });

  socket.on("accept", function(payload) {
    model.setMatch(
      {
        challenger: payload.to,
        accept: auth.username,
        challengerChar: payload.challengerChar,
        acceptChar: payload.acceptChar
      },
      roomName => {
        console.log(model.getMatch());
        console.log(model.getUser(payload.to)[0]);
        io.to(model.getUser(payload.to)[0]).emit("accepted", roomName);
        io.to(model.getUser(payload.from)[0]).emit("accepted", roomName);
      }
    );
  });

  socket.on("matchMaking", function(payload) {
    model.matchMaking(
      {
        username: auth.username,
        char: payload.char
      },
      function(opponent) {
        model.setMatch(
          {
            challenger: opponent.username,
            accept: auth.username,
            challengerChar: opponent.char,
            acceptChar: payload.char
          },
          roomName => {
            io.to(model.getUser(auth.username)[0]).emit("accepted", roomName);
            io
              .to(model.getUser(opponent.username)[0])
              .emit("accepted", roomName);
          }
        );
      }
    );
  });

  socket.on("cancelMatch", function() {
    model.matchMakingCancel({username: auth.username})
  })

  socket.on("disconnect", function() {
    let deleted = model.offline(socket.id);
    console.log(deleted);
    let user_ = model.getUser();
    console.log("user disconnected");
    io.emit("users", user_);
  });
};
