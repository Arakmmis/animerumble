let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "aburameShino",
  name: "Aburame Shino",
  anime: "Naruto",
  author: "",
  pictures: ""
};

let status = {
  invulnerable: library.invulnerable({}),
  reduce: library.reduce({
    val: 5,
    active: 4
  }),
  boost: library.boost({
    val: 5,
    effect: "custom",
    description: "Increase 5 damage received from Chakra Leech",
    type: "boost",
    active: 4,
    modify: function(payload, self) {
      if (payload.skill.name === "Chakra Leech") {
        payload.val += self.val;
      }
    }
  }),
  dd: library.dd({
    name: "Bug Wall",
    val: 20,
    type: "dd",
    active: -1
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
    move: function(payload, self) {
      skill.stealEnergy({
        theirEnergy: payload.theirEnergy,
        myEnergy: payload.myEnergy,
        amount: 1
      });

      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill2: {
    name: "Female Bug",
    type: "attack",
    val: 0,
    cooldown: 1,
    description:
      "Shino directs one of his female bugs to attach itself to one enemy. For 4 turns, new non-affliction damage that enemy deals is reduced by 5 points. During this time, 'Chakra Leech' will deal 5 additional damage to them. These effects stack.",
    energy: {
      r: 1
    },
    classes: ["instant", "ranged", "physical"],
    target: "enemy",
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onAttack",
        status: status.reduce,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onReceive",
        status: status.boost,
        inherit: this
      });
    }
  },
  skill3: {
    name: "Bug Wall",
    type: "attack",
    harmful: false,
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
    move: function(payload, self) {
      skill.pushStatus(
        {
          subject: payload.target,
          onStatus: "onReceive",
          status: status.dd,
          inherit: this
        },
        "stackDD"
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
