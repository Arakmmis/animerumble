module.exports = {
  boost: {
    name: "boost",
    val: 40,
    type: "skill",
    active: 2,
    modify: function(payload) {
      console.log('boost')
      payload.val += this.val;
    }
  },
  protect: {
    name: "protect",
    val: 10,
    type: "skill",
    active: 2,
    modify: function(payload) {      
      payload.val -= this.val;
    }
  },
  poison: {
    name: "poison",
    val: 10,
    type: "self",
    active: 2,
    modify: function(payload) {
      payload.offense.hp -= this.val;
    }
  },
  invincible: {
    name: "invincible",
    val: 0,
    type: "invincible",
    active: 1,    
  },
  shadowClones: {
    name: "Shadow Clones",
    val: 10,
    type: "skill",
    active: 4,
    modify: function(payload) {
      console.log(payload.offense.skill[payload.skill].name)      
      if(payload.offense.skill[payload.skill].name === "Uzumaki Naruto Combo"){        
        console.log("Shadow Clone")
        payload.val += this.val;
      }      
    }
  },
  stun: {
    name: "stun",
    val: 0,
    type: "stun",
    active: 2,
    modify: function(payload) {      
    }
  },
  allowRasengan: {
    name: "allowRasengan",
    type: "allow",
    active: 4,
    allow: "Rasengan"
  }
};
