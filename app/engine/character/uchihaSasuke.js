let constructor = require("../constructor.js");
let library = require("../library/status.js");

let info = {
  id: "uchihaSasuke"
};

let status = {
  invulnerable: library.invulnerable({
    owner: info.id
  }),
  disableDrIv: library.disableDrIv({
    owner: info.id,
    active: 4
  }),
  stun: library.stun({
    owner: info.id
  }),
  protect: library.protect({
    val: 15,
    active: 4,
    owner: info.id
  }),
  bleed: library.bleed({
    val: 5,
    owner: info.id
  }),
  
  boost1: {
    name: "Sharingan",
    owner: info.id,
    val: 25,
    type: "skill",
    active: 4,
    modify: function(payload) {      
      if (payload.offense.skill[payload.skill].name === "Chidori") {        
        payload.val += this.val;
      }
    }
  },
  boost2: {
    name: "Sharingan",
    owner: info.id,
    val: 15,
    type: "skill",
    active: 4,
    modify: function(payload) {      
      if (payload.offense.skill[payload.skill].name === "Lion Combo") {        
        payload.val += this.val;
      }
    }
  },
  required: {
    owner: info.id,
    active: 4,
    modify: function(payload) {
      let index = payload.offense.skill.findIndex(x => x.name === "Chidori");
      if (index !== -1) {
        if (payload.active > 1) {
          payload.offense.skill[index].required = false;
          console.log('ZERO', payload.active)
        }
        else if(payload.active === 1){
          payload.offense.skill[index].required = true;
          console.log('LAST', payload.active)
        }
      }
    }
  }
};

let skills = {
  skill1: {
    name: "Lion Combo",
    type: "attack",
    val: 30,
    cooldown: 0,  
    classes: ['instant', 'melee', 'physical'],
    energy: {
      a: 1,
      r:1
    },
    description:
      "Copying a taijutsu combo that Lee used on him, Sasuke deals 30 damage to one enemy. This skill will deal an additional 15 damage to an enemy affected by 'Sharingan'.",
    move: function(payload) {
      payload.target.hp -= payload.val;
    }
  },
  skill2: {
    name: "Chidori",
    type: "piercing",
    val: 30,
    cooldown: 1,
    classes: ['instant', 'melee', 'chakra'],
    description:
      "Using a lightning element attack jutsu, Sasuke deals 30 piercing damage to one enemy. This skill will deal an additional 25 damage to an enemy affected by 'Sharingan'.",       
    energy: {
      s: 1,
      r: 1
    },
    target: "enemy",
    move: function(payload) {      
      payload.target.hp -= payload.val;
    }
  },
  skill3: {
    name: "Sharingan",
    type: "attack",
    val: 10,
    cooldown: 4,
    description: "Sasuke targets one enemy. For 4 turns, Sasuke will gain 15 points of damage reduction. During this time, that enemy will be unable to reduce damage or become invulnerable.* This will end if Sasuke dies.",
    target: "enemy",   
    classes: ['instant', 'mental'], 
    energy: {      
      r: 1
    },
    move: function(payload) {      
      payload.offense.status.onReceive.push(
        new constructor.status(status.protect, this.name, 3),                
      );      
      payload.target.status.onReceive.push(
        new constructor.status(status.boost1, this.name, 3),
        new constructor.status(status.boost2, this.name, 3),
      )
      payload.target.status.onState.push(
        new constructor.status(status.disableDrIv, this.name, 3),        
      )
    }
  },
  skill4: {
    name: "Swift Block",
    type: "invulnerable",
    val: 10,
    cooldown: 4,
    description: "This skill makes Uchiha Sasuke invulnerable for 1 turn.",
    target: "self",  
    classes: ['instant', 'physical'],
    energy: {
      r: 1
    },
    move: function(payload) {
      payload.target.status.onState.push(
        new constructor.status(status.invulnerable, this.name, 4)
      );
    }
  }
};

let character = {
  name: "Uchiha Sasuke",
  id: "uchihaSasuke",
  hp: 100,
  skill: [
    new constructor.skill(skills.skill1),
    new constructor.skill(skills.skill2),
    new constructor.skill(skills.skill3),
    new constructor.skill(skills.skill4)
  ]
};

module.exports = character;
