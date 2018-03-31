let constructor = require("../constructor.js");

let status = {
  invincible: {
    name: "invincible",
    val: 0,
    type: "invincible",
    active: 1
  },
  kunaiStab: {
    name: "Inner Sakura",
    val: 5,
    type: "self",
    active: 3,
    modify: function(payload) {
      payload.offense.hp -= this.val;
    }
  },
  allowRasengan: {
    name: "allowRasengan",
    type: "allow",
    active: 4,
    allow: "Flash Rasengan"
  } 
};

let skills = {
  skill1: {
    name: "Flying Thunder God Mark",
    type: "attack",
    val: 15,
    cooldown: 1,
    move: function(payload) {
      payload.target.hp -= payload.val;      
      payload.target.status.onState.push(
        new constructor.status(status.allowRasengan)
      );
    }
  },
  skill2: {
    name: "Flash Rasengan",
    type: "attack",
    val: 30,
    cooldown: 0,   
    required: true, 
    target: 'enemy',
    move: function(payload) {
      payload.target.hp -= payload.val;       
    }
  },
  skill3: {
    name: "Kunai Stab",
    type: "attack",
    val: 10,
    cooldown: 4,
    target: "enemy",
    move: function(payload) {
      payload.target.status.onSelf.push(
        new constructor.status(status.kunaiStab)
      );      
    }
  },
  skill4: {
    name: "Blade Deflect",
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
