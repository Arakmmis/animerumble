let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "arlong",
  name: "Arlong",
  anime: "OnePiece",
  author: "DevilWarrior",
  pictures: "DevilWarrior",
  description:
    "Arlong the Saw is a sawshark fishman. He was the pirate captain of the all Fishman crew, the Arlong Pirates, a former member of the Sun Pirates, and the older half-brother of Madam Shyarly."
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({
    active: 1,
    comprise: ["strategic"]
  }),
  stun2: library.stun({
    active: 1,
    comprise: ["ranged"]
  }),
  stun3: library.stun({
    active: 2
  }),
  bleed: library.bleed({
    val: 10,
    active: 1,
    modify: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      });

      let boost = library.boost({
        isStack: true,
        val: 5,
        active: -1,
        modify: function(payload, self) {
          if (payload.skill.name === "Shark Tooth Drill") {
            payload.val += self.val * self.stack;
          }
        }
      });

      let inherit = {
        name: self.name,
        nameId: self.nameId,
        id: self.skillIndex - 1
      };
      console.log("APPLY", inherit);
      skill.pushStatus(
        {
          subject: payload.target,
          onStatus: "onReceive",
          status: status.boost,
          inherit: inherit
        },
        "stack"
      );
    }
  }),
  ignore: library.ignore({
    active: 2
  }),
  boost: library.boost({
    isStack: true,
    val: 10,
    harmful: true,
    active: -1,
    modify: function(payload, self) {
      if (payload.skill.name === "Shark Tooth Drill") {
        payload.val += self.val * self.stack;
      }
    }
  }),
  dd: library.dd({
    val: 20,
    active: 2,
    callback: function(payload, self) {
      payload.target.status.onState = payload.target.status.onState.filter(
        x => !(x.type === "ignore" && x.name === self.nameId)
      );
    }
  }),
  state: library.state({
    active: 3
  }),
  state2: library.state({
    active: 2
  }),
  track: library.track({
    active: 3,
    modify: function(payload, self) {
      if (payload.active === 3) {
        payload.offense.skill[2].energy.r = 1;
      }
      if (payload.active === 1) {
        payload.offense.skill[2].energy.r = 2;
      }
    }
  }),
  transform: {
    name: "Transform",
    active: 3,
    harmful: false,
    modify: function(payload, self) {
      if (payload.active === 3) {
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
    name: "Kiribachi Strike",
    type: "attack",
    val: 20,
    piercing: true,
    cooldown: 1,
    description:
      "Arlong will deal 20 piercing damage to one target. Their strategic skills will be stunned for 1 turn. If the target's health drops below 50 they will instead have 1 random energy removed. That target will take 10 more damage from Shark Tooth Drill permanently, this stacks.",
    energy: {
      a: 1
    },
    target: "enemy",
    classes: ["instant", "melee", "physical"],
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.stun,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.boost,
        inherit: this
      });

      skill.damage({
        subject: payload.target,
        val: payload.val
      });

      if (payload.target.hp - payload.val < 50) {
        skill.removeEnergy({
          theirEnergy: payload.theirEnergy,
          myEnergy: payload.myEnergy,
          amount: 1
        });
      }
    }
  },
  skill2: {
    name: "Tooth Gum",
    type: "attack",
    val: 10,
    alt: 4,
    cooldown: 3,
    classes: ["action", "melee", "physical"],
    description:
      "For 3 turns,Arlong will deal 10 damage to a random enemy each turn. Anyone who targets Arlong will be dealt 5 damage. Whoever is damaged by this skill will take 5 more damage that stacks from Shark Tooth Drill permanently. This skill turns into Great White Swim for 2 turns.",
    target: "randomenemy",
    energy: {
      r: 1
    },
    move: function(payload, self) {
      if (payload.recursive === 0) {
        skill.pushStatus({
          subject: payload.offense,
          onStatus: "onSelf",
          status: status.transform,
          inherit: this
        });
      } else if (payload.recursive === 1) {
        console.log("ARLONG TARGET", payload.target, payload.recursive);
        skill.damage({
          subject: payload.target,
          val: payload.val
        });
        let boost = library.boost({
          isStack: true,
          val: 5,
          active: -1,
          modify: function(payload, self) {
            if (payload.skill.name === "Shark Tooth Drill") {
              payload.val += self.val * self.stack;
            }
          }
        });
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onReceive",
          status: boost,
          inherit: this
        });
      } else if (payload.recursive === 2) {
        console.log("ARLONG TARGET", payload.target, payload.recursive);
        let bleed = status.bleed;
        bleed.nextTurn = true;
        bleed.active = 2;
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: bleed,
          inherit: this
        });
      } else if (payload.recursive === 3) {
        console.log("ARLONG TARGET", payload.target, payload.recursive);
        let bleed = status.bleed;
        bleed.nextTurn = true;
        bleed.active = 3;
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onSelf",
          status: bleed,
          inherit: this
        });
      }
    }
  },
  skill3: {
    name: "Shark Tooth Drill",
    type: "attack",
    val: 20,
    piercing: true,
    cooldown: 3,
    classes: ["instant", "mental", "physical"],
    description:
      "Arlong will target one enemy, they will take 20 piercing damage. That enemy will have their ranged skills stunned for 1 turn. If they drop below 50 health they will be stunned for 2 turns instead and ignore heals while stunned.",
    target: "enemy",
    energy: {
      a: 1,
      r: 2
    },
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      });

      let hp = (payload.target.hp = payload.val);

      if (hp <= 50) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.stun3,
          inherit: this
        });
      } else if (hp > 50) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.stun2,
          inherit: this
        });
      }
    }
  },
  skill4: {
    name: "Shark Bite",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    classes: ["instant", "strategic"],
    description: "Arlong will become invulnerable for 1 turn.",
    target: "self",
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
    name: "Great White Swim",
    type: "attack",
    val: 0,
    alt: 1,
    harmful: false,
    cooldown: 2,
    classes: ["instant", "strategic"],
    description:
      "Arlong will gain 20 destructible defense that lasts for 2 turns. During this time Shark Tooth Drill will cost 1 less random chakra. As long as this destructible defense is active, Arlong will ignore any skills that drain, remove or steal energy.",
    target: "self",
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus(
        {
          subject: payload.target,
          onStatus: "onReceive",
          status: status.dd,
          inherit: this
        },
        "stackDD"
      );
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.ignore,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onSelf",
        status: status.track,
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
