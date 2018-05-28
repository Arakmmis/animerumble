let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");

let info = {
  id: "usopp",
  name: "Usopp",
  anime: "OnePiece",
  author: "63k",
  pictures: "Zetsu"
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  stun2: library.stun({
    comprise: ["melee"]
  }),
  protect: library.protect({
    val: 15,
    active: 4
  }),
  bleed: library.bleed({
    val: 30,
    active: 1,
    classes: ["affliction"]
  }),
  bleed2: library.bleed({
    val: 30,
    active: 1,
    classes: ["affliction"]
  }),
  state: library.state({
    name: "Super Kill Lead Star",
    active: 2
  }),
  state2: library.state({
    name: "Bottle Throw",
    active: 2
  })
};

let skills = {
  skill1: {
    name: "Super Kill Lead Star",
    type: "attack",
    val: 20,
    cooldown: 0,
    classes: ["instant", "ranged", "affliction"],
    energy: {
      w: 1
    },
    ignoreInvul: true,
    description:
      "Usopp deals 20 damage to an enemy, that ignores invulnerability. If the enemy had bottle throw used on them last turn, they are stunned for one turn.",
    target: "enemy",
    move: function(payload, self) {
      let check = payload.target.status.onState.some(
        x => x.type === "state" && x.name === "Bottle Throw"
      );
      if (check) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.stun,
          inherit: this
        });
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.state,
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
    name: "Bottle Throw",
    type: "attack",
    val: 0,
    cooldown: 1,
    description:
      "Usopp throw a bottle at an enemy stunning their melee skills for one turn.",
    classes: ["instant", "ranged", "affliction"],
    energy: {
      r: 1
    },
    target: "enemy",
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.stun2,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.state2,
        inherit: this
      });
    }
  },
  skill3: {
    name: "Gunpowder Star",
    type: "attack",
    val: 0,
    cooldown: 3,
    description:
      "Usopp fire a shot filled with highly explosive gunpowder dealing 30 affliction damage. If the enemy is stunned by Super Kill Lead Star, deal an additional 30 damage.",
    target: "enemy",
    classes: ["instant", "ranged", "affliction"],
    energy: {
      r: 2
    },
    move: function(payload, self) {
      let check = payload.target.status.onState.some(
        x => x.type === "state" && x.name === "Super Kill Lead Star"
      );
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.bleed,
        inherit: this
      });

      if (check) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: status.bleed2,
          inherit: this
        });
      }
    }
  },
  skill4: {
    name: "Hiding",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "Usopp hides, making him invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "affliction"],
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
