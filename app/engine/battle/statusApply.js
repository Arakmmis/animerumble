const management = require("./management.js");

function persistenceCheck(skill, owner, state, context) {
  let caster = owner;
  let evaluate;
  if (context === "attacker") {
    let onState = caster.status.onState;
    let stun = management.stun(onState, skill);
    evaluate = stun;
  } else if (context === "receiver") {
    let onState = caster.status.onState;
    let invulnerable = management.invulnerable(onState, skill);
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

function statusIterator(package, owner, status, callback) {
  let source = package[owner].status;
  // let evaluate;
  // if (owner === "offense") {
  //   let onState = source.onState;
  //   let stun = management.stun(onState, package.skill);
  //   evaluate = stun;
  // } else if (owner === "target") {
  //   let onState = source.onState;
  //   let invulnerable = management.invulnerable(onState, package.skill);
  //   evaluate = invulnerable;
  // }

  source[status].forEach((x, i, a) => {
    if (x.persistence === "action" || x.persistence === "control") {
      let attacker = persistenceCheck(
        x,
        package.offense,
        package.state,
        "attacker"
      );
      let receiver = persistenceCheck(
        x,
        package.target,
        package.state,
        "receiver"
      );

      if (attacker === false && receiver === false) {
        x.modify(package, x);
      }
    } else if (x.persistence === "instant") {
      x.modify(package, x);
    }
    if (i === a.length - 1) {
      callback(package, callback);
    }
  });
}

function statusApply(payload, move, owner) {
  if (owner === "offense") {
    statusIterator(payload, "offense", "onAttack", (payload, callback) => {
      //Multi Mechanics
      if (payload.skill.isMulti) {
        payload.val = payload.val * payload.skill.multi;
      }

      if (payload.target.status.onReceive.length > 0) {
        statusIterator(payload, "target", "onReceive", (payload, callback) => {
          move(payload);
        });
      } else {
        move(payload);
      }
    });
  } else {
    statusIterator(payload, "target", "onReceive", (payload, callback) => {
      move(payload);
    });
  }
}

module.exports = statusApply;
