let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "akimichiChouji"
};

let status = {
  invincible: library.invincible({
    owner: info.id
  }),
  invincible3: library.invincible({
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
  boost: {
    name: "Shadow Clones",
    val: 20,
    type: "skill",
    active: 3,
    usage: 0,
    modify: function(payload) {
      this.usage += 1;
      if (payload.offense.skill[payload.skill].name === "Partial Multi-Size") {
        payload.val += this.val;
      }
    }
  },
  energy: {
    owner: info.id,
    active: 3,
    modify: function(payload) {
      let index = payload.offense.skill.findIndex(x => x.name === "Garouga");
      if (index !== -1) {
        if (payload.active !== 0) {
          payload.offense.skill[index].energy.r = 0;
        } else {
          payload.offense.skill[index].energy.r = 1;
        }
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
    mana: 2,
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
    mana: 1,
    energy: {
      i: 1
    },
    target: "enemy",
    move: function(payload) {
      payload.offense.status.onState.push(
        new constructor.status(status.invincible3, this.name, 4)
      );
      payload.target.status.onSelf.push(
        new constructor.status(
          library.bleed({
            val: this.val,
            active: 2,
            owner: info.id
          }),
          this.name,
          2
        )
      );
    }
  },
  skill3: {
    name: "Akimichi Pills",
    type: "attack",
    val: 20,
    cooldown: 0,
    description:
      "Chouji eats a pill improving his skills, 'Partial Multi-Size' will deal 20 additional damage and 'Meat Tank' will deal 10 additional damage per turn. Chouji takes 20 affliction damage. Chouji can only eat three pills and this skill is permanent.",
    target: "self",
    mana: 2,
    usage: 1,
    required: false,
    energy: {
      r: 1
    },
    move: function(payload) {
      // payload.target.status.onReceive.push(
      //   new constructor.status(status.boost, this.name, 3),
      // )

      if (this.usage < 3) {
        payload.target.hp -= this.val;
        payload.target.skill[0].val += 20;
        payload.target.skill[1].val += 1;
      }
      else{
        this.required = true
      }
      this.usage += 1;
    }
  },
  skill4: {
    name: "Effortless Block",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "This skill makes Akimichi Chouji invulnerable for 1 turn.",
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
  name: "Akimichi Chouji",
  id: "akimichiChouji",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
