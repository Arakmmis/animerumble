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
      payload.offense.hp += this.val;
    }
  },  
};

let skills = {
  skill1: {
    name: "Earthquake Punch",
    type: "attack",
    val: 20,
    cooldown: 0,
    move: function(payload) {
      payload.target.hp -= payload.val;      
    }
  },
  skill2: {
    name: "Chakra Heal",
    type: "attack",
    val: 25,
    cooldown: 2,    
    target: 'ally',
    move: function(payload) {
      payload.target.status.onSelf.push(
        new constructor.status(status.chakraHeal)
      );
    }
  },
  skill3: {
    name: "Steroids",
    type: "attack",
    val: 10,
    cooldown: 3,
    target: "enemy",
    move: function(payload) {
      payload.target.status.onSelf.push(
        new constructor.status(status.steroids)
      );      
    }
  },
  skill4: {
    name: "Sakura Hide",
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
