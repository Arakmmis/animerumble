function empty(payload) {}

module.exports = {
  character: function(
    payload = {
      name: "",
      hp: 100,
      skill: []
    }
  ) {
    this.name = payload.name;
    this.hp = payload.hp;
    this.status = {
      onAttack: [],
      onReceive: [],
      onSelf: [],
      onState: []
    };
    this.skill = payload.skill.map((x, i) => {
      return {
        ...x,
        id: i
      };
    });
    this.nameId = payload.id;
  },
  skill: function(payload) {
    this.name = payload.name;
    this.type = payload.type ? payload.type : "attack";
    this.cooldown = payload.cooldown ? payload.cooldown : 0;
    this.counter = payload.cooldown;
    this.val = payload.val ? payload.val : 0;
    this.move = payload.move;
    this.description = payload.description;
    this.target = payload.target ? payload.target : "enemy";
    this.state = payload.state ? payload.state : "active";
    this.required = payload.required ? true : false;
    this.marking = payload.marking ? payload.marking : false;
    this.usage = payload.usage ? payload.usage : 0;

    this.range = payload.range ? payload.range : false;
    this.class = payload.class ? payload.class : false;
    this.persistence = payload.persistence ? payload.persistence : false;

    this.energy = {
      a: payload.energy ? (payload.energy.a ? payload.energy.a : 0) : 0,
      i: payload.energy ? (payload.energy.i ? payload.energy.i : 0) : 0,
      s: payload.energy ? (payload.energy.s ? payload.energy.s : 0) : 0,
      w: payload.energy ? (payload.energy.w ? payload.energy.w : 0) : 0,
      r: payload.energy ? (payload.energy.r ? payload.energy.r : 0) : 0
    };
  },
  status: function(payload, name, skill) {
    this.name = name ? name : payload.name;
    this.active = payload.active;
    this.val = payload.val;
    this.modify = payload.modify ? payload.modify : empty;
    this.type = payload.type;
    this.effect = payload.effect ? payload.effect : 'none'
    this.allow = payload.allow ? payload.allow : false;
    this.period = payload.period ? payload.period : false;
    this.owner = payload.owner;
    this.skillIndex = skill ? skill : 0;
  }
};

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