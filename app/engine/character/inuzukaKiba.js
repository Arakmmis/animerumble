let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "inuzukaKiba"
};

let status = {
  invincible: library.invincible({
    owner: info.id
  }),
  stun: library.stun({
    owner: info.id
  }),
  protect: library.protect({
    val: 15,
    owner: info.id
  }),
  bleed: library.bleed({
    val: 15,
    active: 3,
    owner: info.id
  }),
  boost: {
    name: "Shadow Clones",
    owner: info.id,
    val: 5,
    type: "skill",
    active: 3,
    modify: function(payload) {
      if (
        payload.offense.skill[payload.skill].name === "Double-Headed Wolf" ||
        payload.offense.skill[payload.skill].name === "Garouga"
      ) {
        payload.val += this.val;
      }
    }
  },
  energy: {
    owner: info.id,
    active: 3,
    modify: function(payload) {
      let index = payload.offense.skill.findIndex(x => x.name === "Garouga");
      if (index !== -1) {
        if (payload.active !== 0) {
          payload.offense.skill[index].energy.r = 0;
        } else {
          payload.offense.skill[index].energy.r = 1;
        }
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Garouga",
    type: "attack",
    val: 30,
    cooldown: 0,
    mana: 2,
    energy: {
      a: 1,
      r: 1
    },
    description:
      "This skill does 30 damage to one enemy. During 'Double-Headed Wolf' this skill is improved and costs 1 less random chakra.",
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Double-Headed Wolf",
    type: "attack",
    val: 15,
    cooldown: 3,
    description:
      "Kiba and Akamaru turn into giant beasts attacking all enemies dealing 15 damage each turn for 3 turns. The following 3 turns 'Garouga' is improved and costs 1 less random chakra.* During this time Kiba gains 15 points of damage reduction.",
    mana: 1,
    energy: {
      a: 1,
      i: 1
    },
    target: "allenemy",
    move: function(payload) {
      console.log("KIBA", payload)
      if (payload.recursive === 0) {
        console.log("RECURSIVE")
        payload.offense.status.onReceive.push(
          new constructor.status(status.protect, this.name, 2)
        );
      }
      payload.target.status.onSelf.push(
        new constructor.status(status.bleed, this.name, 2)
      );
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Dynamic Marking",
    type: "attack",
    val: 10,
    cooldown: 0,
    description:
      "Akamaru sprays urine on one enemy who cannot reduce damage or become invulnerable for 3 turns. During this time, 'Double-Headed Wolf' and 'Garouga' will deal 5 additional damage to them. Dynamic Marking cannot be used on an enemy already being affected.",
    target: "enemy",
    mana: 2,
    energy: {},
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.boost, this.name, 3)
      );
      payload.offense.status.onSelf.push(
        new constructor.status(status.energy, this.name, 3)
      );
    }
  },
  skill4: {
    name: "Smoke Bomb",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "This skill makes Inuzuka Kiba invulnerable for 1 turn.",
    target: "self",
    mana: 1,
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 4)
      );
    }
  }
};

let character = {
  name: "Inuzuka Kiba",
  id: "inuzukaKiba",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
