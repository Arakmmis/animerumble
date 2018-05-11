let constructor = require("../constructor.js");
let helper = require("../helper.js");
let library = require("../library/status.js");

let info = {
  id: "tenten",
  name: "Tenten",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  bleed: library.bleed({
    val: 5,
    active: -1
  }),
  reduce: library.reduce({
    val: 5,
    active: 1
  }),
  reduce2: library.reduce({
    val: 15,
    active: 1
  }),
  boost: {
    name: "Twin Rising Dragons",
    val: 10,
    type: "skill",
    active: -1,
    modify: function(payload) {
      if (payload.skill.name === "Twin Rising Dragons Trap") {
        payload.val += this.val;
      }
    }
  },
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
    classes: ["instant", "ranged", "physical"],
    target: "allenemy",
    description:
      "Tenten deals 20 damage to one enemy, and 10 to all other enemies. All enemies will receive 10 additional damage from 'Twin Rising Dragons Trap' and will have their physical and chakra damage lowered by an additional 10 from it. This skill cannot be countered.",
    move: function(payload) {
      if (payload.recursive === 0) {
        let state = payload.offense.status.onState.some(
          x => x.name === "Twin Rising Dragons Full Release"
        );
        if (state) {
          payload.offense.status.onAttack.push(
            new constructor.status(status.boost, this, 1),
            new constructor.status(status.boost, this, 1)
          );
        } else {
          payload.offense.status.onAttack.push(
            new constructor.status(status.boost, this, 1)
          );
        }
        payload.target.hp -= payload.val;
      } else {
        payload.target.hp -= payload.val;
      }
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
    move: function(payload) {
      let state = payload.offense.status.onState.some(
        x => x.name === "Twin Rising Dragons Full Release"
      );
      let count = 1;
      if (state) {
        count = 2;
      }

      if (
        payload.offense.status.onAttack.some(
          x => x.name === "Twin Rising Dragons"
        )
      ) {
        payload.offense.status.onAttack = payload.offense.status.onAttack.filter(
          x => x.name !== "Twin Rising Dragons"
        );
        for (i = 0; i < count; i++) {
          payload.target.status.onAttack.push(
            new constructor.status(status.reduce2, this, 2)
          );
        }
      } else {
        for (i = 0; i < count; i++) {
          payload.target.status.onAttack.push(
            new constructor.status(status.reduce, this, 2)
          );
        }
      }
      payload.target.hp -= payload.val;
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
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invulnerable, this, 3),
        new constructor.status(status.state, this, 3)
      );
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
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invulnerable, this, 4)
      );
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
