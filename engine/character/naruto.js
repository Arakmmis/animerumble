let constructor = require("../constructor.js");

let status = {
  invincible: {
    name: "invincible",
    val: 0,
    type: "invincible",
    active: 1
  },
  shadowClones: {
    name: "Shadow Clones",
    val: 10,
    type: "skill",
    active: 4,
    modify: function(payload) {
      console.log(payload.offense.skill[payload.skill].name);
      if (
        payload.offense.skill[payload.skill].name === "Uzumaki Naruto Combo"
      ) {
        console.log("Shadow Clone");
        payload.val += this.val;
      }
    }
  },
  stun: {
    name: "stun",
    val: 0,
    type: "stun",
    active: 2,
    modify: function(payload) {}
  },
  allowRasengan: {
    name: "allowRasengan",
    type: "allow",
    active: 4,
    allow: "Rasengan"
  }
};

let skills = {
  uzumakiNarutoCombo: {
    name: "Uzumaki Naruto Combo",
    type: "attack",
    val: 20,
    cooldown: 2,
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  rasengan: {
    name: "Rasengan",
    type: "attack",
    val: 45,
    cooldown: 2,
    required: true,
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  shadowClones: {
    name: "Shadow Clones",
    type: "attack",
    val: 10,
    cooldown: 2,
    target: "self",
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.allowRasengan)
      );
      payload.target.status.onAttack.push(
        new constructor.status(status.shadowClones)
      );
    }
  },
  invincible: {
    name: "Invincible",
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
    new constructor.skill(skills.uzumakiNarutoCombo),
    new constructor.skill(skills.rasengan),
    new constructor.skill(skills.shadowClones),
    new constructor.skill(skills.invincible)
  ]
};

module.exports = character