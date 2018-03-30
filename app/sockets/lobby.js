let uniqid = require("uniqid");
let model = require("../helper/model.js")
let character = require("../engine/character/index.js")

module.exports = function(io, socket) {
  socket.on("connectLobby", payload => {       
    let user_ = model.getUser() 
    io.emit("users", user_);
    console.log(socket.id);
    console.log(payload)
    let index = user_.findIndex(x => x[2] === payload.token)
    console.log(index)    
    // socket.id = payload.token
    if(index !== -1){
      socket.emit("logged", {
        user: user_[index][1],
        token: user_[index][2],
        character: character.map(x => {
          return {
            name: x.name,
            id: x.id
          }          
        })
      });
      model.updateUser({
        index: index,
        position: 0,
        package: socket.id
      })
      // user_[index][0] = socket.id
    }
  });

  socket.on("log", payload => {
    let user_ = model.getUser() 
    let exist = user_.some(x => x[1] === payload.name);
    if (exist === false) {
      console.log(socket.id);      
      let token = uniqid();
      console.log('new token', token)
      // socket.id = token
      console.log('new socket',socket.id)
      model.setUser([socket.id, payload.name, token]);
      io.emit("users", user_);
      socket.emit("logged", {
        user: payload.name,
        token: token,
        character: character.map(x => {
          return {
            name: x.name,
            id: x.id
          }          
        })
      });
    } else {
      socket.emit("exist");
    }
  });

  socket.on("challenge", function(payload) {
    let user_ = model.getUser()     
    let index = user_.findIndex(x => x[1] === payload.to)
    if(index !== -1){
      console.log(user_[index][0])
      io.to(user_[index][0]).emit("challenge", {challenger: payload.from, char: payload.char});
    }    
  });

  socket.on('accept', function(payload) {
    model.setMatch({
      challenger: payload.to,
      accept: payload.from,
      challengerChar: payload.challengerChar,
      acceptChar: payload.acceptChar
    })

    console.log(model.getMatch())
    console.log(model.getUser(payload.to)[0])
    io.to(model.getUser(payload.to)[0]).emit('accepted', payload.to+payload.from)
    io.to(model.getUser(payload.from)[0]).emit('accepted', payload.to+payload.from)

  })

  socket.on("disconnect", function() {
    let user_ = model.getUser() 
    console.log("user disconnected");
    io.emit("users", user_);
  });
};
