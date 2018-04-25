const indicateTurn = require("./indicateTurn.js");

function pattern(source) {
  if (source.length > 0) {
    source.forEach((s, t) => {
      source[t].name;
      source[t].active -= 1;
      if (source[t].type === "dd" && source[t].val <= 0) {
        source[t].active = 0;
      }
      if (source[t].type === "reduce" && source[t].usage > 0) {
        source[t].usage = 0;
        console.log(source);
      }
    });
    return source.filter(x => x.active !== 0);
  } else {
    return [];
  }
}

function postSequence(x, turn, state) {
  let { myTurn, theirTurn } = indicateTurn(state);

  if (state.turn % 2 !== turn) {
    if (x.status.onSelf.length > 0) {
      x.status.onSelf.forEach((s, t) => {
        if (x.status.onSelf[t].period === "instant") {
          console.log("BEFORE", x);
          x.status.onSelf[t].modify({
            offense: x,
            active: x.status.onSelf[t].active,
            myEnergy: state.energy[myTurn],
            theirEnergy: state.energy[theirTurn]
          });
          x.status.onSelf[t].active -= 1;
          console.log(x);
        }
      });
      // x.status.onSelf = x.status.onSelf.filter(x => x.active !== 0);
    }
  }

  if (state.turn % 2 === turn) {
    console.log("turn", x);
    if (x.status.onSelf.length > 0) {
      x.status.onSelf.forEach((s, t) => {
        if (x.status.onSelf[t].period !== "instant") {
          x.status.onSelf[t].modify({
            offense: x,
            active: x.status.onSelf[t].active,
            myEnergy: state.energy[myTurn],
            theirEnergy: state.energy[theirTurn]
          });
          x.status.onSelf[t].active -= 1;
          console.log(x);
        }
      });
      x.status.onSelf = x.status.onSelf.filter(x => x.active !== 0);
    }
    x.status.onAttack = pattern(x.status.onAttack);
    x.status.onReceive = pattern(x.status.onReceive);
    x.status.onState = pattern(x.status.onState);
    x.skill.forEach(s => {
      if (s.state === "cooldown") {
        if (s.counter > 0) {
          s.counter -= 1;
        } else {
          s.counter = s.cooldown;
          s.state = "active";
        }
      }
    });
  }
}

module.exports = postSequence;
