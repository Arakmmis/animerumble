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
  stun: {
    name: "stun",
    val: 0,
    type: "stun",
    active: 2,
    modify: function(payload) {      
    }
  },
};

let skills = {
  skill1: {
    name: "Earth Flow Spears",
    type: "attack",
    val: 15,
    cooldown: 0,
    move: function(payload) {
      payload.target.hp -= payload.val;      
    }
  },
  skill2: {
    name: "Opening Earth Rising Excavation",
    type: "attack",
    val: 0,
    cooldown: 3,    
    target: 'enemy',
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.boost)
      );
    }
  },
  skill3: {
    name: "Quicklime Congealing Technique",
    type: "attack",
    val: 10,
    cooldown: 3,
    target: "enemy",
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.stun)
      );      
    }
  },
  skill4: {
    name: "Earth Dome",
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
