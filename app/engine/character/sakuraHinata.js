let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "sakuraHinata",
  name: "Sakura Hinata"
};

let status = {
  invulnerable: library.invulnerable({
    owner: info.id
  }),
  stun: library.stun({
    owner: info.id,
    classes: ["physical", "mental"]
  }),
  protect: library.protect({
    val: 10,
    active: 4,
    owner: info.id
  }),
  bleed: library.bleed({
    val: 10,
    active: 2,
    owner: info.id
  }),
  heal: library.heal({
    name: "Chakra Heal",
    val: 15,
    owner: info.id
  }),
  ignore: library.ignore({
    name: "Inner Sakura",
    active: 4,    
    owner: info.id
  }),
  boost: {
    name: "Inner Sakura",
    owner: info.id,
    val: 10,
    type: "skill",
    active: 4,
    modify: function(payload) {
      if (payload.skillStore.name === "KO Punch") {
        payload.val += this.val;
      }
    }
  }
};

let skills = {
  skill1: {
    name: "KO Punch",
    type: "attack",
    val: 20,
    cooldown: 0,
    description:
      "Sakura punches one enemy with all her strength dealing 20 damage to them and stunning their physical or mental skills for 1 turn. During 'Inner Sakura', KO Punch deals 10 additional damage.",
    energy: {
      a: 1
    },
    classes: ["instant", "melee", "physical"],
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.stun, this, 1)
      );
      payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Mystical Palm Healing",
    type: "attack",
    val: 25,
    cooldown: 0,
    classes: ["instant", "chakra"],
    description:
      "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
    target: "ally",
    energy: {
      s: 1
    },
    move: function(payload) {
      payload.target.hp += payload.val;
    }
  },
  skill3: {
    name: "Inner Sakura",
    type: "attack",
    val: 10,
    cooldown: 4,
    classes: ["instant", "mental"],
    description:
      "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
    target: "self",
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.ignore, this, 3)
      )
      payload.target.status.onReceive.push(
        new constructor.status(status.protect, this, 3)
      );
      payload.target.status.onAttack.push(
        new constructor.status(status.boost, this, 3)
      );
    }
  },
  skill4: {
    name: "Sakura Hide",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    classes: ["instant", "chakra"],
    description: "This skill makes Haruno Sakura invulnerable for 1 turn.",
    target: "self",
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invulnerable, this, 4)
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
