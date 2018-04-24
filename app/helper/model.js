const uniqid = require("uniqid");

//Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//User
let user = [];

function setUser(payload) {
  user.push(payload);
}

function getUser(payload = undefined) {
  if (payload === undefined) {
    return user;
  }
  let index = user.findIndex(x => x[1] === payload || x[2] === payload);
  if (index !== -1) {
    return user[index];
  }
}

function updateUser(payload) {
  var { index, position, package } = payload;
  user[index][position] = package;
}

function deleteUser(payload) {
  user = user.filter(x => x[2] !== payload);
}

//Match
let match = [];

function setMatch(payload, callback) {
  let { challenger, accept, challengerChar, acceptChar } = payload;
  let roomName = uniqid.time();
  let random = getRandomInt(2);
  match.push({
    challenger: {
      name: challenger,
      char: challengerChar,
      order: random
    },
    accept: {
      name: accept,
      char: acceptChar,
      order: 1 - random
    },
    room: roomName
  });
  callback(roomName);
}

function getMatch(payload = undefined) {
  if (payload === undefined) {
    return match;
  }
  let index = match.findIndex(
    x =>
      x.challenger.name === payload ||
      x.accept.name === payload ||
      x.room == payload
  );
  if (index !== -1) {
    return match[index];
  }
  return undefined;
}

function deleteMatch(payload) {
  match = match.filter(x => x.room !== payload);
  console.log(match);
}

module.exports = {
  setUser: setUser,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  setMatch: setMatch,
  getMatch: getMatch,
  deleteMatch: deleteMatch
};
