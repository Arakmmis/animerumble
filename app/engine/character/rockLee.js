let constructor = require("../constructor.js");
let helper = require("../helper.js");
let library = require("../library/status.js");

let info = {
  id: "rockLee"
};

let status = {
  invincible: library.invincible({
    owner: info.id
  }),
  bleed: library.bleed({
    val: 10,
    active: 3,
    owner: info.id
  }),
  bleed2: library.bleed({
    val: 25,
    active: 3,
    owner: info.id
  }),
  protect: library.reduce({
    val: 10,
    active: 3,
    owner: info.id
  }),
  reduce2: library.reduce({
    val: 15,
    active: 1,
    owner: info.id
  }),
  boost1: {
    name: "Front Lotus",
    owner: info.id,
    val: 30,
    type: "skill",
    active: 2,
    modify: function(payload) {
      if (payload.offense.skill[payload.skill].name === "Front Lotus") {
        payload.val += this.val;
      }
    }
  },
  boost2: {
    name: "Front Lotus",
    owner: info.id,
    val: 10,
    type: "skill",
    active: 3,
    modify: function(payload) {
      if (payload.offense.skill[payload.skill].name === "Front Lotus") {
        payload.val += this.val;
      }
    }
  },
  state: library.state({
    name: "Fifth Gate Opening",
    active: 2,
    owner: info.id
  }),
  transform: {
    name: "Transform",
    owner: info.id,
    active: 3,
    modify: function(payload) {
      if (payload.active === 3) {
        let swap = payload.offense.skill[2];
        payload.offense.skill[2] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
        console.log("SWAP", swap);
        console.log("ZERO", payload.active);
      } else if (payload.active === 1) {
        let swap = payload.offense.skill[2];
        payload.offense.skill[2] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
        console.log("SWAP", swap);
        console.log("LAST", payload.active);
      }
    }
  }
};

let skills = {
  skill1: {
    name: "High Speed Taijutsu",
    type: "attack",
    val: 0,
    cooldown: 0,
    classes: ['action', 'melee', 'physical'],
    energy: {
      a: 1
    },
    target: "enemy",
    description:
      "Lee deals 10 damage to one enemy for 3 turns. The following 3 turns, Lee will gain 10 points of damage reduction and that enemy will receive an additional 10 damage from 'Front Lotus'.* This skill stacks and will deal 15 additional damage during 'Fifth Gate Opening'",
    move: function(payload) {
      let state = payload.offense.status.onState.some(
        x => x.name === "Fifth Gate Opening"
      );
      if (state) {
        payload.target.status.onAttack.push(
          new constructor.status(status.bleed2, this.name, 1)
        );
      } else {
        payload.target.status.onAttack.push(
          new constructor.status(status.bleed, this.name, 1)
        );
      }
      payload.offense.status.onReceive.push(
        new constructor.status(status.protect, this.name, 1)
      );
      payload.offense.status.onAttack.push(
        new constructor.status(status.boost2, this.name, 1)
      );
    }
  },
  skill2: {
    name: "Front Lotus",
    type: "attack",
    val: 30,
    cooldown: 0,
    classes: ['instant', 'melee', 'physical'],
    description:
      "Opening the first gate, Lee uses a high powered taijutsu to deal 30 damage to one enemy. This skill will deal 30 additional damage during 'Fifth Gate Opening'.",
    energy: {
      a: 1,
      r: 1
    },
    target: "enemy",
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Fifth Gate Opening",
    cooldown: 4,
    description:
      "Lee removes all harmful effects on him, losing 50 health*, and then becoming invulnerable to all harmful skills for 2 turns. The following 2 turns, this skill will be replaced by 'Final Lotus'. The affliction damage this skill deals cannot be ignored and cannot kill Lee.",
    target: "self",
    classes: ['instant', 'mental'],
    energy: {
      a: 1
    },
    move: function(payload) {
      payload.target.status.onAttack.push(
        new constructor.status(status.boost1, this.name, 3)
      );
      payload.target.status.onSelf.push(
        new constructor.status(status.transform, this.name, 3)
      );
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 3),
        new constructor.status(status.state, this.name, 3)
      );
      payload.target.hp -= 50;
    }
  },
  skill4: {
    name: "Lee Block",
    type: "attack",
    cooldown: 4,
    description: "This skill makes Rock Lee invulnerable for 1 turn.",
    target: "self",    
    classes: ['instant', 'physical'],
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invincible, this.name, 4)
      );
    }
  },
  skill5: {
    name: "Final Lotus",
    type: "attack",
    val: 100,
    cooldown: 0,
    description:
      "Lee uses his strongest ability, expending all his chakra and dealing 100 damage to one enemy.",
    target: "enemy",
    classes: ['instant', 'melee', 'physical'],
    energy: {
      a: 2
    },
    move: function(payload) {
      payload.target.hp -= 100;
    }
  }
};

let character = {
  name: "Rock Lee",
  id: "rockLee",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4),
    new constructor.skill(skills.skill5)
  ]
};

module.exports = character;
