let status = require("./status.js");
let constructor = require("./constructor.js");

module.exports = {
  uzumakiNarutoCombo: {
    name: "Uzumaki Naruto Combo",
    type: "attack",
    val: 20,
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        payload.val
      );
      payload.target.hp = payload.target.hp - payload.val;
      return payload.target;
    }
  },
  rasengan: {
    name: "Rasengan",
    type: "attack",
    val: 45,
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        payload.val
      );
      payload.target.hp = payload.target.hp - payload.val;
      return payload.target;
    }
  },
  shadowClones: {
    name: "Shadow CLones",
    type: "attack",
    val: 10,
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        payload.val
      );
      payload.target.modifier.push(new constructor.status(status.shadowClones), new constructor.status(status.boost));
      return payload.target;
    }
  },
  invincible: {
    name: "Invincible",
    type: "attack",
    val: 10,
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        payload.val
      );
      payload.target.modifier.push(new constructor.status(status.invincible));
      return payload.target;
    }
  },
  attack: {
    name: "attack",
    type: "attack",
    val: 10,
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        payload.val
      );
      payload.target.hp = payload.target.hp - payload.val;
      return payload.target;
    }
  },
  attackBuff: {
    name: "attackBuff",
    type: "modifier",
    val: 10,
    move: function(payload) {
      payload.target.modifier.push(new constructor.status(status.boost));
      return payload.target;
    }
  },
  protect: {
    name: "protect",
    type: "modifier",
    val: 10,
    move: function(payload) {
      payload.target.modifier.push(new constructor.status(status.protect));
      return payload.target;
    }
  },
  poison: {
    name: "poison",
    type: "self",
    val: 10,
    move: function(payload) {
      payload.target.status.push(new constructor.status(status.poison));
      return payload.target;
    }
  },
  hurt: {
    type: "hurt",
    type: "attack",
    val: 20,
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        this.damage
      );
      payload.target.hp = payload.target.hp - payload.val;
      return payload.target;
    }
  },
  heal: {
    name: "heal",
    type: "heal",
    val: 20,
    move: function(payload) {
      console.log("heal", payload.target.name, payload.target.hp, this.val);
      payload.target.hp = payload.target.hp + payload.val;
      return payload.target;
    }
  }
};
