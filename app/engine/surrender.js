//Library
const _ = require("lodash");
const helper = require("./helper.js");

//Modules
const indicateTurn = require("./battle/indicateTurn.js");

function surrender(payload, store, callback) {
  let state = _.cloneDeep(store);
  let { myTurn, theirTurn } = indicateTurn(state);

  let winner = state.team.teamEven !== payload ? "teamEven" : "teamOdd";

  state.winner = {
    state: true,
    name: state.team[winner]
  };

  //Exit
  state.turn = state.turn + 1;
  callback(state);
}

module.exports = surrender;
