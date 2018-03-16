module.exports = {
  boost: {
    name: "boost",
    val: 10,
    type: "skill",
    modify: function(payload, callback) {
      payload.val = payload.val + this.val;
      callback(payload);
    }
  },
  protect: {
    name: "protect",
    val: 10,
    type: "skill",
    modify: function(payload, callback) {
      console.log('protect',this.val)
      payload.val = payload.val - this.val;
      callback(payload);
    }
  },
  poison: {
    name: "poison",
    val: 10,
    type: "self",
    modify: function(payload) {
      payload.offense.hp = payload.offense.hp - this.val;
      console.log(payload);
    }
  },
  invincible: {
    name: "invincible",
    val: 0,
    type: "self",
    modify: function(payload) {  
      payload.val = 0    
    }
  },
  shadowClones: {
    name: "Shadow Clones",
    val: 15,
    type: "skill",
    modify: function(payload, callback) {      
      payload.val = payload.val + this.val;
      callback(payload);
    }
  }
};
