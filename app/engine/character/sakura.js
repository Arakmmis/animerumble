let constructor = require("../constructor.js");

let status = {
  invincible: {
    name: "invincible",
    val: 0,
    type: "invincible",
    active: 1
  },
  innerSakura: {
    name: "Inner Sakura",
    val: 10,
    type: "buff",
    active: 4,
    modify: function(payload) {
      if (payload.offense.skill[payload.skill].name === "KO Punch") {
        payload.val += this.val;
      }
    }
  },
  innerSakuraNerf: {
    name: "Inner Sakura",
    val: 10,
    type: "buff",
    active: 4,
    modify: function(payload) {
      payload.val -= this.val;
    }
  },
  stun: {
    name: "stun",
    val: 0,
    type: "stun",
    active: 2,
    modify: function(payload) {}
  },  
};

let skills = {
  skill1: {
    name: "KO Punch",
    type: "attack",
    val: 20,
    cooldown: 0,
    move: function(payload) {
      payload.target.hp -= payload.val;
      payload.target.status.onState.push(new constructor.status(status.stun));
    }
  },
  skill2: {
    name: "Mystical Palm Healing",
    type: "attack",
    val: 25,
    cooldown: 2,
    required: true,
    move: function(payload) {
      payload.target.hp += payload.val;
    }
  },
  skill3: {
    name: "Inner Sakura",
    type: "attack",
    val: 10,
    cooldown: 4,
    target: "self",
    move: function(payload) {
      payload.target.status.onAttack.push(
        new constructor.status(status.innerSakura)
      );
      payload.target.status.onReceive.push(
        new constructor.status(status.innerSakuraNerf)
      );
    }
  },
  skill4: {
    name: "Sakura Replacement Technique",
    type: "attack",
    val: 10,
    cooldown: 2,
    target: "self",
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible)
      );
    }
  }
};

let character = {
  name: "naruto",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
