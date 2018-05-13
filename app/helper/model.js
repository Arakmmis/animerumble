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
  } else if (payload === "list") {
    console.log(user);
    return user.filter(x => x[3] === "online");
  } else {
    let index = user.findIndex(x => x[1] === payload || x[2] === payload);
    if (index !== -1) {
      return user[index];
    }
  }
}

function updateUser(payload) {
  var { username, position, package, status } = payload;
  let index = user.findIndex(x => x[1] === username);
  if (index !== -1) {
    user[index][position] = package;
    user[index][3] = status;
    let current = user[index];
    return [current, user];
  }
}

function offline(payload) {
  let index = user.findIndex(x => x[0] === payload);
  if (index > -1) {
    user[index][3] = "offline";
  }
  return user;
}

function deleteUser(payload) {
  user = user.filter(x => x[0] !== payload);
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

//Match Making
let queue = [];

function matchMaking(payload, callback) {
  let pool = queue.length;
  let exist = queue.some(x => x.username === payload.username);
  if (!exist) {
    if (pool > 0) {
      //There's Opponent
      let randomIndex = getRandomInt(pool); //Randomly Choose Opponent
      let opponent = queue[getRandomInt(pool)]; //Get Opponent from Queue
      queue = queue.filter(x => x.username !== opponent.username); //Remove Opponent from Queue
      callback(opponent); //Callback to Getter
    } else {
      //No Opponent
      queue.push({ username: payload.username, char: payload.char }); //Add self to Queue
    }
  }
}

function matchMakingCancel(payload, callback) {
  queue = queue.filter(x => x.username !== payload.username); //Remove Opponent from Queue
}

//Challenge
let challenge = [];

function makeChallenge(payload, callback) {
  let exist = challenge.findIndex(
    x => x.challenger === payload.challenger && x.defender === payload.defender
  );
  if (exist > -1) {
    challenge = challenge.filter(
      x =>
        x.challenger !== payload.challenger && x.defender !== payload.defender
    );
  }

  let package = {
    challenger: payload.challenger,
    challengerChar: payload.challengerChar,
    defender: payload.defender
  };

  challenge.push(package);

  callback(package);
}

function acceptChallenge(payload, callback) {
  let exist = challenge.findIndex(x => x.defender === payload.username);
  if (exist > -1) {
    let packet = challenge[exist];
    callback(packet);

    challenge = challenge.filter(
      x => x.challenger !== packet.challenger && x.defender !== payload.username
    );
  }
}

module.exports = {
  setUser,
  getUser,
  updateUser,
  deleteUser,
  setMatch,
  getMatch,
  deleteMatch,
  offline,
  matchMaking,
  matchMakingCancel,
  makeChallenge,
  acceptChallenge
};
