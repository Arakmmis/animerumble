let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "natsuDragneel",
  name: "Natsu Dragneel",
  anime: "FairyTail",
  author: "63k",
  pictures: "Leciel, Firebane"
};

let status = {
  invulnerable: library.invulnerable({}),
  bleed: library.bleed({
    val: 10,
    active: 2,
    classes: ["affliction"],
    nextTurn: true,
    modify: function(payload, self) {
      if (payload.active === 1) {
        payload.offense.hp -= payload.val;
      }
    }
  }),
  counter: library.counter({
    modify: function(payload, self) {
      payload.state.energy[payload.theirTurn].i += 1;
      console.log("NATSU INCREASE");
    }
  })
};

let skills = {
  skill1: {
    name: "Fire Dragon's Iron Fist",
    type: "attack",
    val: [20, 0, 0],
    cooldown: 1,
    classes: ["instant", "strategic"],
    energy: {
      a: 1
    },
    description:
      "Deal 20 damage to an enemy, and 10 affliction damage to all other enemies the turn after.",
    target: "allenemy",
    move: function(payload) {
      if (payload.recursive === 0) {
        skill.damage({
          subject: payload.target,
          val: payload.val
        });
      }
      if (payload.recursive !== 0) {
        skill.pushStatus(
          {
            subject: payload.target,
            onStatus: "onSelf",
            status: status.bleed,
            inherit: this
          },
          "stack"
        );
      }
    }
  },
  skill2: {
    name: "Fire Dargon's Flame Roar",
    type: "attack",
    val: 35,
    cooldown: 4,
    description:
      "Natsu deals 35 damage to all enemies, and apply Flame Absorption on a random target hit.",
    classes: ["instant", "strategic"],
    energy: {
      a: 1,
      i: 1,
      r: 1
    },
    target: "allenemy",
    move: function(payload) {
      if (payload.recursive === 0) {
        //Attack random
        let random = payload.state[payload.theirTurn].filter(x => x.hp > 0);
        let chooseRandom = helper.getRandomInt(random.length);
        let inherit = this;
        inherit.name = "Flame Absorption";
        inherit.id = 2;
        skill.pushStatus({
          subject: random[chooseRandom],
          onStatus: "onAttack",
          status: status.counter,
          inherit: this
        });
      }
      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill3: {
    name: "Flame Absorption",
    type: "attack",
    val: 0,
    cooldown: 1,
    description:
      "Natsu targets an enemy, if they use a harmful skill, counter it, and Natsu gains a red energy. The target of this skill in invisible.",
    target: "enemy",
    classes: ["instant", "strategic", "physical"],
    energy: {
      i: 1
    },
    move: function(payload) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.counter,
        inherit: this
      });
    }
  },
  skill4: {
    name: "Fire Dragon Slayer Magic",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "Natsu becomes invulnerable for 1 turn",
    target: "self",
    classes: ["instant", "strategic"],
    energy: {
      r: 1
    },
    move: function(payload) {
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
