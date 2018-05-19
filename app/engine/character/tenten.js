let constructor = require("../constructor.js");
let helper = require("../helper.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");

let info = {
  id: "tenten",
  name: "Tenten",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  invulnerable2: library.invulnerable({
    classes: ["physical", "energy"]
  }),
  bleed: library.bleed({
    val: 5,
    active: -1
  }),
  reduce: library.reduce({
    val: 5,
    active: 1
  }),
  reduce2: library.reduce({
    val: 10,
    active: 1
  }),
  boost: library.boost({
    val: 10,
    isStack: true,
    active: -1,
    modify: function(payload, self) {
      if (payload.skill.name === "Twin Rising Dragons Trap") {
        payload.val += self.val * self.stack;
      }
    }
  }),
  state: library.state({
    name: "Twin Rising Dragons Full Release",
    active: -1
  })
};

let skills = {
  skill1: {
    name: "Twin Rising Dragons",
    type: "attack",
    val: [20, 10, 10],
    cooldown: 0,
    energy: {
      a: 1
    },
    noCounter: true,
    classes: ["instant", "ranged", "physical"],
    target: "allenemy",
    description:
      "Tenten deals 20 damage to one enemy, and 10 to all other enemies. All enemies will receive 10 additional damage from 'Twin Rising Dragons Trap' and will have their physical and chakra damage lowered by an additional 10 from it. This skill cannot be countered.",
    move: function(payload, self) {
      if (payload.recursive === 0) {
        let check = skill.checkStatus({
          subject: payload.offense,
          onStatus: "onState",
          statusType: "state",
          statusName: "Twin Rising Dragons Full Release"
        });
        if (check) {
          skill.pushStatus(
            {
              subject: payload.offense,
              onStatus: "onAttack",
              status: status.boost,
              inherit: this
            },
            "stack"
          );
          skill.removeStatus(
            {
              subject: payload.offense,
              onStatus: "onState",
              statusType: "state",
              name: "Twin Rising Dragons Full Release"
            },
            "specific"
          );
        }

        skill.pushStatus(
          {
            subject: payload.offense,
            onStatus: "onAttack",
            status: status.boost,
            inherit: this
          },
          "stack"
        );
      }

      skill.pushStatus(
        {
          subject: payload.target,
          onStatus: "onAttack",
          status: status.reduce2,
          inherit: this
        },
        "stack"
      );

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill2: {
    name: "Twin Rising Dragons Trap",
    type: "attack",
    val: 5,
    cooldown: 1,
    classes: ["instant", "ranged", "physical"],
    description:
      "Tenten deals 5 damage to all enemies. For 1 turn, their physical and chakra damage will be lowered by 5. All stacks of 'Twin Rising Dragons' will be removed from all targets afterwards. This skill cannot be countered.",
    energy: {
      r: 1
    },
    target: "allenemy",
    move: function(payload, self) {
      let checkState = skill.checkStatus({
        subject: payload.offense,
        onStatus: "onState",
        statusType: "state",
        statusName: "Twin Rising Dragons Full Release"
      });
      let reduce = status.reduce;
      if (checkState) {
        status.reduce.active = 2;
      }
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.reduce,
        inherit: this
      });

      if (payload.recursive === 2) {
        let check = skill.checkStatus({
          subject: payload.offense,
          onStatus: "onAttack",
          statusType: "boost",
          statusName: "Twin Rising Dragons"
        });

        if (check) {
          skill.removeStatus(
            {
              subject: payload.offense,
              onStatus: "onAttack",
              statusType: "boost",
              name: "Twin Rising Dragons"
            },
            "specific"
          );
        }

        if (checkState) {
          skill.removeStatus(
            {
              subject: payload.offense,
              onStatus: "onState",
              statusType: "state",
              name: "Twin Rising Dragons Full Release"
            },
            "specific"
          );
        }
      }

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill3: {
    name: "Twin Rising Dragons Full Release",
    cooldown: 1,
    description:
      "Tenten becomes invulnerable to physical and chakra skills for 1 turn and improves her skills until the next time she uses one; this does not stack. 'Twin Rising Dragons' will apply its non-damage effect twice and the damage reduction effect of 'Twin Rising Dragons Trap' will last an additional turn.",
    target: "self",
    classes: ["instant", "physical"],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.invulnerable2,
        inherit: this
      });
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.state,
        inherit: this
      });
    }
  },
  skill4: {
    name: "Spiked Boulder Wall",
    type: "invulnerable",
    cooldown: 4,
    description: "This skill makes Tenten invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "physical"],
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
