let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "sakuraHaruno",
  name: "Sakura Haruno",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({
    classes: ["physical", "mental"]
  }),
  protect: library.protect({
    val: 10,
    active: 4
  }),
  bleed: library.bleed({
    val: 10,
    active: 2
  }),
  heal: library.heal({
    val: 15
  }),
  ignore: library.ignore({
    active: 4
  }),
  boost: library.boost({
    val: 10,
    active: 4,
    modify: function(payload, self) {
      if (payload.skill.name === "KO Punch") {
        payload.val += this.val;
      }
    }
  })
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
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.stun,
        inherit: this
      });
      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill2: {
    name: "Mystical Palm Healing",
    type: "attack",
    val: 25,
    cooldown: 0,
    harmful: false,
    classes: ["instant", "energy"],
    description:
      "Using basic healing techniques Sakura heals herself or one ally for 25 health.",
    target: "ally",
    energy: {
      s: 1
    },
    move: function(payload, self) {
      skill.heal({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill3: {
    name: "Inner Sakura",
    type: "attack",
    val: 0,
    cooldown: 4,
    harmful: false,
    classes: ["instant", "mental"],
    description:
      "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain 10 points of damage reduction and will ignore all non-damage effects other than chakra cost changes. During this time 'KO Punch' will deal 10 additional damage.",
    target: "self",
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.ignore,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.protect,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.boost,
        inherit: this
      });
    }
  },
  skill4: {
    name: "Sakura Hide",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    classes: ["instant", "energy"],
    description: "This skill makes Haruno Sakura invulnerable for 1 turn.",
    target: "self",
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
