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

  if (owner === "offense" && package.skill.noCounter === false) {
    let onAttack = source.onAttack;
    let onState = source.onState;
    let counter = management.counter(onAttack, onState, package);
    console.log("Counter", counter);
    if (counter) {
      package.isCounter = true;
    }
  }

  if (owner === "target" && package.skill.noCounter === false) {
    let onReceive = source.onReceive;
    let onState = source.onState;
    let counter = management.counter(onReceive, onState, package);
    console.log("Counter", counter);
    if (counter) {
      package.isCounter = true;
    }
  }

  source[status].forEach((x, i, a) => {
    if (x.persistence === "action" || x.persistence === "control") {
      // let attacker = persistenceCheck(
      //   x,
      //   package.offense,
      //   package.state,
      //   "attacker"
      // );
      // let receiver = persistenceCheck(
      //   x,
      //   package.target,
      //   package.state,
      //   "receiver"
      // );
      let attacker = false;
      let receiver = false;

      if (attacker === false && receiver === false && x.type !== "counter") {
        x.modify(package, x);
      }
    } else if (x.persistence === "instant" && x.type !== "counter") {
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
          if (!payload.isCounter) {
            payload.val = payload.val < 0 ? 0 : payload.val;
            move(payload, payload.skill);
          }
        });
      } else {
        if (!payload.isCounter) {
          payload.val = payload.val < 0 ? 0 : payload.val;
          move(payload, payload.skill);
        }
      }
    });
  } else {
    statusIterator(payload, "target", "onReceive", (payload, callback) => {
      payload.val = payload.val < 0 ? 0 : payload.val;
      move(payload, payload.skill);
    });
  }
}

module.exports = statusApply;
