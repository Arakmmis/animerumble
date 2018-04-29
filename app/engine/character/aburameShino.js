let constructor = require("../constructor.js");
let helper = require("../helper.js");
let library = require("../library/status.js");

let info = {
  id: "aburameShino",
  name: "Aburame Shino"
};

let status = {
  invulnerable: library.invulnerable({
    owner: info.id
  }),
  reduce: library.reduce({
    val: 5,
    active: 4,
    owner: info.id
  }),
  boost: {
    name: "Chakra Leech",
    owner: info.id,
    val: 5,
    effect: "custom",
    description: "Increase 5 damage received from Chakra Leech",
    type: "boost",
    active: 4,
    modify: function(payload) {
      if (payload.offense.skill[payload.skill].name === "Chakra Leech") {
        payload.val += this.val;
      }
    }
  },
  dd: library.dd({
    name: "Bug Wall",
    owner: info.id,
    val: 20,
    type: "dd",
    active: 3,    
  })
};

let skills = {
  skill1: {
    name: "Chakra Leech",
    type: "attack",
    val: 20,
    cooldown: 1,
    energy: {
      i: 1,
      r: 1
    },
    classes: ["instant", "ranged", "affliction"],
    description:
      "Shino directs his chakra draining bugs to attack one enemy dealing 20 affliction damage and steals 1 random chakra.",
    move: function(payload) {
      let energy = helper.stealEnergy(payload.theirEnergy);
      if (energy !== false) {
        payload.theirEnergy[energy] -= 1;
        payload.myEnergy[energy] += 1;
      }
      payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Female Bug",
    type: "attack",
    val: 15,
    cooldown: 1,
    description:
      "Shino directs one of his female bugs to attach itself to one enemy. For 4 turns, new non-affliction damage that enemy deals is reduced by 5 points. During this time, 'Chakra Leech' will deal 5 additional damage to them. These effects stack.",
    energy: {
      r: 1
    },
    classes: ["instant", "ranged", "physical"],
    target: "enemy",
    move: function(payload) {
      payload.target.status.onAttack.push(
        new constructor.status(status.reduce, this.name, this.nameId, 2)
      );
      payload.target.status.onReceive.push(
        new constructor.status(status.boost, this.name, this.nameId, 2)
      );
    }
  },
  skill3: {
    name: "Bug Wall",
    type: "attack",
    cooldown: 3,
    description:
      "Shino sends millions of bugs to create a wall around his team, making them gain 20 points of destructible defense.",
    target: "allally",
    marking: true,
    classes: ["instant", "ranged"],
    energy: {
      i: 1,
      r: 1
    },
    move: function(payload) {
      payload.target.status.onReceive.push(
        new constructor.status(status.dd, this.name, this.nameId, 3)
      );
    }
  },
  skill4: {
    name: "Shino Hide",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    description: "This skill makes Aburame Shino invulnerable for 1 turn.",
    target: "self",
    classes: ["instant", "mental"],
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invulnerable, this.name, this.nameId, 4)
      );
    }
  }
};

let character = {
  name: info.name,
  id: info.id,
  hp: 100,
  skill: [skills.skill1, skills.skill2, skills.skill3, skills.skill4]
};

module.exports = character;
