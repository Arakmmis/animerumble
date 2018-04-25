const helper = require("../helper.js");

function energyDistribution(state) {
  if (state.turn % 2 === 0) {
    let alive = state.teamOdd.filter(x => x.hp > 0).length;
    let energy = helper.energy(alive);
    state.energy.teamOdd.a += energy.a;
    state.energy.teamOdd.i += energy.i;
    state.energy.teamOdd.s += energy.s;
    state.energy.teamOdd.w += energy.w;
  } else {
    let alive = state.teamEven.filter(x => x.hp > 0).length;
    let energy = helper.energy(alive);
    state.energy.teamEven.a += energy.a;
    state.energy.teamEven.i += energy.i;
    state.energy.teamEven.s += energy.s;
    state.energy.teamEven.w += energy.w;
  }
}

module.exports = energyDistribution;
