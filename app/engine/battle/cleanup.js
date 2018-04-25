function cleanup(x) {
    if (x.hp < 0) {
      x.hp = 0;
    }
    if (x.hp > 100) {
      x.hp = 100;
    }
  }

  module.exports = cleanup;