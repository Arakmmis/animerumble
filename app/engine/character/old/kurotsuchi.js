let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "lockserJuvia"
};

let status = {
  invulnerable: library.invulnerable({
    
  }),
  boost: library.boost({
    
  }),
  stun: library.stun({
    
  })
};

let skills = {
  skill1: {
    name: "Earth Flow Spears",
    type: "attack",
    val: 15,
    cooldown: 0,
    description: "Deal 15 physical damage.",
    mana: 1,
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Opening Earth Rising Excavation",
    type: "attack",
    val: 0,
    cooldown: 3,
    description: "Increase physical damage taken by 10, this turn.",
    target: "enemy",
    mana: 2,
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.boost, this.name, 2)
      );
    }
  },
  skill3: {
    name: "Quicklime Congealing Technique",
    type: "attack",
    val: 10,
    cooldown: 3,
    description: "Stun, for 1 turn.",
    target: "enemy",
    mana: 2,
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.stun, this.name, 3)
      );
    }
  },
  skill4: {
    name: "Earth Dome",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "Become invulnerable, for 1 turn.",
    target: "self",
    mana: 2,
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invulnerable, this.name, 4)
      );
    }
  }
};

let character = {
  name: "Kurotsuchi",
  id: "kurotsuchi",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
