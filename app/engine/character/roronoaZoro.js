let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");

let info = {
  id: "roronoaZoro",
  name: "Roronoa Zoro"
};

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  protect: library.protect({
    val: 15,
    active: 4
  }),
  bleed: library.bleed({
    val: 5
  }),
  boost: library.boost({
    isStack: true,
    val: 5,
    active: -1
  }),
  // boost: {
  //   name: "Shadow Clones",
  //   val: 10,
  //   type: "boost",
  //   effect: "boostSpecific",
  //   description: "Uzumaki Naruto Combo",
  //   active: 4,
  //   modify: function(payload) {
  //     if (payload.skillStore.name === "Uzumaki Naruto Combo") {
  //       payload.val += this.val;
  //     }
  //   }
  // },
  required: {
    active: 4,
    type: "allow",
    effect: "allow",
    description: "Rasengan",
    modify: function(payload) {
      let index = payload.offense.skill.findIndex(x => x.name === "Rasengan");
      if (index !== -1) {
        if (payload.active > 1) {
          payload.offense.skill[index].required = false;
          console.log("ZERO", payload.active);
        } else if (payload.active === 1) {
          payload.offense.skill[index].required = true;
          console.log("LAST", payload.active);
        }
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Ogre Cutter",
    type: "attack",
    val: 0,
    cooldown: 1,
    classes: ["instant", "melee", "physical"],
    energy: {
      a: 1
    },
    description:
      "Zoro strikes from three different directions, dealing 0 damage three times. Each time this skill is used, Zoro deals 5 extra damage on all of his skills. This stacks.",
    target: "enemy",
    move: function(payload) {
      skill.pushStatus(
        {
          subject: payload.offense,
          onStatus: "onAttack",
          status: boost,
          inherit: this,
          skillIndex: 1
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
    name: "Tiger Hunting",
    type: "attack",
    val: 30,
    cooldown: 0,
    description:
      "Zoro strike with two of his swords, dealing 30 damage. If this skill does more than 30 damage, Zoro heals 10 hp. Each time this skill is used, Zoro deals 5 extra damage on all of his skills. This stacks.",
    classes: ["instant", "melee", "chakra"],
    energy: {
      a: 1,
      r: 1
    },
    target: "enemy",
    move: function(payload) {
      skill.pushStatus(
        {
          subject: payload.offense,
          onStatus: "onAttack",
          status: boost,
          inherit: this,
          skillIndex: 2
        },
        "stack"
      );

      if (payload.val > 30) {
        payload.offense.hp += 10;
      }

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill3: {
    name: "Three Thousand Worlds",
    type: "attack",
    val: 0,
    cooldown: 3,
    description:
      "Zoro deals 0 damage 6 times. This skill cannot be countered or reflected. Zoro removes all skills effecting him.",
    target: "enemy",
    noCounter: true,
    classes: ["instant", "melee", "physical"],
    energy: {
      a: 1,
      i: 1,
      r: 1
    },
    move: function(payload) {
      skill.removeStatus(
        {
          subject: payload.offense
        },
        "all"
      );

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill4: {
    name: "Blade Wolf Stream",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    description:
      "Zoro deals 10 damage to a random enemy, and goes invulnerable for one turn. After this skill is used it becomes Dragon Twister. Each time this skill is used, Zoro deals 5 extra damage on all of his skills. This stacks.",
    target: "self",
    classes: ["instant", "chakra"],
    energy: {
      r: 1
    },
    move: function(payload) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: invulnerable,
        inherit: this,
        skillIndex: 4
      });

      skill.pushStatus(
        {
          subject: payload.offense,
          onStatus: "onAttack",
          status: boost,
          inherit: this,
          skillIndex: 4
        },
        "stack"
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
