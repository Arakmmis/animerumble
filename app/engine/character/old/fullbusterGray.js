let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "fullbusterGray",  
}

let status = {
  invincible: library.invincible({    
    owner: info.id,
  }),
  boost: library.boost({    
    val: 10,        
    owner: info.id,
  }),
  protect: library.protect({    
    val: 15,
    active: 3,
    owner: info.id,
  }),    
};

let skills = {
  skill1: {
    name: "Ice Blade: Seven Slice Dance",
    type: "attack",
    val: 10,
    cooldown: 0,
    description: 'Deal 10 physical damage',
    target: 'enemy',
    energy: {
      s: 1,
      r: 1
    },
    mana: 1,
    move: function(payload) {
      payload.target.hp -= payload.val;
      payload.offense.status.onAttack.push(
        new constructor.status(status.boost, this.name, 1)
      );
    }
  },
  skill2: {
    name: "Ice Bringer",
    type: "attack",
    val: 20,
    cooldown: 1,    
    description: 'Deal 20 physical damage.',
    target: 'enemy',
    energy: {
      s: 1,
      r: 1
    },
    mana: 3,
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Ice Make Stance",
    type: "attack",
    val: 15,
    cooldown: 3,
    description: 'Grant 15 defense to melee, for 3 turns.',
    target: "ally",
    energy: {
      s: 2,
      r: 1
    },
    mana: 3,
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.protect, this.name, 3)
      );      
    }
  },
  skill4: {
    name: "Ice Make: Shield",    
    type: "attack",
    val: 10,
    cooldown: 4,
    description: 'Become invulnerable, for 1 turn.',
    target: "self",
    energy: {
      s: 1,
      r: 1
    },
    mana: 2,
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 4)
      );      
    }
  }
};

let character = {
  name: "Fullbuster Gray",
  id: "fullbusterGray",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
