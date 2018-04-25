let status = require("./status.js");
let constructor = require("./constructor.js");

module.exports = {
  uzumakiNarutoCombo: {
    name: "Uzumaki Naruto Combo",
    type: "attack",
    val: 20,
    cooldown: 2,    
    move: function(payload) {      
      payload.target.hp -= payload.val;      
    }
  },
  rasengan: {
    name: "Rasengan",
    type: "attack",
    val: 45,
    cooldown: 2,    
    required: true,
    move: function(payload) {      
      payload.target.hp -= payload.val;      
    }
  },
  shadowClones: {
    name: "Shadow Clones",
    type: "attack",
    val: 10,
    cooldown: 2,
    target: 'self',  
    move: function(payload) {      
      payload.target.status.onState.push(new constructor.status(status.allowRasengan));      
      payload.target.status.onAttack.push(new constructor.status(status.shadowClones));
    }
  },
  invulnerable: {
    name: "invulnerable",
    type: "attack",
    val: 10,
    cooldown: 2,
    target: 'self',
    move: function(payload) {      
      payload.target.status.onState.push(new constructor.status(status.invulnerable));
    }
  },
  attack: {
    name: "attack",
    type: "attack",
    val: 10,
    cooldown: 2,
    target: 'enemy',    
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        payload.val
      );
      payload.target.hp -= payload.val;      
    }
  },
  attackBuff: {
    name: "attackBuff",
    type: "modifier",
    val: 10,
    cooldown: 2,
    target: 'ally',
    move: function(payload) {
      payload.target.status.onAttack.push(new constructor.status(status.boost));      
    }
  },
  protect: {
    name: "protect",
    type: "modifier",
    val: 10,
    cooldown: 2,
    target: 'ally',
    move: function(payload) {
      payload.target.status.onReceive.push(new constructor.status(status.protect));      
    }
  },
  poison: {
    name: "poison",
    type: "self",
    val: 10,
    cooldown: 2,    
    move: function(payload) {
      payload.target.status.onSelf.push(new constructor.status(status.poison));
      return payload.target;
    }
  },
  stun: {
    name: "stun",
    type: "enemy",
    val: 10,
    cooldown: 2,    
    move: function(payload) {      
      payload.target.status.onState.push(new constructor.status(status.stun));      
    }
  },
  hurt: {
    name: "hurt",    
    type: "attack",
    val: 20,
    cooldown: 2,    
    move: function(payload) {
      console.log(
        "inside",
        payload.target.name,
        payload.target.hp,
        this.damage
      );
      payload.target.hp -= payload.val;      
    }
  },
  heal: {
    name: "heal",
    type: "heal",
    val: 20,
    cooldown: 2,    
    move: function(payload) {      
      payload.target.hp += payload.val; 
    }
  }
};
