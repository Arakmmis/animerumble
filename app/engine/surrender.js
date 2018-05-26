//Library
const _ = require("lodash");
const helper = require("./helper.js");

//Modules
const indicateTurn = require("./battle/indicateTurn.js");

function surrender(payload, store, callback) {
  let state = _.cloneDeep(store);
  let { myTurn, theirTurn } = indicateTurn(state);
  state.log = [];

  let winner = state.team.teamEven !== payload ? "teamEven" : "teamOdd";
  let loser = state.team.teamEven === payload ? "teamEven" : "teamOdd";

  state.winner = {
    state: true,
    name: state.team[winner],
    loser: state.team[loser]
  };

  //Exit
  state.turn = state.turn + 1;
  callback(state);
}

module.exports = surrender;
