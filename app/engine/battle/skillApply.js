const statusApply = require("./statusApply.js");
const energyManagement = require("./energyManagement.js");

function skillApply(payload) {
  let package = {
    offense: payload.offense,
    target: payload.target,
    val: payload.offense.skill[payload.skill].val,
    skill: payload.skill,
    move: payload.offense.skill[payload.skill].move,
    recursive: payload.recursive,
    myEnergy: payload.myEnergy,
    theirEnergy: payload.theirEnergy,
    myTurn: payload.myTurn,
    store: payload.store
  };
  if (payload.offense.status.onAttack.length > 0) {
    statusApply(package, package.move, "offense");
  } else {
    if (payload.target.status.onReceive.length > 0) {
      statusApply(package, package.move, "target");
    } else {
      payload.target = package.move(package);
    }
  }

  //Cleanup
  payload.offense.skill[payload.skill].state = "cooldown";
  if (package.recursive === 0) {
    energyManagement(
      payload.myEnergy,
      payload.offense.skill[payload.skill].energy
    );
  }

  return payload.target;
}

module.exports = skillApply;
