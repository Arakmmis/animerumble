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
    modify: function(payload) {
      if (this.isStack) {
        payload.val += this.val * this.stack;
      } else {
        payload.val += this.val;
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
    modify: function(payload) {
      payload.val -= this.val;
    }
  };
}

function protect(x) {
  return {
    name: x.name ? x.name : "Protect",
    val: x.val ? x.val : 15,
    info: x.val,
    type: "protect",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {
      let onReceive = payload.target.status.onReceive;
      let index = onReceive.findIndex(
        s => s.type === this.type && s.name === this.name && s.usage === 0
      );

      let disableDrIv = payload.target.status.onState.findIndex(
        x => x.type === "disableDrIv"
      );
      if (disableDrIv !== -1) {
        let ignore = management.ignore(
          payload.target.status.onState,
          payload.target.status.onState[disableDrIv]
        );
        if (ignore === true) {
          disableDrIv = true;
        }
      } else {
        disableDrIv = false;
      }

      let tempVal = onReceive[index].info;

      let affliction = payload.skillStore.classes.some(x => x === "affliction");
      console.log("REDUCE VAL", payload.val, tempVal);
      if (index > -1 && payload.val !== 0 && payload.val > 0 && tempVal > 0) {
        if (
          onReceive[index].usage === 0 &&
          payload.skillStore.type !== "piercing" &&
          disableDrIv === false &&
          affliction === false
        ) {
          let tempVal = onReceive[index].info;
          let val = payload.val;
          let diff = tempVal - val;
          onReceive[index].info = diff;
          console.log(diff, onReceive[index]);

          if (diff >= 0) {
            payload.val = 0;
          } else {
            payload.val = Math.abs(diff);
          }

          // payload.val -= this.val;
          // onReceive[index].usage += 1;
          console.log("REDUCE!!", onReceive[index], payload);
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
    classes: x.classes
      ? x.classes
      : [
          "instant",
          "mental",
          "chakra",
          "affliction",
          "strategy",
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
    classes: x.classes
      ? x.classes
      : [
          "instant",
          "mental",
          "chakra",
          "affliction",
          "strategy",
          "physical",
          "ranged",
          "melee"
        ],
    active: x.active ? x.active : 1,
    modify: function(payload) {}
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
    modify: function(payload) {}
  };
}

function state(x) {
  return {
    name: x.name,
    val: 0,
    type: "state",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    info: x.info ? x.info : "",
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {},
    persistence: x.persistence ? x.persistence : "instant"
  };
}

function ignore(x) {
  return {
    name: x.name,
    val: 0,
    type: "ignore",
    info: x.info ? x.info : "inclusive",
    harmful: x.harmful ? x.harmful : false,
    classes: x.classes
      ? x.classes
      : [
          "instant",
          "mental",
          "chakra",
          "affliction",
          "strategy",
          "physical",
          "ranged",
          "melee"
        ],
    effect: x.effect ? x.effect : x.type,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {},
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
    modify: function(payload) {
      payload.offense.hp += this.val;
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
    description: x.description ? x.description : "",
    period: "instant",
    isInvisible: x.isInvisible ? x.isInvisible : false,
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
    modify: function(payload) {
      let energy = helper.stealEnergy(payload.theirEnergy);
      if (energy !== false) {
        payload.theirEnergy[energy] -= this.val;
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
    modify: function(payload) {
      payload.skillStore.counter += 1;
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
    modify: function(payload) {
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
    active: x.active ? x.active : 2,
    modify: function(payload) {
      let onReceive = payload.target.status.onReceive;
      let index = onReceive.findIndex(
        s => s.type === this.type && s.name === this.name && s.usage === 0
      );

      let disableDrIv = payload.target.status.onState.findIndex(
        x => x.type === "disableDrIv"
      );
      let affliction = payload.skillStore.classes.some(x => x === "affliction");
      console.log(
        "before dd",
        index,
        onReceive[index].usage,
        payload.skillStore.type,
        disableDrIv
      );
      if (index > -1) {
        if (
          onReceive[index].usage === 0 &&
          payload.skillStore.type !== "piercing" &&
          disableDrIv === -1 &&
          affliction === false
        ) {
          let dd = onReceive[index].val;
          let val = payload.val;
          let diff = dd - val;
          onReceive[index].val = diff;
          console.log(diff, onReceive[index]);

          let newVal = val - dd;
          if (diff >= 0) {
            payload.val = 0;
          } else {
            payload.val = Math.abs(diff);
          }

          if (diff <= 0) {
            payload.target.status.onReceive = payload.target.status.onReceive.filter(
              s => s.name !== x.name
            );
          }
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
  ignore
};
