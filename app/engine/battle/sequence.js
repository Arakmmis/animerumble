const skillApply = require("./skillApply.js");
const indicateTurn = require("./indicateTurn.js");
const helper = require("../helper.js");

function sequence(state, payload) {
  let { myTurn, theirTurn } = indicateTurn(state);

  function team(owner) {
    let index = state.teamOdd.findIndex(x => x.name === owner);
    if (index > -1) {
      return state.teamOdd[index];
    } else {
      return state.teamEven[state.teamEven.findIndex(x => x.name === owner)];
    }
  }

  payload.forEach(payload => {
    let offense = team(payload.offense);
    if (payload.aim === "randomenemy") {
      let target = payload.target.slice(0, 1);
      // let random = payload.target[helper.getRandomInt(2)];
      let random = helper.shuffle(payload.target);
      payload.target = target.concat(random);
    }

    payload.target.forEach((x, t, a) => {
      let target = team(x);
      if (target === undefined) {
        console.log(payload, target);
        return;
      }
      target = skillApply({
        offense: offense,
        target: target,
        skill: payload.skill,
        myEnergy: state.energy[myTurn],
        theirEnergy: state.energy[theirTurn],
        state: state,
        myTurn: myTurn,
        theirTurn: theirTurn,
        recursive: t,
        last: t === a.length - 1 ? true : false
      });
    });
  });
}

module.exports = sequence;
