let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "uchihaSasuke",
  name: "Uchiha Sasuke",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  disableDrIv: library.disableDrIv({
    active: 4
  }),
  stun: library.stun({}),
  protect: library.protect({
    val: 15,
    active: 4
  }),
  bleed: library.bleed({
    val: 5
  }),
  boost1: {
    name: "Sharingan",
    val: 25,
    type: "skill",
    active: 4,
    modify: function(payload, self) {
      if (payload.skill.name === "Chidori") {
        payload.val += this.val;
      }
    }
  },
  boost2: {
    name: "Sharingan",
    val: 15,
    type: "skill",
    active: 4,
    modify: function(payload, self) {
      if (payload.skill.name === "Lion Combo") {
        payload.val += this.val;
      }
    }
  },
  required: {
    active: 4,
    modify: function(payload, self) {
      let index = payload.offense.skill.findIndex(x => x.name === "Chidori");
      if (index !== -1) {
        if (payload.active > 1) {
          payload.offense.skill[index].required = false;
          console.log("ZERO", payload.active);
        } else if (payload.active === 1) {
          payload.offense.skill[index].required = true;
          console.log("LAST", payload.active);
        }
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Lion Combo",
    type: "attack",
    val: 30,
    cooldown: 0,
    classes: ["instant", "melee", "physical"],
    energy: {
      a: 1,
      r: 1
    },
    description:
      "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      });
      // payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Chidori",
    type: "piercing",
    val: 30,
    cooldown: 1,
    classes: ["instant", "melee", "energy"],
    description:
      "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",
    energy: {
      s: 1,
      r: 1
    },
    target: "enemy",
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      });
      // payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Sharingan",
    type: "attack",
    val: 0,
    cooldown: 4,
    description:
      "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
    target: "enemy",
    classes: ["instant", "mental"],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onReceive",
        status: status.protect,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.boost1,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.boost2,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.disableDrIv,
        inherit: this
      });
      // payload.offense.status.onReceive.push(
      //   new constructor.status(status.protect, this, 3)
      // );
      // payload.target.status.onReceive.push(
      //   new constructor.status(status.boost1, this, 3),
      //   new constructor.status(status.boost2, this, 3)
      // );
      // payload.target.status.onState.push(
      //   new constructor.status(status.disableDrIv, this, 3)
      // );
    }
  },
  skill4: {
    name: "Swift Block",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
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
