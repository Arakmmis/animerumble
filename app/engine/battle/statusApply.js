const management = require("./management.js");

function statusIterator(package, owner, status, callback) {
  let source = package[owner].status;
  let evaluate;
  if (owner === "offense") {
    let onState = source.onState;
    // let skill = package.offense.skill[package.skill];
    let stun = management.stun(onState, package.skill);
    // evaluate = source.onState.some(x => x.type === "stun") ? true : false;
    evaliate = stun;
  } else if (owner === "target") {
    evaluate = source.onState.some(x => x.type === "invulnerable")
      ? true
      : false;
  }

  source[status].forEach((x, i, a) => {
    if (x.persistence === "action" || x.persistence === "control") {
      x.modify(package, x);
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
