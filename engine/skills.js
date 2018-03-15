module.exports.skills = {
  attack: {
    name: "attack",
    type: "attack",
    damage: 10,
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        payload.damage
      );
      payload.target.hp = payload.target.hp - payload.damage;
      return payload.target;
    }
  },
  move: {
    type: "hurt",
    type: "attack",
    damage: 20,
    apply: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        this.damage
      );
      payload.target.hp = payload.target.hp - this.damage;
      return payload.target;
    }
  },
  heal: {
    name: "heal",
    type: "heal",
    damage: 20,
    val: 20,
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        this.damage
      );
      payload.target.hp = payload.target.hp + this.val;
      return payload.target;
    }
  }
};
