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
  boost2: library.boost({
    isStack: true,
    val: 10,
    active: -1
  }),
  transform: {
    name: "Transform",
    active: 1,
    harmful: false,
    modify: function(payload) {
      let swap = payload.offense.skill[3];
      payload.offense.skill[3] = payload.offense.skill[4];
      payload.offense.skill[4] = swap;
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
    isMulti: true,
    multi: 3,
    description:
      "Zoro strikes from three different directions, dealing 0 damage three times. Each time this skill is used, Zoro deals 5 extra damage on all of his skills. This stacks.",
    target: "enemy",
    move: function(payload) {
      skill.pushStatus(
        {
          subject: payload.offense,
          onStatus: "onAttack",
          status: status.boost,
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
    name: "Tiger Hunting",
    type: "attack",
    val: 30,
    cooldown: 0,
    description:
      "Zoro strike with two of his swords, dealing 30 damage. If this skill does more than 30 damage, Zoro heals 10 hp. Each time this skill is used, Zoro deals 5 extra damage on all of his skills. This stacks.",
    classes: ["instant", "melee", "physical"],
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
          status: status.boost,
          inherit: this
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
    isMulti: true,
    multi: 6,
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
    classes: ["instant", "melee", "physical"],
    energy: {
      r: 1
    },
    move: function(payload) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.invulnerable,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });

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
  },
  skill5: {
    name: "Dragon Twister",
    type: "attack",
    val: 5,
    cooldown: 3,
    description:
      "Zoro knocks an enemy into the air, stunning them and dealing 5 damage. This skill becomes Blade Wolf Stream. Each time this skill is used, Zoro deals 10 extra damage on all of his skills. This stacks.",
    classes: ["instant", "melee", "physical"],
    energy: {
      i: 1
    },
    target: "enemy",
    move: function(payload) {
      skill.pushStatus(
        {
          subject: payload.offense,
          onStatus: "onAttack",
          status: status.boost2,
          inherit: this
        },
        "stack"
      );

      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.stun,
        inherit: this
      });

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  }
};

let character = {
  name: info.name,
  id: info.id,
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
