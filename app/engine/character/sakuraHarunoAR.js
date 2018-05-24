let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "sakuraHarunoAR",
  name: "Sakura Haruno AR",
  anime: "Naruto",
  author: "63k",
  pictures: "63k, Krasi.fit",
  description:
    "A Genin from Team 7, Sakura is very intelligent, but self-conscious about herself. Having just recently received training from Tsunade, Sakura is now able to deliver powerful punches and heal her own allies."
};

let status = {
  invulnerable: library.invulnerable({}),
  bleed: library.bleed({
    val: 15,
    active: 2
  }),
  heal: library.heal({
    active: 1,
    val: 20
  }),
  ignore: library.ignore({
    active: 1
  }),
  dd: library.dd({
    isStack: true,
    val: 15
  }),
  state: library.state({
    active: 3
  }),
  state2: library.state({
    active: 2
  }),
  track: library.track({
    active: 3,
    modify: function(payload, self) {
      if (payload.active === 3) {
        payload.offense.skill[2].target = "ally";
      }
      if (payload.active === 0) {
        payload.offense.skill[2].target = "otherally";
      }
    }
  }),
  transform: {
    name: "Transform",
    active: 3,
    harmful: false,
    modify: function(payload, self) {
      if (payload.active === 3) {
        let swap = payload.offense.skill[0];
        payload.offense.skill[0] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
      } else if (payload.active === 1) {
        let swap = payload.offense.skill[0];
        payload.offense.skill[0] = payload.offense.skill[4];
        payload.offense.skill[4] = swap;
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Chakra Control",
    type: "attack",
    val: 20,
    alt: 4,
    cooldown: 3,
    harmful: false,
    description:
      "Controlling her chakra, Sakura gains 15 Destructible Defense and improves her skills for 3 turns. The destructible defense of this skill stacks. Becomes Inner Spirit when used.",
    energy: {
      w: 1
    },
    target: "self",
    classes: ["instant", "melee", "physical"],
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

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.state,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.track,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.transform,
        inherit: this
      });
    }
  },
  skill2: {
    name: "Clone Technique Taijutsu",
    type: "attack",
    val: 0,
    cooldown: 3,
    classes: ["instant", "energy"],
    description:
      "Using basic Taijutsu, Sakura targets an enemy who takes 15 damage for 2 turns. Palm Healing will heal 10 more during its duration. This skill lasts one more turn and deals piercing damage during Chakra Control.",
    target: "enemy",
    energy: {
      a: 1
    },
    move: function(payload, self) {
      let check = skill.checkStatus({
        subject: payload.offense,
        onStatus: "onState",
        statusType: "state",
        statusName: "Chakra Control"
      });

      let bleed = status.bleed;
      if (check) {
        bleed.active = 3;
        bleed.piercing = true;
      }
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: bleed,
        inherit: this
      });

      skill.pushStatus({
        subject: payload.offense,
        onStatus: "onState",
        status: status.state2,
        inherit: this
      });
    }
  },
  skill3: {
    name: "Palm Healing",
    type: "attack",
    val: 20,
    cooldown: 4,
    harmful: false,
    classes: ["instant", "mental"],
    description:
      "Sakura heals an ally for 20 health and has all of the Affliction skills on them removed. This skill lasts an additional turn and can target Sakura during Chakra Control.",
    target: "otherally",
    energy: {
      s: 1
    },
    move: function(payload, self) {
      let heal = status.heal;

      let check = skill.checkStatus({
        subject: payload.offense,
        onStatus: "onState",
        statusType: "state",
        statusName: "Chakra Control"
      });
      if (check) {
        heal.active = 2;
      }

      let check2 = skill.checkStatus({
        subject: payload.offense,
        onStatus: "onState",
        statusType: "state",
        statusName: "Clone Technique Taijutsu"
      });
      if (check2) {
        heal.val = 30;
      }

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: heal,
        inherit: this
      });
    }
  },
  skill4: {
    name: "Sakura Evasion",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    classes: ["instant", "energy"],
    description: "This skill makes Haruno Sakura invulnerable for 1 turn.",
    target: "self",
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
  },
  skill5: {
    name: "Inner Spirit",
    type: "attack",
    val: 0,
    alt: 0,
    harmful: false,
    cooldown: 4,
    classes: ["instant", "energy"],
    description: "Using her inner spirit, Sakura ignores the next stun effect.",
    target: "self",
    energy: {},
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: "onState",
        status: status.ignore,
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
  skill: [
    skills.skill1,
    skills.skill2,
    skills.skill3,
    skills.skill4,
    skills.skill5
  ]
};

module.exports = character;
