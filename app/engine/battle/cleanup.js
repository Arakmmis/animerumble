function cleanup(x) {
    if (x.hp <= 0) {
      x.hp = 0;
      x.status = {
        onReceive: [],
        onAttack: [],
        onSelf: [],
        onState: []
      }
    }
    if (x.hp > 100) {
      x.hp = 100;
    }
  }

  module.exports = cleanup;