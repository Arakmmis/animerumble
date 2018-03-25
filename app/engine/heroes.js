let skills = require("./skills.js");
let constructor = require("./constructor.js");

module.exports = {
  naruto: {
    name: "naruto",
    hp: 100,
    skill: [
      new constructor.skill(skills.uzumakiNarutoCombo),
      new constructor.skill(skills.rasengan),
      new constructor.skill(skills.shadowClones),
      new constructor.skill(skills.invincible)
    ]
  },
  heroOne: {
    name: "heroOne",
    hp: 100,
    skill: [
        new constructor.skill(skills.stun),
        new constructor.skill(skills.attackBuff),
        new constructor.skill(skills.protect),
        new constructor.skill(skills.invincible)
      ]
  },
  playerTwo: {
    name: "playerTwo",
    hp: 10,
    skill: [
        new constructor.skill(skills.attack),
        new constructor.skill(skills.hurt),
        new constructor.skill(skills.stun),
        new constructor.skill(skills.invincible)
      ]
  },
  heroTwo: {
    name: "heroTwo",
    hp: 100,
    skill: [
        new constructor.skill(skills.attack),
        new constructor.skill(skills.hurt),
        new constructor.skill(skills.heal),
        new constructor.skill(skills.invincible)
      ]
  },
  heroThree: {
    name: "heroThree",
    hp: 100,
    skill: [
        new constructor.skill(skills.attack),
        new constructor.skill(skills.protect),
        new constructor.skill(skills.heal),
        new constructor.skill(skills.invincible)
      ]
  },
  playerThree: {
    name: "playerThree",
    hp: 100,
    skill: [
        new constructor.skill(skills.attack),
        new constructor.skill(skills.hurt),
        new constructor.skill(skills.heal),
        new constructor.skill(skills.invincible)
      ]
  }
};
