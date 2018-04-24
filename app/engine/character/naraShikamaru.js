let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "naraShikamaru"
};

let status = {
  invincible: library.invincible({
    owner: info.id
  }),
  state: library.state({
    name: "Meditate",
    active: 5,
    owner: info.id
  }),
  stun2: library.stun({
    owner: info.id,
    active: 4
  }),
  stun: library.stun({
    owner: info.id,
    active: 2
  }),
  protect: library.protect({
    val: 15,
    owner: info.id
  }),
  bleed2: library.bleed({
    val: 15,
    active: 2,
    owner: info.id
  }),
  bleed: library.bleed({
    val: 15,
    active: 1,
    owner: info.id
  }),
  boost: {
    name: "Dynamic Marking",
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
    active: 4,
    modify: function(payload) {
      let index = payload.offense.skill.findIndex(x => x.name === "Garouga");
      if (index !== -1) {
        if (payload.active > 1) {
          payload.offense.skill[index].energy.r = 0;
          console.log("KIBA Start", payload.active);
        } else if (payload.active === 1) {
          payload.offense.skill[index].energy.r = 1;
          console.log("KIBA", payload.active);
        }
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Meditate",
    type: "attack",
    val: 30,
    cooldown: 0,
    marking: true,
    energy: {},
    description:
      "Shikamaru sits down and begins thinking up a strategy against one enemy for 5 turns. This skill cannot be countered or reflected and cannot used on an enemy already affected by it.",
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.state, this.name, 1)
      );
    }
  },
  skill2: {
    name: "Shadow-Neck Bind",
    type: "attack",
    val: 15,
    cooldown: 1,
    description:
      "Shikamaru chokes all enemies, dealing 15 damage to them and making them unable to reduce damage or become invulnerable for 1 turn. If an enemy is affected by 'Meditate', this skill will last 2 turns instead.",
    energy: {
      w: 1
    },
    target: "allenemy",
    move: function(payload) {
      // console.log("KIBA", payload);
      if (payload.target.status.onState.some(x => x.name === "Meditate")) {
        payload.target.status.onSelf.push(
          new constructor.status(status.bleed2, this.name, 2)
        );
      } else {
        payload.target.status.onSelf.push(
          new constructor.status(status.bleed, this.name, 2)
        );
      }
      // payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Shadow Imitation",
    type: "attack",
    val: 10,
    cooldown: 3,
    description:
      "Shikamaru captures one enemy in shadows, stunning their non-mental skills for 1 turn. Enemies affected by 'Meditate' will instead have their non-mental skills stunned for 2 turns.",
    target: "enemy",
    energy: {
      w: 1,
      r: 1
    },
    move: function(payload) {
      if (payload.target.status.onState.some(x => x.name === "Meditate")) {
        payload.target.status.onSelf.push(
          new constructor.status(status.stun2, this.name, 2)
        );
      } else {
        payload.target.status.onState.push(
          new constructor.status(status.stun, this.name, 3)
        );
      }
    }
  },
  skill4: {
    name: "Shikamaru Hide",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "This skill makes Nara Shikamaru invulnerable for 1 turn.",
    target: "self",    
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
  name: "Nara Shikamaru",
  id: "naraShikamaru",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
