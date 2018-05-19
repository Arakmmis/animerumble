let constructor = require("../constructor.js");
let library = require("../library/status.js");
let skill = require("../library/skill.js");
let helper = require("../helper.js");

let info = {
  id: "lucyHeartfilia",
  name: "Luci Heartfilia",
  anime: "FairyTail",
  author: "63k, FireBane",
  pictures: "Leciel, FireBane"
};

let status = {
  invulnerable: library.invulnerable({}),
  dd: library.dd({
    isStack: true,
    val: 20,
    callback: function(payload, self) {
      payload.state[payload.myTurn].forEach(x => {
        x.status.onSelf = x.status.onSelf.filter(
          x =>
            x.type !== "bleed" &&
            x.nameId !== self.nameId &&
            x.name !== "Summon: Taurus"
        );
      });

      payload.target.skill[0].target = "self";
    }
  }),
  dd2: library.dd({
    isStack: true,
    val: 5,
    active: 3,
    callback: function(payload, self) {
      payload.target.status.onState = payload.target.status.onState.filter(
        x => x.type !== "unique" && x.nameId !== self.nameId
      );
    }
  }),
  ddReceive: {
    active: 3,
    type: "unique",
    modify: function(payload, self) {
      if (payload.val > 0) {
        let index = payload.target.status.onReceive.findIndex(
          x => x.type === "dd" && x.name === "Summon: Aquarius"
        );
        if (index > -1) {
          payload.target.status.onReceive[index].active += 1;
        }
      }
    }
  },
  dd3: library.dd({
    val: 30,
    active: 3,
    callback: function(payload, self) {
      console.log(payload.state[payload.myTurn]);
      payload.state[payload.myTurn].forEach(x => {
        x.status.onSelf = x.status.onSelf.filter(
          x =>
            x.type !== "bleed" &&
            x.nameId !== self.nameId &&
            x.name !== "Summon: Cancer"
        );
      });
    }
  }),
  state: library.state({
    active: -1
  }),
  bleed: library.bleed({
    isStack: true,
    val: 15,
    active: -1
  }),
  bleed2: library.bleed({
    val: 20,
    active: 3
  }),
  track: library.track({
    active: 3,
    modify: function(payload, self) {
      let index = payload.offense.status.onReceive.findIndex(
        x => x.type === "dd" && x.name === "Summon: Aquarius"
      );
      if (index > -1) {
        payload.offense.status.onReceive[index].val += 5;
      }
    }
  })
};

let skills = {
  skill1: {
    name: "Summon: Taurus",
    type: "attack",
    val: 0,
    cooldown: 1,
    classes: ["action", "physical"],
    energy: {
      w: 1,
      r: 1
    },
    description:
      "Lucy gains 20 DD & Deals 15 Piercing Damage to a target till that defense is destroyed. You can reuse this skill while active to double the damage, and gain an additional 20 DD.",
    target: "enemy",
    move: function(payload, self) {
      console.log(self);
      let check = skill.checkStatus({
        subject: payload.offense,
        onStatus: "onState",
        statusType: "state",
        statusName: "Summon: Taurus"
      });

      if (!check) {
        skill.pushStatus(
          {
            subject: payload.offense,
            onStatus: "onReceive",
            status: status.dd,
            inherit: this
          },
          "stackDD"
        );

        skill.pushStatus({
          subject: payload.offense,
          onStatus: "onState",
          status: status.state,
          inherit: this
        });

        skill.pushStatus(
          {
            subject: payload.target,
            onStatus: "onSelf",
            status: status.bleed,
            inherit: this
          },
          "stackBleed"
        );

        self.target = "self";
      } else {
        skill.pushStatus(
          {
            subject: payload.offense,
            onStatus: "onReceive",
            status: status.dd,
            inherit: this
          },
          "stackDD"
        );

        let index = payload.state[payload.theirTurn].findIndex(x =>
          x.status.onSelf.some(s => s.type === "bleed" && s.name === this.name)
        );

        skill.pushStatus(
          {
            subject: payload.state[payload.theirTurn][index],
            onStatus: "onSelf",
            status: status.bleed,
            inherit: this
          },
          "stackBleed"
        );
      }
    }
  },
  skill2: {
    name: "Summon: Aquarius",
    type: "piercing",
    val: 10,
    cooldown: 3,
    description:
      "Deal 10 damage to all enemies. Lucy Gains 5 DD a turn for 3 turns, each time she is damaged, increase this skills duration by 1 turn. This skill stacks.",
    classes: ["instant", "physical"],
    energy: {
      i: 1,
      r: 1
    },
    target: "allenemy",
    move: function(payload, self) {
      if (payload.recursive === 0) {
        skill.pushStatus(
          {
            subject: payload.offense,
            onStatus: "onReceive",
            status: status.dd2,
            inherit: this
          },
          "stackDD"
        );

        skill.pushStatus(
          {
            subject: payload.offense,
            onStatus: "onReceive",
            status: status.ddReceive,
            inherit: this
          },
          "stack"
        );

        skill.pushStatus({
          subject: payload.offense,
          onStatus: "onSelf",
          status: status.track,
          inherit: this
        });
      }
      
      skill.damage({
        subject: payload.target,
        val: payload.val
      });
    }
  },
  skill3: {
    name: "Summon: Cancer",
    type: "attack",
    val: 0,
    cooldown: 3,
    description:
      "Lucy gains 30 dd and deals 20 damage Piercing to all enemies, untill this DD is destroyed, or 3 turns pass.",
    target: "allenemy",
    classes: ["instant", "melee", "physical"],
    energy: {
      i: 1,
      w: 1
    },
    move: function(payload, self) {
      if (payload.recursive === 0) {
        skill.pushStatus({
          subject: payload.offense,
          onStatus: "onReceive",
          status: status.dd3,
          inherit: this
        });
      }

      skill.pushStatus({
        subject: payload.target,
        onStatus: "onSelf",
        status: status.bleed2,
        inherit: this
      });
    }
  },
  skill4: {
    name: "Summon: Horologium",
    type: "invulnerable",
    val: 0,
    cooldown: 4,
    description: "Lucy Becomes invulnerable for one turn.",
    target: "self",
    classes: ["instant", "melee", "physical"],
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
