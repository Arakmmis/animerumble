let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "yamanakaIno",
  name: "Yamanaka Ino",
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
  stun: library.stun({}),
  stun2: library.stun({
    persistence: "control",
    active: 3
  }),
  protect: library.protect({
    val: 10,
    active: 3
  }),
  cooldownIncrease: {
    name: "Chakra Hair Strand Trap",
    val: 30,
    type: "skill",
    active: 2,
    modify: function(payload, self) {
      payload.skill.counter += 1;
    }
  },
  transform: {
    name: "Transform",
    active: 3,
    modify: function(payload, self) {
      if (payload.active === 3) {
        let swap = payload.offense.skill[1];
        payload.offense.skill[1] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
        console.log("SWAP", swap);
        console.log("ZERO", payload.active);
      } else if (payload.active === 1) {
        let swap = payload.offense.skill[1];
        payload.offense.skill[1] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
        console.log("SWAP", swap);
        console.log("LAST", payload.active);
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Mind Body Disturbance",
    type: "attack",
    piercing: true,
    val: 30,
    cooldown: 0,
    energy: {
      w: 1,
      r: 1
    },
    target: "randomenemy",
    classes: ["instant", "ranged", "mental"],
    description:
      "Using this skill Ino stuns the non-mental skills of one enemy for 1 turn and does 30 piercing damage that ignores invulnerability to one random enemy. During this time the target is unable to reduce damage or become invulnerable.",
    move: function(payload, self) {
      if (payload.recursive === 0) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.stun,
          inherit: this
        });
      } else {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.disableDrIv,
          inherit: this
        });
        skill.damage({
          subject: payload.target,
          val: payload.val
        });
      }
    }
  },
  skill2: {
    name: "Mind Body Switch",
    type: "attack",
    val: 0,
    alt: 4,
    cooldown: 0,
    classes: ["control", "ranged", "mental"],
    description:
      "Ino takes over the mind of an enemy. For 4 turns one enemy cannot reduce damage or become invulnerable. During this time, their skills are stunned, and this skill will be replaced by 'Art of the Valentine'.",
    energy: {
      w: 2
    },
    target: "enemy",
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.stun2,
        inherit: this
      });
    }
  },
  skill3: {
    name: "Chakra Hair Strand Trap",
    cooldown: 4,
    description:
      "Ino uses a strand of chakra endowed hair to create a trap. For 1 turn, if one enemy uses a new harmful skill, they will have the cooldowns of their skills increased by 1 for 2 turns. This skill is invisible.",
    target: "self",
    classes: ["instant", "ranged", "energy"],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.cooldownIncrease,
        inherit: this
      });
    }
  },
  skill4: {
    name: "Ino Block",
    type: "invulnerable",
    cooldown: 4,
    description: "This skill makes Yamanaka Ino invulnerable for 1 turn.",
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
    }
  },
  skill5: {
    name: "Art of the Valentine",
    type: "attack",
    val: 25,
    alt: 1,
    cooldown: 0,
    classes: ["instant", "ranged", "physical"],
    description: "This skill does 25 damage to one enemy.",
    target: "enemy",
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
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
