let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "naraShikamaru",
  name: "Nara Shikamaru",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  disableDrIv: library.disableDrIv({
    active: 1
  }),
  disableDrIv2: library.disableDrIv({
    active: 2
  }),
  state: library.state({
    name: "Meditate",
    active: 5
  }),
  stun2: library.stun({
    active: 2,
    info: "declusive",
    classes: ["mental"],
    persistence: "control"
  }),
  stun: library.stun({
    active: 1,
    info: "declusive",
    classes: ["mental"],
    persistence: "control"
  }),
  protect: library.protect({
    val: 15
  }),
  bleed2: library.bleed({
    val: 15,
    active: 2
  }),
  bleed: library.bleed({
    val: 15,
    active: 1
  })
};

let skills = {
  skill1: {
    name: "Meditate",
    type: "attack",
    val: 0,
    cooldown: 0,
    marking: true,
    energy: {},
    classes: ["instant", "ranged", "mental"],
    description:
      "Shikamaru sits down and begins thinking up a strategy against one enemy for 5 turns. This skill cannot be countered or reflected and cannot used on an enemy already affected by it.",
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.state,
        inherit: this
      });
      // payload.target.status.onState.push(
      //   new constructor.status(status.state, this, 1)
      // );
    }
  },
  skill2: {
    name: "Shadow-Neck Bind",
    type: "attack",
    val: 0,
    cooldown: 1,
    classes: ["action", "ranged", "energy"],
    description:
      "Shikamaru chokes all enemies, dealing 15 damage to them and making them unable to reduce damage or become invulnerable for 1 turn. If an enemy is affected by 'Meditate', this skill will last 2 turns instead.",
    energy: {
      w: 1
    },
    target: "allenemy",
    move: function(payload, self) {
      // console.log("KIBA", payload);
      if (payload.target.status.onState.some(x => x.name === "Meditate")) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.bleed2,
          inherit: this
        });
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.disableDrIv2,
          inherit: this
        });
        // payload.target.status.onSelf.push(
        //   new constructor.status(status.bleed2, this, 2)
        // );
        // payload.target.status.onState.push(
        //   new constructor.status(status.disableDrIv2, this, 2)
        // );
      } else {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.bleed,
          inherit: this
        });
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.disableDrIv,
          inherit: this
        });
        // payload.target.status.onSelf.push(
        //   new constructor.status(status.bleed, this, 2)
        // );
        // payload.target.status.onState.push(
        //   new constructor.status(status.disableDrIv, this, 2)
        // );
      }
      // payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Shadow Imitation",
    type: "attack",
    val: 0,
    cooldown: 3,
    classes: ["control", "ranged", "energy"],
    description:
      "Shikamaru captures all enemy in shadows, stunning their non-mental skills for 1 turn. Enemies affected by 'Meditate' will instead have their non-mental skills stunned for 2 turns.",
    target: "allenemy",
    energy: {
      w: 1,
      r: 1
    },
    move: function(payload, self) {
      if (payload.target.status.onState.some(x => x.name === "Meditate")) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.stun2,
          inherit: this
        });
        // payload.target.status.onState.push(
        //   new constructor.status(status.stun2, this, 3)
        // );
      } else {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.stun,
          inherit: this
        });
        // payload.target.status.onState.push(
        //   new constructor.status(status.stun, this, 3)
        // );
      }
    }
  },
  skill4: {
    name: "Shikamaru Hide",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "This skill makes Nara Shikamaru invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "mental"],
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
      // payload.target.status.onState.push(
      //   new constructor.status(status.invulnerable, this, 4)
      // );
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
