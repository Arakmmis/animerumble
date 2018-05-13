const statusApply = require("./statusApply.js");
const energyManagement = require("./energyManagement.js");

function execute(package) {
  if (package.offense.status.onAttack.length > 0) {
    statusApply(package, package.move, "offense");
  } else {
    if (package.target.status.onReceive.length > 0) {
      statusApply(package, package.move, "target");
    } else {
      package.target = package.move(package);
    }
  }
}

function skillApply(payload) {
  let val = payload.offense.skill[payload.skill].val;
  val = Array.isArray(val) ? val[payload.recursive] : val; //Attack with different val mechanic

  let package = {
    offense: payload.offense,
    target: payload.target,
    val: val,
    skillIndex: payload.skill,
    skill: payload.offense.skill[payload.skill],
    move: payload.offense.skill[payload.skill].move,
    recursive: payload.recursive,
    myEnergy: payload.myEnergy,
    theirEnergy: payload.theirEnergy,
    myTurn: payload.myTurn,
    theirTurn: payload.theirTurn,
    state: payload.state,
    isCounter: false
  };

  execute(package);

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
