const helper = require("../helper.js");

function boost(x) {
  return {
    name: x.name ? x.name : "Boost",
    val: x.val ? x.val : 10,
    type: "boost",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {
      payload.val += this.val;
    },
    owner: x.owner
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
    },
    owner: x.owner
  };
}

function protect(x) {
  return {
    name: x.name ? x.name : "Protect",
    val: x.val ? x.val : 15,
    type: "protect",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {
      let onReceive = payload.target.status.onReceive;
      let index = onReceive.findIndex(s => {
        return s.type === this.type;
      });

      let disableDrIv = payload.target.status.onState.findIndex(
        x => x.type === "disableDrIv"
      );
      let affliction = payload.offense.skill[payload.skill].classes.some(
        x => x === "affliction"
      );

      if (index > -1) {
        if (
          onReceive[index].usage === 0 &&
          payload.skillStore.type !== "piercing" &&
          disableDrIv === -1 &&
          affliction === false
        ) {
          payload.val -= this.val;
          onReceive[index].usage += 1;
        }
      }
      if (index === -1) {
        console.log("REDUCE!!", onReceive[index], onReceive, index, payload);
      }
    },
    owner: x.owner
  };
}

function invulnerable(x) {
  return {
    name: x.name ? x.name : "invulnerable",
    val: 0,
    type: "invulnerable",
    harmful: x.harmful ? x.harmful : false,
    effect: x.effect ? x.effect : x.type,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    owner: x.owner
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
          "mental",
          "chakra",
          "affliction",
          "strategy",
          "physical",
          "range",
          "melee"
        ],
    active: x.active ? x.active : 1,
    modify: function(payload) {},
    owner: x.owner
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
    modify: function(payload) {},
    owner: x.owner
  };
}

function state(x) {
  return {
    name: x.name,
    val: 0,
    type: "state",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {},
    persistence: x.persistence ? x.persistence : "instant",
    owner: x.owner
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
          "mental",
          "chakra",
          "affliction",
          "strategy",
          "physical",
          "range",
          "melee"
        ],
    effect: x.effect ? x.effect : x.type,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {},
    persistence: x.persistence ? x.persistence : "instant",
    owner: x.owner
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
    },
    owner: x.owner
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
    persistence: x.persistence ? x.persistence : "action",
    active: x.active ? x.active : 3,
    modify: function(payload) {
      payload.offense.hp -= this.val;
    },
    owner: x.owner
  };
}

function drain(x) {
  return {
    name: x.name ? x.name : "drain",
    owner: x.owner,
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
    owner: x.owner,
    val: x.val ? x.val : 0,
    type: "cooldownIncrease",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : true,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {
      payload.offense.skill[payload.skill].counter += 1;
    }
  };
}

function decreaseEnergy(x) {
  return {
    name: x.name ? x.name : "decreaseEnergy",
    owner: x.owner,
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
    owner: x.owner,
    val: x.val ? x.val : 5,
    type: "dd",
    effect: x.effect ? x.effect : x.type,
    harmful: x.harmful ? x.harmful : false,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {
      let onReceive = payload.target.status.onReceive;
      let index = onReceive.findIndex(s => s.name === x.name);

      let disableDrIv = payload.target.status.onState.findIndex(
        x => x.type === "disableDrIv"
      );
      let affliction = payload.offense.skill[payload.skill].classes.some(
        x => x === "affliction"
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
