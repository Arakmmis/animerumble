let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "uzumakiNarutoAR",
  name: "Uzumaki Naruto (AR)",
  anime: "Naruto",
  author: "Tsvet, Zetsu",
  pictures: "Kakarotossj"
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  protect: library.protect({
    val: 15,
    active: 4
  }),
  disableDrIv: library.disableDrIv({
    active: 1
  }),
  boostRasengan: library.boost({
    isStack: true,
    val: 5,
    active: -1,
    modify: function(payload, self) {
      console.log(payload.skill.name);
      if (payload.skill.name === "Rasengan") {
        payload.val += self.val * self.stack;
      }
    }
  }),
  stateRasengan: library.state({
    name: "Rasengan",
    active: 2
  }),
  counter: library.counter({
    val: 3,
    modify: function(payload, self) {
      let boost = library.boost({
        val: 5,
        active: 1
      });
      let inherit = {
        name: self.name,
        nameId: self.nameId,
        id: self.skillIndex - 1
      };
      let owner = payload.state[payload.theirTurn].findIndex(
        x => x.nameId === inherit.nameId
      );
      let ownerState = payload.state[payload.theirTurn][owner];
      skill.pushStatus({
        subject: ownerState,
        onStatus: "onSelf",
        status: boost,
        inherit: inherit
      });

      //Charge
      let getCharge = ownerState.status.onState.findIndex(
        x => x.type === "charge"
      );
      if (getCharge === -1) {
        let swap = ownerState.skill[0];
        ownerState.skill[0] = ownerState.skill[4];
        ownerState.skill[4] = swap;

        let charge = library.charge({
          val: 1
        });
        console.log(self);
        let inherit = {
          name: "Shadow Clones",
          nameId: self.nameId,
          id: 0
        };
        skill.pushStatus({
          subject: ownerState,
          onStatus: "onState",
          status: charge,
          inherit: inherit
        });
      } else {
        skill.charge({
          subject: ownerState,
          name: "Shadow Clones",
          increment: "add"
        });
      }
    }
  }),
  charge: library.charge({
    val: 3
  }),
  track: library.track({
    modify: function(payload, self) {
      //Reduce Charge
      let getCharge = payload.offense.status.onState.findIndex(
        x => x.type === "charge"
      );
      console.log(getCharge);

      if (getCharge !== -1) {
        let charge = payload.offense.status.onState[getCharge].val;
        console.log("NARUTO CHARGE", charge);
        if (charge >= 3) {
          payload.offense.skill[0].energy.r = 2;
        }
        if (charge >= 1) {
          payload.offense.skill[1].type = "piercing";
          payload.offense.skill[2].target = "allenemy";
          payload.offense.skill[2].cooldown = 1;
        }
        if (charge === 1) {
          payload.offense.skill[0].energy.r = 1;
        }
        if (charge === 0) {
          console.log("Naruto track false");
          payload.offense.skill[1].type = "attack";
          payload.offense.skill[2].target = "enemy";
          payload.offense.skill[2].cooldown = 0;

          let swap = payload.offense.skill[0];
          payload.offense.skill[0] = payload.offense.skill[4];
          payload.offense.skill[4] = swap;

          skill.removeStatus(
            {
              subject: payload.offense,
              onStatus: "onReceive",
              statusType: "protect",
              name: "Shadow Clones"
            },
            "specific"
          );
          console.log("Naruto track false");
        }
      } else {
      }
    }
  }),
  transform: {
    name: "Transform",
    active: 1,
    harmful: false,
    modify: function(payload) {
      let swap = payload.offense.skill[0];
      payload.offense.skill[0] = payload.offense.skill[4];
      payload.offense.skill[4] = swap;
    }
  }
};

let skills = {
  skill1: {
    name: "Shadow Clones",
    type: "attack",
    val: 0,
    cooldown: 1,
    classes: ["instant", "chakra", "strategic"],
    energy: {
      r: 1
    },
    description:
      "Naruto summons 3 Shadow Clones, gaining 15 damage reduction. Every time he uses a skill, he loses 1 Shadow Clone. As long as this skill has at least 1 Shadow Clone active, it will become Sexy Technique",
    target: "self",
    move: function(payload) {
      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onState",
        status: status.charge,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onReceive",
        status: status.protect,
        inherit: this
      });

      skill.pushStatus(
        {
          subject: payload.offense,
          onStatus: "onSelf",
          status: status.track,
          inherit: this
        },
        "replace"
      );

      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });
    }
  },
  skill2: {
    name: "Rasengan",
    type: "attack",
    val: 30,
    cooldown: 1,
    description:
      "Naruto forms a ball of chakra and hits one enemy with it. The target of this skill will be dealt 30 damage. This skill will stun the enemy and deal piercing damage if Naruto has at least one Shadow Clone.",
    classes: ["instant", "melee", "physical"],
    energy: {
      s: 1,
      r: 1
    },
    target: "enemy",
    move: function(payload) {
      let getCharge = payload.offense.status.onState.findIndex(
        x => x.type === "charge"
      );
      if (getCharge !== -1) {
        let charge = payload.offense.status.onState[getCharge].val;
        if (charge >= 1) {
          skill.pushStatus({
            subject: payload.target,
            onStatus: "onState",
            status: status.stun,
            inherit: this
          });

          skill.pushStatus({
            subject: payload.target,
            onStatus: "onState",
            status: status.stateRasengan,
            inherit: this
          });
        }
        //Reduce Charge
        payload.offense.status.onState[getCharge].val -= 1;
      }

      //Remove Stack
      skill.removeStatus(
        {
          subject: payload.offense,
          onStatus: "onAttack",
          statusType: "boost",
          name: "Uzumaki Naruto Barrage"
        },
        "specific"
      );

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill3: {
    name: "Uzumaki Naruto Barrage",
    type: "attack",
    val: 15,
    cooldown: 0,
    description:
      "Naruto deals 15 piercing damage to one enemy. This skill has 1 cooldown and targets all enemies during Shadow Clones. If used on a target stunned by Rasengan, that enemy is unable to reduce damage or become invulnerable for 1 turn. Every time this skill is used, the damage of Rasengan is increased by 5 until the next item Rasengan is used.",
    piercing: true,
    target: "enemy",
    noCounter: true,
    classes: ["instant", "melee", "physical"],
    energy: {
      r: 1
    },
    move: function(payload) {
      //Reduce Charge
      let getCharge = payload.offense.status.onState.findIndex(
        x => x.type === "charge"
      );
      if (getCharge !== -1) {
        let charge = payload.offense.status.onState[getCharge].val;
        if (payload.recursive === 0) {
          payload.offense.status.onState[getCharge].val -= 1;
        }
      }

      let check = payload.target.status.onState.some(
        x => x.type === "state" && x.name === "Rasengan"
      );

      if (check) {
        skill.pushStatus({
          subject: payload.target,
          onStatus: "onState",
          status: status.disableDrIv,
          inherit: this
        });
      }

      if (payload.recursive === 0) {
        skill.pushStatus(
          {
            subject: payload.offense,
            onStatus: "onAttack",
            status: status.boostRasengan,
            inherit: this
          },
          "stack"
        );
      }

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill4: {
    name: "Amateur Summoning: Gamakichi",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "This skill makes Naruto invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload) {
      //Reduce Charge
      let getCharge = payload.offense.status.onState.findIndex(
        x => x.type === "charge"
      );
      if (getCharge !== -1) {
        let charge = payload.offense.status.onState[getCharge].val;
        payload.offense.status.onState[getCharge].val -= 1;
      }

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.invulnerable,
        inherit: this
      });
    }
  },
  skill5: {
    name: "Sexy Technique",
    type: "attack",
    val: 0,
    cooldown: 2,
    description:
      "Transforming into a woman, Naruto targets one enemy. If that enemy uses a non-mental skill, then they will be countered. If countered, Naruto's next skill will deal 5 more damage and Naruto will gain one Shadow Clone charge. This skill is invisible and cost one random chakra if Naruto has more than 2 Shadow Clones.",
    classes: ["instant", "melee", "physical"],
    energy: {
      r: 1
    },
    target: "enemy",
    move: function(payload) {
      //Reduce Charge
      let getCharge = payload.offense.status.onState.findIndex(
        x => x.type === "charge"
      );
      if (getCharge != -1) {
        let charge = payload.offense.status.onState[getCharge].val;
        payload.offense.status.onState[getCharge].val -= 1;
      }

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.counter,
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
