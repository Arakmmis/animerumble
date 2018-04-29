let constructor = require("../constructor.js");
let helper = require("../helper.js");
let library = require("../library/status.js");

let info = {
  id: "hyuugaHinata",
  name: "Hyuuga Hinata"
};

let status = {
  invulnerable: library.invulnerable({
    owner: info.id
  }),
  bleed: library.bleed({
    val: 20,
    active: 2,
    owner: info.id
  }),
  protect: library.protect({
    val: 10,
    active: 4,
    owner: info.id
  }),
  drain: library.drain({
    name: "Hinata Gentle Fist",
    owner: info.id,
    active: 2
  }),
  dd: library.dd({
    name: "Protective Eight Trigrams Sixty-Four Palms",
    owner: info.id,
    val: 20,
    active: 2
  }),
  state: library.state({
    name: "Byakugan",
    active: 4,
    owner: info.id
  })
};

let skills = {
  skill1: {
    name: "Hinata Gentle Fist",
    type: "attack",
    val: 0,
    cooldown: 1,
    energy: {
      a: 1,
      r: 1
    },
    classes: ["action", "ranged", "physical"],
    description:
      "Using the Hyuuga clan's style of taijutsu Hinata does 20 damage for 2 turns to one enemy. If used during 'Byakugan' this skill will also remove 1 random chakra each turn.",
    move: function(payload) {
      payload.target.status.onSelf.push(
        new constructor.status(status.bleed, this.name, this.nameId, 1)
      );
      if (payload.offense.status.onState.some(x => x.name === "Byakugan")) {
        payload.target.status.onSelf.push(
          new constructor.status(status.drain, this.name, this.nameId, 1)
        );
      }
    }
  },
  skill2: {
    name: "Protective Eight Trigrams Sixty-Four Palms",
    type: "attack",
    val: 15,
    cooldown: 1,
    classes: ["instant", "chakra"],
    description:
      "Hinata deals 15 damage to all enemies,* and all allies, including her will gain 10 destructible defense for 1 turn. If used during 'Byakugan' this skill will deal 20 damage.",
    energy: {
      s: 1,
      r: 1
    },
    target: "allenemyallally",
    move: function(payload) {
      console.log(payload.target);
      if (
        payload.store[payload.myTurn].some(x => x.name === payload.target.name)
      ) {
        payload.target.status.onReceive.push(
          new constructor.status(status.dd, this.name, this.nameId, 2)
        );
      } else {
        if (payload.offense.status.onState.some(x => x.name === "Byakugan")) {
          payload.val += 5;
        }
        payload.target.hp -= payload.val;
      }
    }
  },
  skill3: {
    name: "Byakugan",
    type: "attack",
    val: 10,
    cooldown: 4,
    description:
      "Hinata activates her Byakugan gaining 15 points of damage reduction for 4 turns. The following 4 turns, 'Hinata Gentle Fist' and 'Protective Eight Trigrams Sixty-Four Palms' will be improved.",
    target: "self",
    classes: ["instant", "mental"],
    marking: true,
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.protect, this.name, this.nameId, 3)
      );
      payload.target.status.onState.push(
        new constructor.status(status.state, this.name, this.nameId, 3)
      );
    }
  },
  skill4: {
    name: "Hinata Block",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    description: "This skill makes Hyuuga Hinata invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invulnerable, this.name, this.nameId, 4)
      );
    }
  }
};

let character = {
  name: info.name,
  id: info.id,
  hp: 100,
  skill: [skills.skill1, skills.skill2, skills.skill3, skills.skill4]
};

module.exports = character;
