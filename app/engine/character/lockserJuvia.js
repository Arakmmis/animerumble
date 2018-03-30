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
    name: "Water Lock",
    type: "attack",
    val: 20,
    cooldown: 2,
    target: 'self',
    move: function(payload) {
      payload.target.status.onAttack.push(
        new constructor.status(status.waterLock)
      ); 
    }
  },
  skill2: {
    name: "Water Nebula",
    type: "attack",
    val: 25,
    cooldown: 0,    
    target: 'ally',
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Water Slicer",
    type: "attack",
    val: 15,
    cooldown: 1,
    target: "enemy",
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill4: {
    name: "Made of Water",
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
