const _ = require("lodash");
const management = require("./management.js");

function team(ownerid, state) {
  let index = state.teamOdd.findIndex(x => x.nameId === ownerid);
  if (index > -1) {
    return state.teamOdd[index];
  } else {
    return state.teamEven[state.teamEven.findIndex(x => x.nameId === ownerid)];
  }
}

function persistenceCheck(skill, owner, state, context) {
  let caster = owner;
  let evaluate;
  if (context === "attacker") {
    let onState = caster.status.onState;
    // let stun = management.stun(onState, skill);
    let stun = onState.some(s => s.type === "stun");
    evaluate = stun;
  } else if (context === "receiver") {
    let onState = caster.status.onState;
    // let invulnerable = management.invulnerable(onState, skill);
    let invulnerable = onState.some(s => s.type === "invulnerable");
    evaluate = invulnerable;
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

function selfApply(package) {
  let s = package.skill;
  let nameId = package.target.nameId;
  let state = package.state;
  let stateCopy = package.stateCopy;

  if (s.period === "instant") {
    let attacker = persistenceCheck(s, package.offense, stateCopy, "attacker");
    let receiver = persistenceCheck(s, package.target, stateCopy, "receiver");
    if (attacker === false && receiver === false) {
      s.modify(
        {
          offense: package.target,
          val: package.val,
          active: s.active,
          myEnergy: package.myEnergy,
          theirEnergy: package.theirEnergy,
          skill: s,
          state: state,
          myTurn: package.myTurn,
          theirTurn: package.theirTurn
        },
        s
      );
    }
    s.active -= 1;
  }
}

function receiveApply(package, callback) {
  package.target.status.onReceive.forEach(x => x.modify(package, x));
  callback(package);
}

function postApply(payload) {
  let state = payload.state;
  let offense = team(payload.offense, state);
  let target = team(payload.target, state);

  let package = {
    offense: offense,
    target: target,
    val: payload.skill.val,
    skill: payload.skill,
    myEnergy: payload.myEnergy,
    theirEnergy: payload.theirEnergy,
    myTurn: payload.myTurn,
    theirTurn: payload.theirTurn,
    state: state,
    stateCopy: payload.stateCopy
  };

  if (package.target.status.onReceive.length > 0) {
    receiveApply(package, x => {
      selfApply(x);
    });
  } else {
    selfApply(package);
  }
}

module.exports = postApply;
