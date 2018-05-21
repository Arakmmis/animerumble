const management = require("./management.js");
const indicateTurn = require("./indicateTurn.js");
const onSelfApply = require("./onSelfApply.js");
const _ = require("lodash");

function pattern(source, instant) {
  if (source.length > 0) {
    source.forEach((s, t) => {
      let instantEval = s.period === "instant" ? true : false;
      if (instantEval === instant) {
        s.name;
        s.active -= 1;
        if (s.type === "dd" && s.val <= 0) {
          s.active = 0;
        }
        if (s.type === "protect") {
          s.usage = 0;
          s.defense = s.val;
        }
        if (s.type === "unique") {
          s.usage = 0;
        }
        if (s.type === "charge" && s.val <= 0) {
          s.active = 0;
        }
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
          //Next Turn Prevent
          if (s.nextTurn === true && s.active > 1) {
            s.active -= 1;
            return;
          }

          onSelfApply({
            offense: s.owner,
            target: x.nameId,
            skill: s,
            myEnergy: state.energy[myTurn],
            theirEnergy: state.energy[theirTurn],
            state: state,
            stateCopy: stateCopy,
            myTurn: myTurn,
            theirTurn: theirTurn,
            sequence: 'postsequence'
          });
        }
      });
      x.status.onSelf = x.status.onSelf.filter(x => x.active !== 0);
    }
    x.status.onAttack = pattern(x.status.onAttack, true);
    x.status.onReceive = pattern(x.status.onReceive, true);
    x.status.onState = pattern(x.status.onState, true);
  }

  if (state.turn % 2 === turn) {
    if (x.status.onSelf.length > 0) {
      x.status.onSelf.forEach((s, t) => {
        if (s.period !== "instant") {
          s.modify(
            {
              offense: x,
              val: s.val,
              active: s.active,
              myEnergy: state.energy[myTurn],
              theirEnergy: state.energy[theirTurn],
              state: state,
              skill: s,
              myTurn: myTurn,
              theirTurn: theirTurn,
              sequence: 'postsequence'
            },
            s
          );
          s.active -= 1;
        }
      });
      x.status.onSelf = x.status.onSelf.filter(x => x.active !== 0);
    }
    x.status.onAttack = pattern(x.status.onAttack, false);
    x.status.onReceive = pattern(x.status.onReceive, false);
    x.status.onState = pattern(x.status.onState, false);

    //Skill
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
