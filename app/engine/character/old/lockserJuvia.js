let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "lockserJuvia"
};

let status = {
  invincible: library.invincible({
    owner: info.id
  }),  
  waterLock: {
    name: "Water Lock",
    val: 10,
    type: "skill",
    active: 2,
    modify: function(payload) {      
      if (payload.offense.skill[payload.skill].name === "Water Nebula") {        
        payload.val += this.val;
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Water Lock",
    type: "attack",    
    cooldown: 2,
    description: "Increase damage taken from Water Nebula by 10, for 2 turns.",
    target: "self",
    mana: 2,
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.status.onAttack.push(
        new constructor.status(status.waterLock, this.name, 1)
      );
    }
  },
  skill2: {
    name: "Water Nebula",
    type: "attack",
    val: 25,
    cooldown: 2,
    description: "Deal 25 damage.",
    target: "enemy",
    mana: 3,
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Water Slicer",
    type: "attack",
    val: 15,
    cooldown: 1,
    description: "Deal 15 damage.",
    target: "enemy",
    mana: 1,
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill4: {
    name: "Made of Water",
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
        new constructor.status(status.invincible, this.name, 4)
      );
    }
  }
};

let character = {
  name: "Lockser Juvia",
  id: "lockserJuvia",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
