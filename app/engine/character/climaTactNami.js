let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "climaTactNami",
  name: "Clima-tact Nami"
};

let status = {
  invulnerable: library.invulnerable({
    owner: info.id
  }),
  bleed: library.bleed({
    val: 5,
    active: 5,
    owner: info.id,
    persistence: "control"
  }),
  bleed2: library.bleed({
    val: 15,
    active: 2,
    owner: info.id,
    persistence: "action"
  }),
  bleed3: library.bleed({
    val: 25,
    active: 2,
    owner: info.id,
    persistence: "action"
  }),
  bleed4: library.bleed({
    val: 10,
    active: 2,
    owner: info.id,
    persistence: "action"
  }),
  bleed5: library.bleed({
    val: 20,
    active: 2,
    owner: info.id,
    persistence: "action"
  }),
  stun: library.stun({
    owner: info.id,
    classes: ["physical", "chakra"],
    active: 2
  }),
  dd: library.protect({
    val: 15,
    owner: info.id,
    active: 3
  }),
  state: library.state({
    active: 5
  })
};

let skills = {
  skill1: {
    name: "Heat Ball - Cool Ball",
    type: "attack",
    val: 0,
    cooldown: 5,
    classes: ["control", "ranged", "affliction"],
    energy: {
      s: 1,
      r: 1
    },
    description:
      "Nami deals 5 affliction damage to all enemies for 5 turns. Nami's other skills deal 10 extra damage.",
    move: function(payload) {
      payload.offense.status.onState.push(
        new constructor.status(status.state, this, this.name, this.nameId, 1)
      );
      payload.target.status.onSelf.push(
        new constructor.status(status.bleed, this, this.name, this.nameId, 1)
      );
    }
  },
  skill2: {
    name: "Tornado Tempest",
    type: "attack",
    val: 0,
    cooldown: 0,
    classes: ["action", "melee", "physical"],
    description:
      "Nami uses the only weapon Usopp installed in the clima-tact, stunning the target physical and chakra skills, and dealing 15 for 2 turns.",
    energy: {
      r: 2
    },
    target: "enemy",
    move: function(payload) {
      let state = payload.offense.status.onState.some(
        x => x.name === "Heat Ball - Cool Ball"
      );
      if (state) {
        payload.target.status.onSelf.push(
          new constructor.status(status.bleed3, this, this.name, this.nameId, 2)
        );
      } else {
        payload.target.status.onSelf.push(
          new constructor.status(status.bleed2, this, this.name, this.nameId, 2)
        );
      }
    }
  },
  skill3: {
    name: "Thunderbolt Tempo",
    type: "attack",
    val: 10,
    cooldown: 0,
    classes: ["instant", "ranged", "chakra"],
    description:
      "Nami launches a thunder ball at an enemy dealing 10 piercing damage over 2 turns.",
    target: "enemy",
    marking: true,
    energy: { w: 1 },
    move: function(payload) {
      let state = payload.offense.status.onState.some(
        x => x.name === "Heat Ball - Cool Ball"
      );
      if (state) {
        payload.target.status.onSelf.push(
          new constructor.status(status.bleed5, this, this.name, this.nameId, 3)
        );
      } else {
        payload.target.status.onSelf.push(
          new constructor.status(status.bleed4, this, this.name, this.nameId, 3)
        );
      }
    }
  },
  skill4: {
    name: "Mirage Tempo",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    description:
      "Nami becomes invulnerable for 1 turn. If used during the duration of Heat Ball - Cool Ball, Nami gain 15 DD, and all of Nami's skill ignore invulnerability.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(
          status.invulnerable,
          this,
          this.name,
          this.nameId,
          4
        )
      );
      let state = payload.offense.status.onState.some(
        x => x.name === "Heat Ball - Cool Ball"
      );
      if (state) {
        payload.target.status.onReceive.push(
          new constructor.status(status.dd, this, this.name, this.nameId, 4)
        );
      }
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
