const _ = require("lodash");
let helper = require("./helper.js");

function energyManagement(energy, skill) {
  if (skill.a > 0) {
    energy.a -= skill.a;
  }
  if (skill.i > 0) {
    energy.i -= skill.i;
  }
  if (skill.s > 0) {
    energy.s -= skill.s;
  }
  if (skill.w > 0) {
    energy.w -= skill.w;
  }
}

function skillApply(payload) {
  console.log(
    "apply",
    payload.target.name,
    payload.target.hp,
    payload.offense.skill[payload.skill].val
  );

  let package = {
    offense: payload.offense,
    target: payload.target,
    val: payload.offense.skill[payload.skill].val,
    skill: payload.skill,
    move: payload.offense.skill[payload.skill].move,
    recursive: payload.recursive
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
      payload.energy,
      payload.offense.skill[payload.skill].energy
    );
  }

  return payload.target;
}

function calculateMana(payload) {
  return (payload.mana -= payload.offense.skill[payload.skill].mana);
}

function statusApply(payload, move, owner) {
  function statusIterator(package, source, callback) {
    source.forEach((x, i, a) => {
      x.modify(package);
      if (i === a.length - 1) {
        callback(package, source, callback);
      }
    });
  }

  if (owner === "offense") {
    statusIterator(
      payload,
      payload.offense.status.onAttack,
      (payload, source, callback) => {
        console.log("test");
        if (payload.target.status.onReceive.length > 0) {
          statusIterator(
            payload,
            payload.target.status.onReceive,
            (payload, source, callback) => {
              move(payload);
            }
          );
        } else {
          move(payload);
        }
      }
    );
  } else {
    statusIterator(
      payload,
      payload.target.status.onReceive,
      (payload, source, callback) => {
        move(payload);
      }
    );
  }
}

function sequence(payload, store, callback) {
  console.log(store);
  let state = _.cloneDeep(store);
  let myTurn = state.turn % 2 === 1 ? "teamOdd" : "teamEven";
  let theirTurn = state.turn % 2 === 0 ? "teamOdd" : "teamEven";
  console.log(myTurn);
  energyManagement(state.energy[myTurn], payload[0]);
  payload.shift();

  //Sequence
  payload.forEach(payload => {
    function team(owner) {
      let index = state.teamOdd.findIndex(x => x.name === owner);
      if (index > -1) {
        return state.teamOdd[index];
      } else {
        return state.teamEven[state.teamEven.findIndex(x => x.name === owner)];
      }
    }
    // function char(turn, name){
    //   let index = state[turn].findIndex(x => x.name === name);
    //   return state[turn][index]
    // }
    // let offense = team(payload.offense);
    // let target = team(payload.target);
    let offense = team(payload.offense);
    payload.target.forEach((x, t) => {
      let target = team(x);
      target = skillApply({
        offense: offense,
        target: target,
        skill: payload.skill,
        energy: state.energy[myTurn],
        store: state,
        recursive: t
      });
    });
  });

  //Post Sequence
  function postSequence(x, turn) {
    function pattern(source) {
      if (source.length > 0) {
        source.forEach((s, t) => {
          source[t].name;
          source[t].active -= 1;
        });
        return source.filter(x => x.active > 0);
      } else {
        return [];
      }
    }

    if (state.turn % 2 === turn) {
      console.log(x)
      if (x.status.onSelf.length > 0) {
        x.status.onSelf.forEach((s, t) => {
          x.status.onSelf[t].modify({
            offense: x,
            active: x.status.onSelf[t].active
          });
          x.status.onSelf[t].active -= 1;
          console.log(x);
        });
        x.status.onSelf = x.status.onSelf.filter(x => x.active > 0);
      }
      x.status.onAttack = pattern(x.status.onAttack);
      x.status.onReceive = pattern(x.status.onReceive);
      x.status.onState = pattern(x.status.onState);
      x.skill.forEach(s => {
        if (s.state === "cooldown") {
          if (s.counter < s.cooldown) {
            s.counter += 1;
          } else {
            s.counter = 0;
            s.state = "active";
          }
        }
      });
    }
  }

  function cleanup(x) {
    if (x.hp < 0) {
      x.hp = 0;
    }
    if (x.hp > 100) {
      x.hp = 100;
    }
  }

  state.teamEven.forEach(x => {
    postSequence(x, 0);
    cleanup(x);
  });
  state.teamOdd.forEach(x => {
    postSequence(x, 1);
    cleanup(x);
  });

  //Mana Distribution
  if (state.turn % 2 === 0) {
    let energy = helper.energy();
    state.energy.teamOdd.a += energy.a;
    state.energy.teamOdd.i += energy.i;
    state.energy.teamOdd.s += energy.s;
    state.energy.teamOdd.w += energy.w;
  } else {
    let energy = helper.energy();
    state.energy.teamEven.a += energy.a;
    state.energy.teamEven.i += energy.i;
    state.energy.teamEven.s += energy.s;
    state.energy.teamEven.w += energy.w;
  }

  //Winner
  if (state.teamOdd.filter(x => x.hp > 0).length === 0) {
    state.winner = {
      state: true,
      name: state.team.teamEven
    };
  } else if (state.teamEven.filter(x => x.hp > 0).length === 0) {
    state.winner = {
      state: true,
      name: state.team.teamOdd
    };
  }

  //Exit
  state.turn = state.turn + 1;
  callback(state);
}

module.exports = sequence;
