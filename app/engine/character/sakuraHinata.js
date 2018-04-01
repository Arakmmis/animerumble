let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "sakuraHinata"
};

let status = {
  invincible: library.invincible({
    owner: info.id
  }),
  bleed: library.bleed({
    val: 10,
    active: 2,
    owner: info.id
  }),
  heal: library.heal({
    name: "Chakra Heal",
    val: 15,
    owner: info.id
  })
};

let skills = {
  skill1: {
    name: "Earthquake Punch",
    type: "attack",
    val: 20,
    cooldown: 0,
    description: "Deal 20 physical damage.",
    mana: 2,
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Chakra Heal",
    type: "attack",
    val: 25,
    cooldown: 2,
    description: "Restore 15 health, for 2 turns.",
    target: "ally",
    mana: 2,
    move: function(payload) {
      payload.target.status.onSelf.push(
        new constructor.status(status.heal, this.name, 2)
      );
    }
  },
  skill3: {
    name: "Steroids",
    type: "attack",
    val: 10,
    cooldown: 3,
    description: "Deals 5 affliction damage, for 3 turns.",
    target: "enemy",
    mana: 3,
    move: function(payload) {
      payload.target.status.onSelf.push(
        new constructor.status(status.bleed, this.name, 3)
      );
    }
  },
  skill4: {
    name: "Sakura Hide",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "Become invulnerable, for 1 turn.",
    target: "self",
    mana: 2,
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 4)
      );
    }
  }
};

let character = {
  name: "Sakura Hinata",
  id: "sakuraHinata",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
