let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "akimichiChouji",
  name: "Akimichi Chouji",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  invulnerable3: library.invulnerable({
    active: 3
  }),
  stun: library.stun({}),
  protect: library.protect({
    val: 15
  }),
  bleed: library.bleed({
    val: 10,
    active: 2
  }),
  boost1: library.boost({
    val: 20,
    active: -1,
    modify: function(payload, self) {
      self.usage += 1;
      if (payload.skill.name === "Partial Multi-Size") {
        payload.val += self.val;
      }
    }
  }),
  boost2: library.boost({
    val: 10,
    active: -1,
    modify: function(payload, self) {
      self.usage += 1;
      if (payload.skill.name === "Meat Tank") {
        payload.val += self.val;
      }
    }
  }),
  state: library.state({
    active: -1,
    isStack: true
  })
};

let skills = {
  skill1: {
    name: "Partial Multi-Size",
    type: "attack",
    val: 20,
    cooldown: 0,
    classes: ["instant", "melee", "physical"],
    energy: {
      a: 1
    },
    description:
      "Chouji doubles the size of his arms and attacks one enemy dealing 20 damage.",
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      });
      // payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Meat Tank",
    type: "attack",
    val: 0,
    cooldown: 2,
    description:
      "Chouji transforms into a Meat Tank dealing 10 damage to one enemy for 2 turns. Chouji is invulnerable for 2 turns.",
    classes: ["action", "ranged", "physical"],
    energy: {
      i: 1
    },
    target: "enemy",
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onState",
        status: status.invulnerable3,
        inherit: this
      });

      let stack = 1;
      let bleed = status.bleed;
      let check = payload.offense.status.onState.findIndex(
        x => x.type === "state" && x.name === "Akimichi Pills"
      );
      if (check > -1) {
        stack = payload.offense.status.onState[check].stack + 1;
      }
      bleed.val = 10 * stack;

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: bleed,
        inherit: this
      });
      console.log("Chouji Bleed", payload.target.status.onSelf, payload.val);
    }
  },
  skill3: {
    name: "Akimichi Pills",
    type: "attack",
    val: 0,
    cooldown: 0,
    description:
      "Chouji eats a pill improving his skills, 'Partial Multi-Size' will deal 20 additional damage and 'Meat Tank' will deal 10 additional damage per turn. Chouji takes 20 affliction damage. Chouji can only eat three pills and this skill is permanent.",
    classes: ["instant", "affliction"],
    target: "self",
    usage: 0,
    harmful: false,
    required: false,
    energy: {
      r: 1
    },
    move: function(payload, self) {
      console.log("chouji", payload, payload.offense.skill);
      if (self.usage === 2) {
        self.required = true;
      }

      skill.pushStatus(
        {
          subject: payload.offense,
          onStatus: "onState",
          status: status.state,
          inherit: this
        },
        "stack"
      );

      payload.target.skill[0].val += 20;
      console.log("Chouji Stats!", payload.target.status.onAttack);
      self.usage += 1;
      payload.target.hp -= 20;
      console.log("chouji hp", 20, payload.target.hp);
    }
  },
  skill4: {
    name: "Effortless Block",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "This skill makes Akimichi Chouji invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.offense,
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
