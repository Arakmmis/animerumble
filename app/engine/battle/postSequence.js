const indicateTurn = require("./indicateTurn.js");
const _ = require('lodash')

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
      }
    });
    return source.filter(x => x.active !== 0);
  } else {
    return [];
  }
}

function team(ownerid, state) {
  let index = state.teamOdd.findIndex(x => x.nameId === ownerid);
  if (index > -1) {
    return state.teamOdd[index];
  } else {
    return state.teamEven[state.teamEven.findIndex(x => x.nameId === ownerid)];
  }
}

function persistenceCheck(skill, state) {
  let casterid = skill.owner;
  console.log('persistence', casterid)
  let caster = team(casterid, state);
  let stun = caster.status.onState.some(x => x.type === "stun");
  console.log(casterid, caster, stun)
  if (stun === true && x.persistence === 'action') {
    return true;
  } else {
    return false;
  }
}

function postSequence(x, turn, state) {
  let { myTurn, theirTurn } = indicateTurn(state);
  let stateCopy = _.cloneDeep(state)

  if (state.turn % 2 !== turn) {
    if (x.status.onSelf.length > 0) {
      x.status.onSelf.forEach((s, t) => {
        let persistence = persistenceCheck(s, stateCopy);
        if (s.period === "instant" && persistence === false) {
          s.modify({
            offense: x,
            active: s.active,
            myEnergy: state.energy[myTurn],
            theirEnergy: state.energy[theirTurn]
          });
          s.active -= 1;
        }
      });
      // x.status.onSelf = x.status.onSelf.filter(x => x.active !== 0);
    }
  }

  if (state.turn % 2 === turn) {
    console.log("turn", x);
    if (x.status.onSelf.length > 0) {
      x.status.onSelf.forEach((s, t) => {
        if (s.period !== "instant") {
          s.modify({
            offense: x,
            active: s.active,
            myEnergy: state.energy[myTurn],
            theirEnergy: state.energy[theirTurn]
          });
          s.active -= 1;          
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
