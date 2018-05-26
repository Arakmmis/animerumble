let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "mutenRoshi",
  name: "mutenRoshi",
  anime: "dbz",
  author: "MiraiSSJ",
  pictures: "MiraiSSJ",
  description:
    "A perverted hermit,Muten Roshi is also the founder of the Turtle School. As an experienced master in martial arts, he has access to an extensive skillset which notably includes the legendary Kamehameha."
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({
    active: -1
  }),
  bleed: library.bleed({
    val: 15,
    active: 3
  }),
  heal: library.heal({
    active: 1,
    val: 20
  }),
  ignore: library.ignore({
    active: 4
  }),
  dd: library.dd({
    isStack: true,
    val: 15,
    active: 4
  }),
  boost: library.boost({
    val: 5,
    active: 4,
    modify: function(payload, value) {
      if (
        payload.skill.name === "Afterimage Strike" ||
        payload.skill.name === "Drunken Fist"
      ) {
        payload.val += self.val;
      }
    }
  }),
  boost: library.boost({
    val: 10
  }),
  counter: library.counter({
    harmfulOnly: true,
    modify: function(payload, self) {
      let reduce = library.reduce({
        val: 10
      });
      let inherit = {
        name: self.name,
        nameId: self.nameId,
        id: self.skillIndex - 1
      };
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onAtack",
        status: reduce,
        inherit: inherit
      });

      payload.offense.hp -= 20;
      // payload.state.energy[payload.theirTurn].i += 1;
      // console.log("NATSU INCREASE");
    }
  }),
  reduce: library.reduce({
    val: 10
  }),
  transform: {
    name: "Transform",
    active: 5,
    harmful: false,
    modify: function(payload, self) {
      if (payload.active === 5) {
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
    name: "Full Power",
    type: "attack",
    val: 0,
    alt: 4,
    cooldown: 4,
    description:
      "For 4 turns, Roshi gains 15 points of damage reduction, and 'Afterimage Strike' and 'Drunken Fist' will deal 5 additional damage. During this time, this skill is replaced by 'Original Kamehameha'",
    energy: {
      r: 1
    },
    target: "self",
    classes: ["instant", "physical"],
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.dd,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.boost,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });
    }
  },
  skill2: {
    name: "Afterimage Strike",
    type: "attack",
    val: 0,
    cooldown: 2,
    harmful: false,
    classes: ["instant", "melee", "physical"],
    description:
      "Roshi prepares to dodge the next attack. For 1 turn, the first new harmful skill used on him will be countered. The countered enemy takes 20 damage and will receive 10 additional damage from Physical and Energy skills.",
    target: "self",
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.counter,
        inherit: this
      });
    }
  },
  skill3: {
    name: "Drunken Fist",
    type: "attack",
    val: 20,
    cooldown: 2,
    harmful: false,
    classes: ["action", "melee", "physical"],
    description:
      "Roshi attacks with his Drunken Fist. For 3 turns, one enemy will receive 15 damage. The following three turns, Roshi will ignore all harmful effects except damage and chakra cost changes. This skill cannot be countered.",
    target: "enemy",
    energy: {
      r: 2
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onState",
        status: status.ignore,
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
  skill4: {
    name: "Evil Containment Wave",
    type: "invulnerable",
    noCounter: true,
    val: 0,
    cooldown: 4,
    classes: ["instant", "ranged", "energy"],
    description:
      "One enemy has all helpful skills on them removed, then they will be stunned and invulnerable to all further helpful skills each turn and Roshi instantly dies. This skill ignores invulnerability and cannot be countered or reflected.",
    target: "enemy",
    energy: {
      a: 1,
      s: 1,
      w: 1
    },
    move: function(payload, self) {
      payload.offense.hp = 0;

      skill.removeStatus({
        subject: payload.target
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.stun,
        inherit: this
      });
    }
  },
  skill5: {
    name: "Original Kamehameha",
    type: "attack",
    val: 40,
    piercing: true,
    alt: 0,
    cooldown: 1,
    classes: ["instant", "ranged", "energy"],
    description:
      "Roshi blasts his enemy with his signature technique, dealing 40 piercing damage to them, reducing their non-affliction damage by 10 and increasing their cooldowns by 1 for 1 turn.",
    target: "enemy",
    energy: {
      a: 1,
      s: 1
    },
    move: function(payload, self) {
      skill.cooldownIncrease({
        subject: payload.target
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.reduce,
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
