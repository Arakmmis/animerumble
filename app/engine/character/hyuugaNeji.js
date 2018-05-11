let constructor = require("../constructor.js");
let library = require("../library/status.js");
let helper = require("../helper.js");

let info = {
  id: "hyuugaNeji",
  name: "Hyuuga Neji",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  protect: library.protect({
    val: 15
  }),
  reduce: library.reduce({
    val: 5,
    active: 1
  }),
  bleed: library.bleed({
    val: 25,
    active: 2
  }),
  boost: {
    name: "Dynamic Marking",
    val: 5,
    type: "skill",
    active: 3,
    modify: function(payload) {
      if (
        payload.skill.name === "Double-Headed Wolf" ||
        payload.skill.name === "Garouga"
      ) {
        payload.val += this.val;
      }
    }
  },
  energy: {
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
    name: "Neji Gentle Fist",
    type: "attack",
    val: 0,
    cooldown: 1,
    classes: ["action", "melee", "physical"],
    energy: {
      a: 1,
      r: 1
    },
    description:
      "Using the Hyuuga clan's special form of taijutsu, Neji deals 25 damage to one enemy for 2 turns. During this time, that enemy will deal 5 less damage with any non-affliction skill.",
    move: function(payload) {
      payload.target.status.onSelf.push(
        new constructor.status(status.bleed, this, 1)
      );
      payload.target.status.onAttack.push(
        new constructor.status(status.reduce, this, 1)
      );
    }
  },
  skill2: {
    name: "Eight Trigrams Revolving Heaven",
    type: "attack",
    val: 15,
    cooldown: 1,
    classes: ["instant", "melee", "chakra"],
    description:
      "Neji becomes invulnerable for 1 turn while dealing 15 damage to all enemies.",
    energy: {
      i: 1
    },
    target: "allenemy",
    move: function(payload) {
      if (payload.recursive === 0) {
        payload.offense.status.onState.push(
          new constructor.status(status.invulnerable, this, 2)
        );
      }
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Eight Trigram Sixty-Four Palms",
    type: "attack",
    val: 40,
    cooldown: 1,
    classes: ["instant", "melee", "physical"],
    description:
      "Neji closes all of one enemy's chakra nodes dealing 40 damage to one enemy and that enemy loses 1 random chakra.",
    target: "enemy",
    marking: true,
    energy: {
      a: 1,
      i: 1
    },
    move: function(payload) {
      let energy = helper.stealEnergy(payload.theirEnergy);
      if (energy !== false) {
        payload.theirEnergy[energy] -= 1;
      }
      payload.target.hp -= payload.val;
    }
  },
  skill4: {
    name: "Byakugan Insight",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    description: "This skill makes Hyuuga Neji invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "mental"],
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
  anime: info.anime,
  credit: {
    author: info.author,
    pictures: info.pictures
  },
  hp: 100,
  skill: [skills.skill1, skills.skill2, skills.skill3, skills.skill4]
};

module.exports = character;
