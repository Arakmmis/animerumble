const helper = require("../helper.js");

function cleanup(char, state, currentEnergy) {
  if (char.hp <= 0 && char.alive) {
    char.hp = 0;
    char.status = {
      onReceive: [],
      onAttack: [],
      onSelf: [],
      onState: []
    };

    state.teamOdd.forEach(x => {
      x.status.onAttack = x.status.onAttack.filter(
        s => !(s.nameId === char.nameId && (s.persistence === 'action' || s.persistence === 'control'))
      );
      x.status.onReceive = x.status.onReceive.filter(
        s => !(s.nameId === char.nameId && (s.persistence === 'action' || s.persistence === 'control'))
      );
      x.status.onState = x.status.onState.filter(s => !(s.nameId === char.nameId && (s.persistence === 'action' || s.persistence === 'control')));
      x.status.onSelf = x.status.onSelf.filter(s => !(s.nameId === char.nameId && (s.persistence === 'action' || s.persistence === 'control')));
    });

    state.teamEven.forEach(x => {
      x.status.onAttack = x.status.onAttack.filter(
        s => !(s.nameId === char.nameId && (s.persistence === 'action' || s.persistence === 'control'))
      );
      x.status.onReceive = x.status.onReceive.filter(
        s => !(s.nameId === char.nameId && (s.persistence === 'action' || s.persistence === 'control'))
      );
      x.status.onState = x.status.onState.filter(s => !(s.nameId === char.nameId && (s.persistence === 'action' || s.persistence === 'control')));
      x.status.onSelf = x.status.onSelf.filter(s => !(s.nameId === char.nameId && (s.persistence === 'action' || s.persistence === 'control')));
    });

    let energy = helper.energy(1);
    currentEnergy.a += energy.a;
    currentEnergy.i += energy.i;
    currentEnergy.s += energy.s;
    currentEnergy.w += energy.w;

    char.alive = false;
  }
  if (char.hp > 100) {
    char.hp = 100;
  }
}

module.exports = cleanup;
