let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "namikazeMinato"
};

let status = {
  invincible: library.invincible({
    owner: info.id
  }),
  kunaiStab: library.bleed({
    name: "Inner Sakura",
    val: 5,   
    active: 3,
    owner: info.id    
  }),
  allowRasengan: {
    name: "allowRasengan",
    type: "allow",
    active: 4,
    allow: "Flash Rasengan",
    modify: function(payload) {
      payload.val -= this.val;
    },
    owner: info.id
  }
};

let skills = {
  skill1: {
    name: "Flying Thunder God Mark",
    type: "attack",
    val: 15,
    cooldown: 1,
    description:
      "Deal 15 physical damage. Allow Flash Rasengan, the following turn.",
    mana: 3,
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.hp -= payload.val;
      payload.offense.status.onState.push(
        new constructor.status(status.allowRasengan, this.name, 1)
      );
    }
  },
  skill2: {
    name: "Flash Rasengan",
    type: "attack",
    val: 30,
    cooldown: 3,
    description: "Deal 30 melee damage.",
    required: true,
    target: "enemy",
    mana: 3,
    energy: {
      s: 1,
      r: 2
    },
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Kunai Stab",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "Increases physical damage taken by 5, for 3 turns.",
    target: "enemy",
    mana: 1,
    energy: {
      s: 1,
      w: 3
    },
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.kunaiStab, this.name, 3)
      );
    }
  },
  skill4: {
    name: "Blade Deflect",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "Become invulnerable, for 1 turn.",
    target: "self",
    mana: 2,
    energy: {
      a: 2,
      i: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 4)
      );
    }
  }
};

let character = {
  name: "Namikaze Minato",
  id: "namikazeMinato",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
