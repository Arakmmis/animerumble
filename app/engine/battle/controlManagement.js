const indicateTurn = require("./indicateTurn.js");
const management = require("./management.js");

function controlManagement(state) {
  let { myTurn, theirTurn } = indicateTurn(state);

  //Self Invul
  state[myTurn].forEach(x => {
    let onState = x.status.onState;
    let invulnerable = onState.some(x => x.type === "invulnerable");
    let nameId = x.nameId;
    console.log("control invul", invulnerable, nameId);

    if (invulnerable === true) {
      x.status.onAttack = x.status.onAttack.filter(
        x => (x.persistence === "control" && x.owner !== nameId ? false : true)
      );
      x.status.onReceive = x.status.onReceive.filter(
        x => (x.persistence === "control" && x.owner !== nameId ? false : true)
      );
      x.status.onSelf = x.status.onSelf.filter(
        x => (x.persistence === "control" && x.owner !== nameId ? false : true)
      );
      x.status.onState = x.status.onState.filter(
        x => (x.persistence === "control" && x.owner !== nameId ? false : true)
      );
    }
  });

  //Opponent Stun
  state[theirTurn].forEach(x => {
    let onState = x.status.onState;
    let stun = onState.some(x => x.type === "stun");
    let nameId = x.nameId;
    console.log("control stun", stun, nameId);
    if (stun === true) {
      x.status.onAttack = x.status.onAttack.filter(
        x => (x.persistence === "control" && x.owner === nameId ? false : true)
      );
      x.status.onReceive = x.status.onReceive.filter(
        x => (x.persistence === "control" && x.owner === nameId ? false : true)
      );
      x.status.onSelf = x.status.onSelf.filter(
        x => (x.persistence === "control" && x.owner === nameId ? false : true)
      );
      x.status.onState = x.status.onState.filter(
        x => (x.persistence === "control" && x.owner === nameId ? false : true)
      );

      console.log(x.status);

      state[myTurn].forEach(s => {
        s.status.onAttack = s.status.onAttack.filter(
          x =>
            x.persistence === "control" && x.owner === nameId ? false : true
        );
        s.status.onReceive = s.status.onReceive.filter(
          x =>
            x.persistence === "control" && x.owner === nameId ? false : true
        );
        s.status.onSelf = s.status.onSelf.filter(
          x =>
            x.persistence === "control" && x.owner === nameId ? false : true
        );
        s.status.onState = s.status.onState.filter(
          x =>
            x.persistence === "control" && x.owner === nameId ? false : true
        );
      });
    }
  });

  //Self Stun
  state[myTurn].forEach(x => {
    let onState = x.status.onState;
    let stun = onState.some(x => x.type === "stun");
    let nameId = x.nameId;
    console.log("control stun", stun, nameId);
    if (stun === true) {
      x.status.onAttack = x.status.onAttack.filter(
        x => (x.persistence === "control" && x.owner === nameId ? false : true)
      );
      x.status.onReceive = x.status.onReceive.filter(
        x => (x.persistence === "control" && x.owner === nameId ? false : true)
      );
      x.status.onSelf = x.status.onSelf.filter(
        x => (x.persistence === "control" && x.owner === nameId ? false : true)
      );
      x.status.onState = x.status.onState.filter(
        x => (x.persistence === "control" && x.owner === nameId ? false : true)
      );

      console.log(x.status);

      state[theirTurn].forEach(s => {
        s.status.onAttack = s.status.onAttack.filter(
          x =>
            x.persistence === "control" && x.owner === nameId ? false : true
        );
        s.status.onReceive = s.status.onReceive.filter(
          x =>
            x.persistence === "control" && x.owner === nameId ? false : true
        );
        s.status.onSelf = s.status.onSelf.filter(
          x =>
            x.persistence === "control" && x.owner === nameId ? false : true
        );
        s.status.onState = s.status.onState.filter(
          x =>
            x.persistence === "control" && x.owner === nameId ? false : true
        );
      });
    }
  });
}

module.exports = controlManagement;
