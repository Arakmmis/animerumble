let constructor = require("../constructor.js");

let status = {
  invincible: {
    name: "invincible",
    val: 0,
    type: "invincible",
    active: 1
  },  
  boost: {
    name: "boost",
    val: 10,
    type: "skill",
    active: 2,
    modify: function(payload) {
      console.log('boost')
      payload.val += this.val;
    }
  },
  protect: {
    name: "protect",
    val: 15,
    type: "skill",
    active: 3,
    modify: function(payload) {      
      payload.val -= this.val;
    }
  },    
};

let skills = {
  skill1: {
    name: "Ice Blade: Seven Slice Dance",
    type: "attack",
    val: 10,
    cooldown: 0,
    description: 'Deal 10 physical damage',
    target: 'enemy',
    mana: 1,
    move: function(payload) {
      payload.target.hp -= payload.val;
      payload.offense.status.onAttack.push(
        new constructor.status(status.boost)
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
    mana: 3,
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.protect)
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
    mana: 2,
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible)
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
