function empty(payload) {}

module.exports = {
  character,
  skill,
  status
};
function character(
  payload = {
    name: "",
    hp: 100,
    skill: []
  },
  turn
) {
  this.name = payload.name + turn;
  this.hp = payload.hp;
  this.status = {
    onAttack: [],
    onReceive: [],
    onSelf: [],
    onState: []
  };
  this.nameId = payload.id + turn;
  this.credit = payload.credit ? payload.credit : { author: "", pictures: "" };
  this.skill = payload.skill.map((x, i) => {
    return new skill(
      {
        ...x,
        id: i
      },
      payload.id + turn
    );
  });
}
function skill(payload, nameId) {
  //Meta
  this.id = payload.id;
  this.name = payload.name;
  this.nameId = nameId;
  this.description = payload.description;

  //Core
  this.val = payload.val ? payload.val : 0;
  this.target = payload.target ? payload.target : "enemy";
  this.cooldown = payload.cooldown ? payload.cooldown : 0;
  this.counter = payload.cooldown;
  this.classes = payload.classes;
  this.type = payload.type ? payload.type : "attack";

  //Modifier
  this.state = payload.state ? payload.state : "active";
  this.required = payload.required ? true : false;
  this.marking = payload.marking ? payload.marking : false;
  this.usage = payload.usage ? payload.usage : 0;
  this.multi = payload.multi ? payload.multi : 0;

  //State Modifier
  this.noCounter = payload.noCounter ? true : false;
  this.isMulti = payload.isMulti ? payload.isMulti : false;
  this.ignoreInvul = payload.ignoreInvul ? payload.ignoreInvul : false;

  //Energy
  this.energy = {
    a: payload.energy ? (payload.energy.a ? payload.energy.a : 0) : 0,
    i: payload.energy ? (payload.energy.i ? payload.energy.i : 0) : 0,
    s: payload.energy ? (payload.energy.s ? payload.energy.s : 0) : 0,
    w: payload.energy ? (payload.energy.w ? payload.energy.w : 0) : 0,
    r: payload.energy ? (payload.energy.r ? payload.energy.r : 0) : 0
  };

  //Move
  this.move = payload.move.bind(this);

  // this.range = payload.range ? payload.range : false;
  // this.class = payload.class ? payload.class : false;
  // this.persistence = payload.persistence ? payload.persistence : false;
}
function status(payload, inherit, skill) {
  //Meta
  this.name = inherit.name;
  this.nameId = inherit.nameId;
  this.owner = inherit.nameId;
  this.skillIndex = inherit.id + 1;

  //Core
  this.active = payload.active;
  this.val = payload.val;
  this.type = payload.type;

  //Modifier
  this.harmful = payload.harmful !== null ? payload.harmful : true;
  this.classes = payload.classes ? payload.classes : inherit.classes;
  this.info = payload.info !== null ? payload.info : "inclusive";
  this.persistence = payload.persistence ? payload.persistence : "instant";
  this.allow = payload.allow ? payload.allow : false;
  this.period = payload.period ? payload.period : false;
  this.usage = payload.usage ? payload.usage : 0;
  this.stack = payload.stack ? payload.stack : 1;

  //State Modifier
  this.isCounter = payload.isCounter ? payload.isCounter : false;
  this.isInvisible = payload.isInvisible ? payload.isInvisible : false;
  this.isStack = payload.isStack ? payload.isStack : false;

  //Cosmetic
  this.effect = payload.effect ? payload.effect : payload.type;
  this.description = payload.description ? payload.description : "";

  //Move
  this.modify = payload.modify ? payload.modify.bind(this) : empty;
}

/*
Effects:
Stun
Drain
Leech
Earn
Invulnerability
DD
DR
Heal
Bleed
Boost
Protect
Reduce

Cooldown
Duration
Chakra Cost

class
physical
energy
mental
affliction
strategic

*/
