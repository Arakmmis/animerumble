let constructor = require("../constructor.js");

let status = {
  invincible: {
    name: "invincible",
    val: 0,
    type: "invincible",
    active: 1
  },
  steroids: {
    name: "Inner Sakura",
    val: 10,
    type: "self",
    active: 2,
    modify: function(payload) {
      payload.offense.hp -= this.val;
    }
  },
  chakraHeal: {
    name: "Chakra Heal",
    val: 15,
    type: "self",
    active: 2,
    modify: function(payload) {      
      payload.target.hp -= this.val;
    }
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
  protect: {
    name: "protect",
    type: "modifier",
    val: 15,
    cooldown: 3,
    target: 'ally',
    move: function(payload) {
      payload.target.status.onReceive.push(new constructor.status(status.protect));      
    }
  },
  waterLock: {
    name: "Water Lock",
    val: 10,
    type: "skill",
    active: 2,
    modify: function(payload) {
      console.log(payload.offense.skill[payload.skill].name);
      if (
        payload.offense.skill[payload.skill].name === "Water Nebula"
      ) {
        console.log("Shadow Clone");
        payload.val += this.val;
      }
    }
  },
};

let skills = {
  skill1: {
    name: "Ice Blade: Seven Slice Dance",
    type: "attack",
    val: 10,
    cooldown: 0,
    target: 'enemy',
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
    target: 'enemy',
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Ice Make Stance",
    type: "attack",
    val: 15,
    cooldown: 3,
    target: "ally",
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
    target: "self",
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
