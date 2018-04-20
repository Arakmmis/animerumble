let constructor = require("../constructor.js");
let helper = require("../helper.js");
let library = require("../library/status.js");

let info = {
  id: "tenten"
};

let status = {
  invincible: library.invincible({
    owner: info.id
  }),
  bleed: library.bleed({
    val: 5,
    active: -1,
    owner: info.id
  }),
  reduce: library.reduce({
    val: 5,
    active: 1,
    owner: info.id
  }),
  reduce2: library.reduce({
    val: 15,
    active: 1,
    owner: info.id
  }),
  boost: {
    name: "Twin Rising Dragons",
    owner: info.id,
    val: 10,
    type: "skill",
    active: -1,
    modify: function(payload) {
      if (
        payload.offense.skill[payload.skill].name === "Twin Rising Dragons Trap"
      ) {
        payload.val += this.val;
      }
    }
  },
  dd: {
    name: "Bug Wall",
    owner: info.id,
    val: 20,
    type: "dd",
    active: -1,
    modify: function(payload) {
      let onReceive = payload.target.status.onReceive;
      let index = onReceive.findIndex(x => x.name === "Bug Wall");
      onReceive[index].val -= this.val;
      if (onReceive[index.val] <= 0) {
        payload.val += onReceive[index.val];
      } else {
        payload.val = 0;
      }
    }
  },
  state: library.state({
    name: "Twin Rising Dragons Full Release",
    active: -1,
    owner: info.id
  })
};

let skills = {
  skill1: {
    name: " Twin Rising Dragons",
    type: "attack",
    val: 0,
    cooldown: 0,
    energy: {
      a: 1
    },
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
            new constructor.status(status.boost, this.name, 1),
            new constructor.status(status.boost, this.name, 1)
          );
        } else {
          payload.offense.status.onAttack.push(
            new constructor.status(status.boost, this.name, 1)
          );
        }
        payload.target.hp -= 20 + payload.val;
      } else {
        payload.target.hp -= 10 + payload.val;
      }
    }
  },
  skill2: {
    name: "Twin Rising Dragons Trap",
    type: "attack",
    val: 5,
    cooldown: 1,
    description:
      "Tenten deals 5 damage to all enemies. For 1 turn, their physical and chakra damage will be lowered by 5. All stacks of 'Twin Rising Dragons' will be removed from all targets afterwards. This skill cannot be countered.",
    mana: 1,
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
            new constructor.status(status.reduce2, this.name, 2)
          );
        }
      } else {
        for (i = 0; i < count; i++) {
          payload.target.status.onAttack.push(
            new constructor.status(status.reduce, this.name, 2)
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
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 4),
        new constructor.status(status.state, this.name, 4)
      );
    }
  },
  skill4: {
    name: "Spiked Boulder Wall",
    type: "attack",
    cooldown: 4,
    description: "This skill makes Tenten invulnerable for 1 turn.",
    target: "self",
    mana: 1,
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 4)
      );
    }
  }
};

let character = {
  name: "Tenten",
  id: "tenten",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
