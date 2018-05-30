let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "hyuugaNejiAR",
  name: "Hyuuga Neji AR",
  anime: "Naruto",
  author: "63k, Krasi.fit",
  pictures: "Krasi.fit",
  description:
    "A member of team Gai; Neji is the most talented member of the Hyuuga clan in both mind and body. Neji can use the most powerful techniques of his clan, shutting down an enemy's chakra or defending with an absolute defense."
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  protect: library.protect({
    val: 15
  }),
  reduce: library.reduce({
    val: 5,
    active: 1
  }),
  bleed: library.bleed({
    val: 10,
    active: 2
  }),
  boost: library.boost({
    val: 25,
    active: 2,
    modify: function(payload, self) {
      if (payload.skill.name === "Organ Strike") {
        payload.val += payload.val + self.val;
      }
    }
  }),
  track: library.track({
    isInvisible: false,
    active: 2,
    modify: function(payload, self) {
      if (payload.active === 0 && payload.offense.hp < 15) {
        payload.hp = 0;
      }
    }
  }),
  transform: {
    name: "Transform",
    active: 3,
    harmful: false,
    modify: function(payload, self) {
      if (payload.active === 3) {
        let swap = payload.offense.skill[2];
        payload.offense.skill[2] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
      } else if (payload.active === 1) {
        let swap = payload.offense.skill[2];
        payload.offense.skill[2] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Eight Trigrams Revolving Heaven",
    type: "attack",
    val: 15,
    cooldown: 1,
    classes: ["instant", "ranged", "energy"],
    energy: {
      i: 1
    },
    target: "allenemy",
    description:
      "Neji becomes invulnerable* for one turn, dealing 15 damage to all enemies.",
    move: function(payload, self) {
      if (payload.recursive === 0) {
        skill.pushStatus({
          subject: payload.offense,
          onStatus: "onState",
          status: status.invulnerable,
          inherit: this
        });
      }

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill2: {
    name: "Eight Trigrams Sixty-Four Palms",
    type: "attack",
    val: 35,
    cooldown: 1,
    classes: ["instant", "melee", "physical"],
    piercing: true,
    description:
      "This skill deals 35 piercing damage to an enemy and removes an energy from their chakra pool.",
    energy: {
      a: 1,
      i: 1
    },
    target: "enemy",
    move: function(payload, self) {
      skill.removeEnergy({
        theirEnergy: payload.theirEnergy,
        myEnergy: payload.myEnergy,
        amount: 1
      });
      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill3: {
    name: "Gentle Fist",
    type: "attack",
    val: 0,
    alt: 4,
    cooldown: 1,
    classes: ["action", "melee", "physical"],
    description:
      "Neji deals 10 damage to an enemy for 2 turns. The target of this skill takes double damage from Organ Strike. This skill becomes Organ Strike for 2 turns.",
    target: "enemy",
    marking: true,
    energy: {
      a: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.bleed,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.boost,
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
  skill4: {
    name: "Byakugan",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "This skill makes Hyuuga Neji invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "strategic"],
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
    name: "Organ Strike",
    type: "attack",
    val: 25,
    alt: 2,
    cooldown: 2,
    classes: ["action", "melee", "physical", "affliction"],
    energy: {
      a: 1,
      i: 1
    },
    target: "enemy",
    description:
      "Neji removes all Destructible Defense and then deals 25 damage to an enemy. If they fall below 15 health for 2 turns*, they will instantly die.",
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.track,
        inherit: this
      });

      skill.removeDD({
        subject: payload.target,
        myTurn: payload.myTurn,
        theirTurn: payload.theirTurn,
        state: payload.state
      });

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
