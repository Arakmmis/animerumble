let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "monkeyDLuffy",
  name: "Monkey D Luffy",
  anime: "OnePiece",
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
    nextTurn: true,
    modify: function(payload, self) {
      if (payload.active === 1) {
        payload.offense.hp -= payload.val;

        let stun = library.stun({
          active: 1
        });
        let inherit = {
          name: self.name,
          nameId: self.nameId,
          id: self.skillIndex - 1
        };
        skill.pushStatus({
          subject: payload.offense,
          onStatus: "onState",
          status: stun,
          inherit: inherit
        });
        self.isInvisible = false;
      }
    }
  }),
  bleed2: library.bleed({
    val: 15,
    active: 3,
    classes: ["physical"]
  }),
  ignore: library.ignore({
    active: 1
  }),
  unique: {
    active: 2,
    type: "unique",
    modify: function(payload, self) {
      if (
        self.usage === 0 &&
        helper.sameTeam(payload.offense.nameId, self.nameId, false)
      ) {
        let stun = library.stun({
          active: 2
        });
        let inherit = {
          name: self.name,
          nameId: self.nameId,
          id: self.skillIndex - 1
        };
        skill.pushStatus({
          subject: payload.offense,
          onStatus: "onState",
          status: stun,
          inherit: inherit
        });

        //Attack All
        let myTurn = payload.state[payload.myTurn].filter(x => x.hp > 0);
        myTurn.forEach(x => (x.hp -= 20));

        let theirTurn = payload.state[payload.theirTurn].filter(x => x.hp > 0);
        theirTurn.forEach(x => {
          let index = x.status.onReceive.findIndex(
            x => x.type === "unique" && x.name === self.name
          );
          if (index > -1) {
            x.status.onReceive[index].usage = 1;
          }
        });
        // self.usage = 1;
      }
    }
  },
  transform: {
    name: "Transform",
    active: 2,
    harmful: false,
    isInvisible: true,
    modify: function(payload, self) {
      if (payload.active === 2) {
        let swap = payload.offense.skill[0];
        payload.offense.skill[0] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
      } else if (payload.active === 1) {
        let swap = payload.offense.skill[0];
        payload.offense.skill[0] = payload.offense.skill[4];
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
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.bleed,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });
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
    move: function(payload, self) {
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
    move: function(payload, self) {
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
    val: 0,
    cooldown: 4,
    description:
      "Luffy turns off his mind, ending all actions he currently has in affect and ignores all skills for one turn. The ignore effect last an additional turn each time it is used.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      payload.offense.skill[3].usage += 1;
      let usage = payload.offense.skill[3].usage;
      let ignore = status.ignore;
      ignore.active = usage + 1;

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: ignore,
        inherit: this
      });
    }
  },
  skill5: {
    name: "Gomu Gomu no Bazooka",
    type: "attack",
    val: 50,
    cooldown: 0,
    description:
      "Luffy winds up both arm and deal 50 damage to all fully stunned or partially stunned enemy. Luffy also gains one Green energy.",
    target: "allenemy",
    classes: ["instant", "melee", "physical"],
    energy: {
      a: 1,
      i: 1
    },
    move: function(payload, self) {
      let check = payload.target.status.onState.some(x => x.type === "stun");
      let pistol = payload.target.status.onSelf.some(
        x => x.name === "Gomu Gomu no Pistol"
      );
      if (check || pistol) {
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
