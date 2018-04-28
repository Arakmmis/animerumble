function boost(x) {
  return {
    name: x.name ? x.name : "Boost",
    val: x.val ? x.val : 10,
    type: "boost",
    effect: x.effect ? x.effect : x.type,
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
      if (index > -1) {
        if (
          onReceive[index].usage === 0 &&
          payload.skillStore.type !== "piercing" &&
          disableDrIv === -1
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
    description: x.description ? x.description : "",
    period: "instant",
    persistence: x.persistence ? x.persistence : "action",
    active: x.active ? x.active : 3,
    modify: function(payload) {
      payload.offense.hp -= x.val;
    },
    owner: x.owner
  };
}

function drain() {
  return {
    name: x.name ? x.name : "drain",
    owner: info.id,
    val: x.val ? x.val : 0,
    type: "drain",
    effect: x.effect ? x.effect : x.type,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {
      let energy = helper.stealEnergy(payload.theirEnergy);
      if (energy !== false) {
        payload.theirEnergy[energy] -= x.val;
      }
    }
  };
}

function cooldownIncrease() {
  return {
    name: x.name ? x.name : "cooldownIncrease",
    owner: info.id,
    val: x.val ? x.val : 0,
    type: "cooldownIncrease",
    effect: x.effect ? x.effect : x.type,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {
      payload.offense.skill[payload.skill].counter += 1;
    }
  };
}

function decreaseEnergy(x) {
  return {
    name: x.name ? x.name : "dd",
    owner: info.id,
    val: x.val ? x.val : 5,
    type: "decreaseEnergy",
    effect: x.effect ? x.effect : x.type,
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
    owner: info.id,
    val: x.val ? x.val : 5,
    type: "dd",
    effect: x.effect ? x.effect : x.type,
    description: x.description ? x.description : "",
    active: x.active ? x.active : 2,
    modify: function(payload) {
      let onReceive = payload.target.status.onReceive;
      let index = onReceive.findIndex(s => s.name === x.name);

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
  decreaseEnergy
};
