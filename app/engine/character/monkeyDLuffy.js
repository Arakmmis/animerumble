let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");

let info = {
  id: "monkeyDLuffy",
  name: "Monkey D Luffy",
  author: "63k",
  pictures: "Leciel"
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  stun2: library.stun({
    classes: ["strategic"]
  }),
  protect: library.protect({
    val: 15,
    active: 4
  }),
  bleed: library.bleed({
    val: 25,
    active: 2,
    isInvisible: true,
    modify: function(payload) {
      if (payload.active === 1) {
        payload.offense.hp -= payload.val;

      }
    }
  }),
  bleed2: library.bleed({
    val: 15,
    active: 13,
    classes: ["physical"]
  }),
  ignore: library.ignore({
    name: "Inner Sakura",
    active: 1
  }),
  unique: {
    active: 2,
    type: "unique",
    period: "instant",
    modify: function(payload) {
      let stun = library.stun({});
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onState",
        status: stun,
        inherit: this
      });
    }
  },
  transform: {
    name: "Transform",
    active: 2,
    harmful: false,
    modify: function(payload) {
      if (payload.active === 2) {
        let swap = payload.offense.skill[1];
        payload.offense.skill[1] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
      } else if (payload.active === 1) {
        let swap = payload.offense.skill[1];
        payload.offense.skill[1] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Gomu Gomu no Pistol",
    type: "attack",
    val: 0,
    cooldown: 0,
    classes: ["action", "ranged", "physical"],
    energy: {
      i: 1
    },
    ignoreInvul: true,
    description:
      "Luffy winds up a powerful single target punch. Next turn, Luffy will deal 25 damage that ignores invulnerability, and stuns the target for one turn. This skill becomes Gomu Gomu no Bazooka for one turn. This skill is invisible.",
    target: "enemy",
    move: function(payload) {
      let check = payload.target.status.onState.some(
        x => x.type === "stun" && x.name === "Bottle Throw"
      );
      if (check) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.bleed,
          inherit: this
        });
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.stun,
          inherit: this
        });
        skill.pushStatus({
          subject: payload.offense,
          onStatus: "onSelf",
          status: status.transform,
          inherit: this
        });
      }
    }
  },
  skill2: {
    name: "Gomu Gomu no Gattling",
    type: "attack",
    val: 0,
    cooldown: 2,
    description:
      "Luffy launches a flurry of punches down on an enemy for 3 turns, dealing 15 damage each turn and stunning all strategic skills.",
    classes: ["action", "melee", "physical"],
    energy: {
      a: 1,
      r: 1
    },
    target: "enemy",
    move: function(payload) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.bleed2,
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
    name: "Gomu Gomu no Pinwheel",
    type: "attack",
    val: 0,
    cooldown: 2,
    description:
      "Luffy implants his legs in the ground and twists his torso. The next time an enemy uses a skill against Luffy or his team, Luffy will stun that character and deal 20 damage to all enemies.",
    target: "allally",
    classes: ["instant", "melee", "physical"],
    energy: {
      r: 2
    },
    move: function(payload) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.unique,
        inherit: this
      });
    }
  },
  skill4: {
    name: "Luffy Disguise",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    description:
      "Luffy turns off his mind, ending all actions he currently has in affect and ignores all skills for one turn. The ignore effect last an additional turn each time it is used.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.offense.skill[3].usage += 1;
      let usage = payload.offense.skill[3].usage;
      let invulnerable = status.invulnerable;

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: invulnerable,
        inherit: this
      });

      invulnerable.active += 1;
    }
  },
  skill5: {
    name: "Gomu Gomu no Bazooka",
    type: "attack",
    val: 50,
    cooldown: 0,
    description:
      "Luffy winds up both arm and deal 50 damage to all fully stunned or partially stunned enemy. Luffy also gains one Green energy.",
    target: "enemy",
    classes: ["instant", "melee", "physical"],
    energy: {
      a: 1,
      i: 1
    },
    move: function(payload) {
      let check = payload.target.status.onState.some(x => x.type === "stun");
      if (check) {
        skill.damage({
          subject: payload.target,
          val: payload.val
        });
      }

      payload.myEnergy.a += 1;
    }
  }
};

let character = {
  name: info.name,
  id: info.id,
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
