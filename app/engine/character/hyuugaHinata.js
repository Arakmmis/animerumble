let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "hyuugaHinata",
  name: "Hyuuga Hinata",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  bleed: library.bleed({
    val: 20,
    active: 2
  }),
  protect: library.protect({
    val: 10,
    active: 4
  }),
  drain: library.drain({
    val: 1,
    active: 2
  }),
  dd: library.dd({
    name: "Protective Eight Trigrams Sixty-Four Palms",
    val: 10,
    active: 2
  }),
  state: library.state({
    name: "Byakugan",
    active: 4
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
    move: function(payload, self) {
      // payload.target.status.onSelf.push(
      //   new constructor.status(status.bleed, this, 1)
      // );
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.bleed,
        inherit: this
      });
      if (payload.offense.status.onState.some(x => x.name === "Byakugan")) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.drain,
          inherit: this
        });
        // payload.target.status.onSelf.push(
        //   new constructor.status(status.drain, this, 1)
        // );
      }
    }
  },
  skill2: {
    name: "Protective Eight Trigrams Sixty-Four Palms",
    type: "attack",
    val: 15,
    cooldown: 0,
    classes: ["instant", "energy"],
    description:
      "Hinata deals 15 damage to all enemies,* and all allies, including her will gain 10 destructible defense for 1 turn. If used during 'Byakugan' this skill will deal 20 damage.",
    energy: {
      s: 1,
      r: 1
    },
    target: "allenemyallally",
    move: function(payload, self) {
      console.log(payload.target);
      if (
        payload.state[payload.myTurn].some(x => x.name === payload.target.name)
      ) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onReceive",
          status: status.dd,
          inherit: this
        });
        // payload.target.status.onReceive.push(
        //   new constructor.status(status.dd, this, 2)
        // );
      } else {
        if (payload.offense.status.onState.some(x => x.name === "Byakugan")) {
          payload.val += 5;
        }
        // payload.target.hp -= payload.val;
        skill.damage({
          subject: payload.target,
          val: payload.val
        });
      }
    }
  },
  skill3: {
    name: "Byakugan",
    type: "attack",
    val: 0,
    cooldown: 4,
    harmful: false,
    description:
      "Hinata activates her Byakugan gaining 15 points of damage reduction for 4 turns. The following 4 turns, 'Hinata Gentle Fist' and 'Protective Eight Trigrams Sixty-Four Palms' will be improved.",
    target: "self",
    classes: ["instant", "mental"],
    marking: true,
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.protect,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.state,
        inherit: this
      });
      // payload.target.status.onReceive.push(
      //   new constructor.status(status.protect, this, 3)
      // );
      // payload.target.status.onState.push(
      //   new constructor.status(status.state, this, 3)
      // );
    }
  },
  skill4: {
    name: "Hinata Block",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "This skill makes Hyuuga Hinata invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      // payload.target.status.onState.push(
      //   new constructor.status(status.invulnerable, this, 4)
      // );
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
