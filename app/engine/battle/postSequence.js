const management = require("./management.js");
const indicateTurn = require("./indicateTurn.js");
const onSelfApply = require("./onSelfApply.js");
const _ = require("lodash");

function pattern(source) {
  if (source.length > 0) {
    source.forEach((s, t) => {
      s.name;
      s.active -= 1;
      if (s.type === "dd" && s.val <= 0) {
        s.active = 0;
      }
      if (s.type === "protect") {
        s.usage = 0;
        s.info = s.val;
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

function persistenceCheck(skill, owner, state, context) {
  let casterid = owner;
  let caster = team(casterid, state);
  let evaluate;
  if (context === "attacker") {
    let onState = caster.status.onState;
    let stun = management.stun(onState, skill);
    console.log("persistence check", stun);
    evaluate = stun;
  } else if (context === "receiver") {
    let onState = caster.status.onState;
    let invulnerable = management.invulnerable(onState, skill);
    evaluate = invulnerable;
    // evaluate = caster.status.onState.some(x => x.type === "invulnerable");
  }
  if (
    evaluate === true &&
    (skill.persistence === "action" || skill.persistence === "control")
  ) {
    return true;
  } else {
    return false;
  }
}

function postSequence(x, turn, state) {
  let { myTurn, theirTurn } = indicateTurn(state);
  let stateCopy = _.cloneDeep(state);

  if (state.turn % 2 !== turn) {
    if (x.status.onSelf.length > 0) {
      x.status.onSelf.forEach((s, t) => {
        if (s.period === "instant") {
          onSelfApply({
            offense: s.owner,
            target: x.nameId,
            skill: s,
            myEnergy: state.energy[myTurn],
            theirEnergy: state.energy[theirTurn],
            store: state,
            stateCopy: stateCopy,
            myTurn: myTurn
          });
        }
      });
    }
  }

  if (state.turn % 2 === turn) {
    if (x.status.onSelf.length > 0) {
      x.status.onSelf.forEach((s, t) => {
        if (s.period !== "instant") {
          s.modify({
            offense: x,
            val: s.val,
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
