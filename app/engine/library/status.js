const helper = require("../helper.js");
const management = require("../battle/management.js");

function boost(x) {
  return {
    name: x.name ? x.name : "Boost",
    val: x.val ? x.val : 10,
    type: "boost",
    isStack: x.isStack ? x.isStack : false,
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: x.modify
      ? x.modify
      : function(payload, self) {
          if (this.isStack) {
            payload.val += self.val * self.stack;
          } else {
            payload.val += self.val;
          }
        }
  };
}

function reduce(x) {
  return {
    name: x.name ? x.name : "Reduce",
    val: x.val ? x.val : 5,
    type: "reduce",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload, self) {
      payload.val -= self.val;
    }
  };
}

function protect(x) {
  return {
    name: x.name ? x.name : "Protect",
    val: x.val ? x.val : 15,
    defense: x.val,
    type: "protect",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload, self) {
      let disableDrIv = payload.target.status.onState.findIndex(
        x => x.type === "disableDrIv"
      );
      if (disableDrIv !== -1) {
        let ignore = management.ignore(
          payload.target.status.onState,
          payload.target.status.onState[disableDrIv]
        );
        console.log("Reduce Ignore", disableDrIv, ignore);
        if (ignore === true) {
          disableDrIv = false;
        } else {
          disabledDrIv = true;
        }
      } else {
        disableDrIv = false;
      }

      let tempVal = self.defense;

      let affliction = payload.skill.classes.some(x => x === "affliction");
      console.log("REDUCE VAL", payload.val, tempVal, affliction, disableDrIv);
      if (payload.val > 0 && tempVal > 0) {
        if (
          payload.skill.piercing === false &&
          payload.skill.type !== "heal" &&
          disableDrIv === false &&
          affliction === false
        ) {
          let tempVal = self.defense;
          let val = payload.val;
          let diff = tempVal - val;
          self.defense = diff;
          console.log(diff, self);

          if (diff >= 0) {
            payload.val = 0;
          } else {
            payload.val = Math.abs(diff);
          }

          console.log("REDUCE!!", self, payload);
        }
      }
    }
  };
}

function invulnerable(x) {
  return {
    name: x.name ? x.name : "invulnerable",
    val: 0,
    type: "invulnerable",
    harmful: x.harmful ? x.harmful : false,
    effect: x.effect ? x.effect : x.type,
    info: x.info ? x.info : "inclusive",
    comprise: x.comprise
      ? x.comprise
      : [
          "instant",
          "mental",
          "energy",
          "affliction",
          "strategic",
          "physical",
          "ranged",
          "melee"
        ],
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2
  };
}

function stun(x) {
  return {
    name: x.name ? x.name : "stun",
    val: 0,
    type: "stun",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    description: x.description ? x.description : "",
    info: x.info ? x.info : "inclusive",
    persistence: x.persistence ? x.persistence : "instant",
    comprise: x.comprise
      ? x.comprise
      : [
          "instant",
          "mental",
          "energy",
          "affliction",
          "strategic",
          "physical",
          "ranged",
          "melee"
        ],
    active: x.active ? x.active : 1,
    modify: function(payload, self) {}
  };
}

function counter(x) {
  return {
    name: x.name ? x.name : "counter",
    val: 0,
    type: "counter",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    isInvisible: true,
    harmfulOnly: x.harmfulOnly ? x.harmfulOnly : false,
    description: x.description ? x.description : "",
    info: x.info ? x.info : "inclusive",
    persistence: x.persistence ? x.persistence : "instant",
    period: "instant",
    comprise: x.comprise
      ? x.comprise
      : [
          "instant",
          "mental",
          "energy",
          "affliction",
          "strategic",
          "physical",
          "ranged",
          "melee"
        ],
    active: x.active ? x.active : 2,
    modify: x.modify ? x.modify : function(payload) {}
  };
}

function disableDrIv(x) {
  return {
    name: x.name ? x.name : "disableDrIv",
    val: 0,
    type: "disableDrIv",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 1,
    modify: function(payload, self) {}
  };
}

function state(x) {
  return {
    name: x.name,
    val: 0,
    type: "state",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    isStack: x.isStack ? x.isStack : false,
    info: x.info ? x.info : "",
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload, self) {},
    persistence: x.persistence ? x.persistence : "instant"
  };
}

function lock(x) {
  return {
    name: x.name,
    val: 0,
    type: "lock",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    info: x.info ? x.info : "",
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload, self) {},
    persistence: x.persistence ? x.persistence : "instant"
  };
}

function charge(x) {
  return {
    name: x.name,
    val: x.val ? x.val : 0,
    type: "charge",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    isInvisible: x.isInvisible ? x.isInvisible : true,
    info: x.info ? x.info : "descending",
    description: x.description ? x.description : "",
    active: x.active ? x.active : -1,
    modify: function(payload, self) {}
  };
}

function track(x) {
  return {
    name: x.name,
    val: 0,
    type: "track",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    isInvisible: x.isInvisible ? x.isInvisible : true,
    info: x.info ? x.info : "",
    description: x.description ? x.description : "",
    active: x.active ? x.active : -1,
    modify: x.modify ? x.modify : function(payload) {}
  };
}

function ignore(x) {
  return {
    name: x.name,
    val: 0,
    type: "ignore",
    info: x.info ? x.info : "inclusive",
    harmful: x.harmful ? x.harmful : false,
    comprise: x.comprise
      ? x.comprise
      : [
          "instant",
          "mental",
          "energy",
          "affliction",
          "strategic",
          "physical",
          "ranged",
          "melee"
        ],
    effect: x.effect ? x.effect : x.type,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload, self) {},
    persistence: x.persistence ? x.persistence : "instant"
  };
}

function heal(x) {
  return {
    name: x.name ? x.name : "heal",
    val: x.val ? x.val : 15,
    type: "heal",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload, self) {
      payload.offense.hp += self.val;
    }
  };
}

function bleed(x) {
  return {
    name: x.name ? x.name : "bleed",
    val: x.val ? x.val : 5,
    type: "bleed",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    classes: x.classes ? x.classes : false,
    piercing: x.piercing ? x.piercing : false,
    description: x.description ? x.description : "",
    period: "instant",
    isInvisible: x.isInvisible ? x.isInvisible : false,
    nextTurn: x.nextTurn ? x.nextTurn : false,
    persistence: x.persistence ? x.persistence : "action",
    active: x.active ? x.active : 3,
    modify: x.modify
      ? x.modify
      : function(payload) {
          payload.offense.hp -= payload.val;
        }
  };
}

function drain(x) {
  return {
    name: x.name ? x.name : "drain",
    val: x.val ? x.val : 1,
    type: "drain",
    period: "instant",
    persistence: x.persistence ? x.persistence : "action",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload, self) {
      let energy = helper.stealEnergy(payload.theirEnergy);
      if (energy !== false) {
        payload.theirEnergy[energy] -= self.val;
      }
    }
  };
}

function cooldownIncrease(x) {
  return {
    name: x.name ? x.name : "cooldownIncrease",
    val: x.val ? x.val : 0,
    type: "cooldownIncrease",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload, self) {
      payload.skill.counter += 1;
    }
  };
}

function decreaseEnergy(x) {
  return {
    name: x.name ? x.name : "decreaseEnergy",
    val: x.val ? x.val : 5,
    type: "decreaseEnergy",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 4,
    modify: function(payload, self) {
      let index = payload.offense.skill.findIndex(s => s.name === x.name);
      if (index !== -1) {
        if (payload.active > 1) {
          payload.offense.skill[index].energy[x.energy] = x.decrease;
        } else if (payload.active === 1) {
          payload.offense.skill[index].energy[x.energy] = x.increase;
        }
      }
    }
  };
}

function dd(x) {
  return {
    name: x.name ? x.name : "dd",
    val: x.val ? x.val : 5,
    type: "dd",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : -1,
    callback: x.callback ? x.callback : function() {},
    modify: function(payload, self) {
      // let onReceive = payload.target.status.onReceive;
      // let index = onReceive.findIndex(
      //   s => s.type === this.type && s.name === this.name && s.usage === 0
      // );

      // let disableDrIv = payload.target.status.onState.findIndex(
      //   x => x.type === "disableDrIv"
      // );
      let affliction = payload.skill.classes.some(x => x === "affliction");
      console.log("before dd", self.usage, payload.skill.type);

      if (
        payload.val > 0 &&
        self.usage === 0 &&
        payload.skill.type !== "heal" &&
        // onReceive[index].usage === 0 &&
        // payload.skill.type !== "piercing" &&
        affliction === false
      ) {
        let dd = self.val;
        let val = payload.val;
        let diff = dd - val;
        self.val = diff;
        console.log(diff, self);

        let newVal = val - dd;
        if (diff >= 0) {
          payload.val = 0;
        } else {
          payload.val = Math.abs(diff);
        }

        if (diff <= 0) {
          console.log("diff destroyed", diff);
          payload.target.status.onReceive = payload.target.status.onReceive.filter(
            s => !(s.type === self.type && s.name === self.name)
          );
          self.callback(payload, self);
          self.usage = 1;
        }
      }

      console.log("DD", payload);
    }
  };
}

module.exports = {
  boost,
  protect,
  invulnerable,
  stun,
  heal,
  bleed,
  reduce,
  state,
  disableDrIv,
  drain,
  cooldownIncrease,
  dd,
  decreaseEnergy,
  ignore,
  counter,
  charge,
  track,
  lock
};
