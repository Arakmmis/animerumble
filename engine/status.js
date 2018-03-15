module.exports.status = {
  boost: {
    name: "boost",
    val: 10,
    type: "skill",
    modify: function(payload, callback) {      
      payload.damage = payload.damage + this.val;      
      callback(payload);
    }
  },
  protect: {
    name: protect,
    val: 10,
    type: "skill",
    modify: function(payload, callback) {      
      payload.damage = payload.damage - this.val;      
      callback(payload);
    }
  },
  poison: {
    name: poison,
    val: 10,
    type: "self",
    modify: function(payload) {
      payload.offense.hp = payload.offense.hp - this.val;
      console.log(payload);
    }
  }
};
