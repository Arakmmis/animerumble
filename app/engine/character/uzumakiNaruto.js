let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "uzumakiNaruto",  
}

let status = {
  invincible: library.invincible({
    owner: info.id,
  }),
  stun: library.stun({    
    owner: info.id,
  }),
  protect: library.protect({    
    val: 10,    
    owner: info.id,
  })
};

let skills = {
  skill1: {
    name: "Rasengan",
    type: "attack",
    val: 5,
    cooldown: 1,
    description: "Deal 5 physical damage. Stun, for 1 turn.",
    move: function(payload) {
      payload.target.hp -= payload.val;
      payload.target.status.onState.push(new constructor.status(status.stun, this.name, 1));
    }
  },
  skill2: {
    name: "Mass Shadow Clones",
    type: "attack",
    val: 25,
    cooldown: 2,
    description: "Grant 5 defense, for 2 turns.",
    target: "enemy",
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.protect, this.name, 2)
      );
    }
  },
  skill3: {
    name: "Shadow Clone Counter",
    type: "attack",
    val: 10,
    cooldown: 3,
    description: "Protect 10 damage for 3 turns.",
    target: "enemy",
    move: function(payload) {
      payload.target.status.onSelf.push(new constructor.status(status.protect, this.name, 3));
    }
  },
  skill4: {
    name: "Shadow Clone Save",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "Become invulnerable, for 1 turn.",
    target: "self",
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 4)
      );
    }
  }
};

let character = {
  name: "Uzumaki Naruto",
  id: "uzumakiNaruto",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
