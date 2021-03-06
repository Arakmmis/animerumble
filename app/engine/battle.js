//Library
const _ = require("lodash");
const helper = require("./helper.js");

//Modules
const indicateTurn = require("./battle/indicateTurn.js");
const sequence = require("./battle/sequence.js");
const postSequence = require("./battle/postSequence.js");
const cleanup = require("./battle/cleanup.js");
const controlManagement = require("./battle/controlManagement.js");
const energyManagement = require("./battle/energyManagement.js");
const energyDistribution = require("./battle/energyDistribution.js");

function battle(payload, store, callback) {
  // console.log(store);
  console.log(store.team, store.turn, store.winner);
  console.log(payload);
  let state = _.cloneDeep(store);
  state.timestamp = Date.now();
  let { myTurn, theirTurn } = indicateTurn(state);
  console.log(myTurn);
  state.log = payload;

  if (payload[0].msg === "exchange") {
    state.energy[myTurn][payload[0].val] += 1;
    energyManagement(state.energy[myTurn], payload[1]);
    energyManagement(state.energy[myTurn], payload[2]);
    payload.splice(0, 3);
  } else {
    energyManagement(state.energy[myTurn], payload[0]);
    payload.shift();
  }

  //Sequence
  sequence(state, payload);

  //Post Sequence
  state.teamEven.forEach(x => {
    postSequence(x, 0, state);
    cleanup(x, state, state.energy.teamEven);
  });
  state.teamOdd.forEach(x => {
    postSequence(x, 1, state);
    cleanup(x, state, state.energy.teamOdd);
  });
  controlManagement(state);

  //Energy Distribution
  energyDistribution(state);

  //Winner
  if (state.teamOdd.filter(x => x.hp > 0).length === 0) {
    state.winner = {
      state: true,
      name: state.team.teamEven,
      loser: state.team.teamOdd
    };
  } else if (state.teamEven.filter(x => x.hp > 0).length === 0) {
    state.winner = {
      state: true,
      name: state.team.teamOdd,
      loser: state.team.teamEven
    };
  }

  //Exit
  state.turn = state.turn + 1;
  callback(state);
}

module.exports = battle;
