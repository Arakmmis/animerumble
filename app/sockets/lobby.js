let uniqid = require("uniqid");
let model = require("../helper/model.js");
let character = require("../engine/character/index.js");

module.exports = function(io, socket) {
  let auth = socket.request.user;

  //Connecting
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
            id: x.id,
            anime: x.anime
          };
        })
      });
    }
  });

  //Challenge
  socket.on("challenge", function(payload) {
    let user_ = model.getUser();
    let index = user_.findIndex(x => x[1] === payload.defender);
    if (index !== -1) {
      let challenge_ = model.makeChallenge(
        {
          challenger: auth.username,
          challengerChar: payload.char,
          defender: payload.defender
        },
        () => {
          io.to(user_[index][0]).emit("challenged", {
            challenger: auth.username
          });
        }
      );
    }
  });

  socket.on("accept", function(payload) {
    let challenge_ = model.acceptChallenge(
      {
        username: auth.username
      },
      challenge => {
        model.setMatch(
          {
            challenger: challenge.challenger,
            accept: challenge.defender,
            challengerChar: challenge.challengerChar,
            acceptChar: payload.char
          },
          roomName => {
            console.log(model.getUser(payload.to)[0]);
            io
              .to(model.getUser(challenge.challenger)[0])
              .emit("accepted", roomName);
            io
              .to(model.getUser(challenge.defender)[0])
              .emit("accepted", roomName);
          }
        );
      }
    );
  });

  //Match Making
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
    model.matchMakingCancel({ username: auth.username });
  });

  //Disconnect
  socket.on("disconnect", function() {
    let deleted = model.offline(socket.id);
    io.emit("users", deleted);
    console.log("user disconnected: " + auth.username);
  });
};
