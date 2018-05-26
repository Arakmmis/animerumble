let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "krillin",
  name: "Krillin",
  anime: "dbz",
  author: "MiraiSSJ",
  pictures: "MiraiSSJ",
  description:
    "One of Muten Roshi's pupils, Krillin is Goku's lifelong best friend.  Quite fearful, yet loyal, Krillin is nonetheless a talented martial artist capable of powerful moves such as his Destructo Disk."
};

let status = {
  invulnerable: library.invulnerable({}),
  reduce: library.reduce({
    val: 10
  }),
  bleed: library.bleed({
    val: 10,
    active: 2,
    classes: ["affliction"],
    persistence: "instant",
    nextTurn: true,
    modify: function(payload, self) {
      if (payload.active === 1) {
        payload.offense.hp -= payload.val;
      }
    }
  }),
  boost: library.boost({
    isStack: true,
    val: 5,
    modify: function(payload, self) {
      if (payload.skill.name === "Destructo Disk") {
        payload.val += self.val * self.stack;
      }
    }
  }),
  heal: library.heal({
    active: 2,
    val: 25
  }),
  counter: library.counter({
    harmfulOnly: true,
    modify: function(payload, self) {
      let state = library.state({
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
        status: state,
        inherit: inherit
      });
      // payload.state.energy[payload.theirTurn].i += 1;
      // console.log("NATSU INCREASE");
    }
  })
};

let skills = {
  skill1: {
    name: "Destructo Disk",
    type: "attack",
    val: 15,
    piercing: true,
    cooldown: 0,
    classes: ["instant", "ranged", "energy"],
    energy: {
      s: 1
    },
    description:
      "Krillin throws a circular blade of Ki at his enemy, dealing 15 piercing damage to them and increasing their cooldowns by 1 for 1 turn. If that enemy was affected by 'Solar Flare', they will lose 1 energy. This skill deals 5 more damage each time it is used.",
    target: "enemy",
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      });

      skill.cooldownIncrease({
        subject: payload.target
      });

      skill.pushStatus(
        {
          subject: payload.offense,
          onStatus: "onAttack",
          status: status.boost,
          inherit: this
        },
        "stack"
      );

      let check = skill.checkStatus({
        subject: payload.target,
        onStatus: "onState",
        statusType: "state",
        statusName: "Solar Flare"
      });

      if (check) {
        skill.removeEnergy({
          theirEnergy: payload.theirEnergy,
          myEnergy: payload.myEnergy,
          amount: 1
        });
      }
    }
  },
  skill2: {
    name: "Solar Flare",
    type: "attack",
    val: 0,
    cooldown: 3,
    description:
      "Krillin prepares to blind an enemy. For 1 turn, the first new harmful skill used by that enemy will be countered. The countered enemy ignores all helpful skills. This skill is invisible.",
    classes: ["instant", "melee", "physical"],
    energy: {
      r: 1
    },
    target: "enemy",
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.counter,
        inherit: this
      });
    }
  },
  skill3: {
    name: "Scattering Bullet",
    type: "attack",
    val: 20,
    cooldown: 1,
    description:
      "Krillin fires a large ki blast, which scatters and hit all enemies, dealing 20 damage to them. Their non-affliction damage is reduced by 10 for 1 turn.",
    target: "allenemy",
    classes: ["instant", "ranged", "energy"],
    energy: {
      s: 1,
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.reduce,
        inherit: this
      });
      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill4: {
    name: "Senzu Bean",
    type: "invulnerable",
    val: 0,
    cooldown: 2,
    description:
      "Krillin takes a senzu bean for himself or a team mate, removing all harmful effects on that ally and making them gain 1 energy, then they will heal 25 health over 2 turns. This skill can only be used thrice in a game.",
    target: "ally",
    usage: 0,
    classes: ["instant", "strategic"],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      if (self.usage === 2) {
        self.required = true;
      }

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.heal,
        inherit: this
      });
      skill.removeStatus(
        {
          subject: payload.target
        },
        "harmful"
      );
      skill.gainEnergy({
        myEnergy: payload.myEnergy,
        amount: 1
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
