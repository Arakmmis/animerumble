let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "akimichiChouji",
  name: "Akimichi Chouji"
};

let status = {
  invulnerable: library.invulnerable({
    owner: info.id
  }),
  invulnerable3: library.invulnerable({
    owner: info.id,
    active: 3
  }),
  stun: library.stun({
    owner: info.id
  }),
  protect: library.protect({
    val: 15,
    owner: info.id
  }),
  bleed: library.bleed({
    val: 10,
    active: 2,
    owner: info.id
  }),
  boost1: {
    name: "Partial Multi-Size",
    owner: info.id,
    val: 20,
    type: "skill",
    active: -1,
    modify: function(payload) {
      this.usage += 1;
      if (payload.offense.skill[payload.skill].name === "Partial Multi-Size") {
        payload.val += this.val;
      }
    }
  },
  boost2: {
    name: "Meat Tank",
    owner: info.id,
    val: 10,
    type: "skill",
    active: -1,
    modify: function(payload) {
      this.usage += 1;
      if (payload.offense.skill[payload.skill].name === "Meat Tank") {
        payload.val += this.val;
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Partial Multi-Size",
    type: "attack",
    val: 20,
    cooldown: 0,
    classes: ["instant", "melee", "physical"],
    energy: {
      a: 1
    },
    description:
      "Chouji doubles the size of his arms and attacks one enemy dealing 20 damage.",
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Meat Tank",
    type: "attack",
    val: 10,
    cooldown: 2,
    description:
      "Chouji transforms into a Meat Tank dealing 10 damage to one enemy for 2 turns. Chouji is invulnerable for 2 turns.",
    classes: ["action", "ranged", "physical"],
    energy: {
      i: 1
    },
    target: "enemy",
    move: function(payload) {
      payload.offense.status.onState.push(
        new constructor.status(status.invulnerable3, this, this.name, this.nameId, 2)
      );
      payload.target.status.onSelf.push(
        new constructor.status(
          library.bleed({
            val: payload.val,
            active: 3,
            owner: info.id
          }),
          this,
          this.name,
          this.nameId,
          2
        )
      );
      console.log("Chouji Bleed", payload.target.status.onSelf, payload.val);
    }
  },
  skill3: {
    name: "Akimichi Pills",
    type: "attack",
    val: 20,
    cooldown: 0,
    description:
      "Chouji eats a pill improving his skills, 'Partial Multi-Size' will deal 20 additional damage and 'Meat Tank' will deal 10 additional damage per turn. Chouji takes 20 affliction damage. Chouji can only eat three pills and this skill is permanent.",
    classes: ["instant", "affliction"],
    target: "self",
    usage: 0,
    required: false,
    energy: {
      r: 1
    },
    move: function(payload) {
      console.log("chouji", payload, payload.offense.skill);
      if (payload.offense.skill[2].usage === 2) {
        payload.offense.skill[2].required = true;
      }
      payload.target.status.onAttack.push(
        new constructor.status(status.boost1, this, this.name, this.nameId, 3)
      );
      payload.target.status.onAttack.push(
        new constructor.status(status.boost2, this, this.name, this.nameId, 3)
      );
      console.log("Chouji Stats!", payload.target.status.onAttack);
      payload.offense.skill[2].usage += 1;
      payload.target.hp -= 20;
      console.log("chouji hp", 20, payload.target.hp);
    }
  },
  skill4: {
    name: "Effortless Block",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    description: "This skill makes Akimichi Chouji invulnerable for 1 turn.",
    target: "self",
    classes: ['instant', 'physical'],
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invulnerable, this, this.name, this.nameId, 4)
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
