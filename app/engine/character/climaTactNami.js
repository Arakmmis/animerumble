let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "climaTactNami",
  name: "Clima-tact Nami",
  anime: "OnePiece",
  author: "63k",
  pictures: "Zetsu, Leciel"
};

let status = {
  invulnerable: library.invulnerable({}),
  bleed: library.bleed({
    val: 5,
    active: 5,
    persistence: "control"
  }),
  bleed2: library.bleed({
    val: 15,
    active: 2,

    persistence: "action"
  }),
  bleed3: library.bleed({
    val: 25,
    active: 2,
    persistence: "action"
  }),
  bleed4: library.bleed({
    val: 10,
    active: 2,
    persistence: "action"
  }),
  bleed5: library.bleed({
    val: 20,
    active: 2,
    persistence: "action"
  }),
  stun: library.stun({
    comprise: ["physical", "energy"],
    active: 2
  }),
  dd: library.dd({
    val: 15,
    piercing: true,
    active: 3
  }),
  state: library.state({
    active: 5
  }),
  transform: {
    name: "Transform",
    active: 1,
    harmful: false,
    modify: function(payload, self) {
      let swap = payload.offense.skill[1];
      payload.offense.skill[1] = payload.offense.skill[4];
      payload.offense.skill[4] = swap;
    }
  }
};

let skills = {
  skill1: {
    name: "Heat Ball - Cool Ball",
    type: "attack",
    val: 0,
    cooldown: 5,
    classes: ["control", "ranged", "affliction"],
    energy: {
      s: 1
    },
    target: "allenemy",
    description:
      "Nami deals 5 affliction damage to all enemies for 5 turns. Nami's other skills deal 10 extra damage.",
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onState",
        status: status.state,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.bleed,
        inherit: this
      });
    }
  },
  skill2: {
    name: "Tornado Tempest",
    type: "attack",
    alt: 4,
    val: 0,
    cooldown: 2,
    classes: ["action", "melee", "physical"],
    description:
      "Nami uses the only weapon Usopp installed in the clima-tact, stunning the target physical and energy skills, and dealing 15 for 2 turns. This skill will become Party Trick.",
    energy: {
      r: 2
    },
    target: "enemy",
    move: function(payload, self) {
      let state = payload.offense.status.onState.some(
        x => x.name === "Heat Ball - Cool Ball"
      );
      if (state) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.bleed3,
          inherit: this
        });
      } else {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.bleed2,
          inherit: this
        });
      }
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.stun,
        inherit: this
      });
    }
  },
  skill3: {
    name: "Thunderbolt Tempo",
    type: "attack",
    val: 0,
    cooldown: 0,
    classes: ["instant", "ranged", "energy", "piercing"],
    description:
      "Nami launches a thunder ball at an enemy dealing 10 piercing damage for 2 turns.",
    target: "enemy",
    marking: true,
    energy: { w: 1 },
    move: function(payload, self) {
      let state = payload.offense.status.onState.some(
        x => x.name === "Heat Ball - Cool Ball"
      );
      if (state) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.bleed5,
          inherit: this
        });
      } else {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.bleed4,
          inherit: this
        });
      }
    }
  },
  skill4: {
    name: "Mirage Tempo",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description:
      "Nami becomes invulnerable for 1 turn. If used during the duration of Heat Ball - Cool Ball, Nami gain 15 DD, and all of Nami's skill ignore invulnerability.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.invulnerable,
        inherit: this
      });
      let state = payload.offense.status.onState.some(
        x => x.name === "Heat Ball - Cool Ball"
      );
      if (state) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onReceive",
          status: status.dd,
          inherit: this
        });
      }
    }
  },
  skill5: {
    name: "Party Trick",
    type: "self",
    alt: 1,
    val: 0,
    cooldown: 3,
    harmful: false,
    description:
      "Nami uses a party trick installed by Usopp replacing Party Tricks with Tornado Tempest.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {},
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });
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
  skill: [
    skills.skill1,
    skills.skill2,
    skills.skill3,
    skills.skill4,
    skills.skill5
  ]
};

module.exports = character;
