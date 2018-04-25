function boost(x) {
  return {
    name: x.name ? x.name : "Boost",
    val: x.val ? x.val : 10,
    type: "boost",
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
    type: "reduce",
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
    active: x.active ? x.active : 2,
    owner: x.owner
  };
}

function stun(x) {
  return {
    name: x.name ? x.name : "stun",
    val: 0,
    type: "stun",
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
    active: x.active ? x.active : 2,
    modify: function(payload) {},
    owner: x.owner
  };
}

function heal(x) {
  return {
    name: x.name ? x.name : "heal",
    val: x.val ? x.val : 15,
    type: "self",
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
    type: "self",
    period: "instant",
    active: x.active ? x.active : 3,
    modify: function(payload) {
      payload.offense.hp -= x.val;
    },
    owner: x.owner
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
  disableDrIv
};
