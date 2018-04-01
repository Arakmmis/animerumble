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
    this.skill = payload.skill;
    this.nameId = payload.id;
  },
  skill: function(payload) {
    this.name = payload.name;
    this.type = payload.type ? payload.type : 'attack';
    this.cooldown = payload.cooldown ? payload.cooldown : 0;
    this.counter = 0
    this.val = payload.val ? payload.val : 0;
    this.move = payload.move;
    this.description = payload.description
    this.target = payload.target ? payload.target :  "enemy";
    this.state = payload.state ? payload.state : "active";
    this.required = payload.required ? true : false
    this.mana = payload.mana ? payload.mana : 1
  },  
  status: function(payload, name, skill) {
    this.name = name ? name : payload.name;
    this.active = payload.active;
    this.val = payload.val;
    this.modify = payload.modify ? payload.modify : empty;
    this.type = payload.type;
    this.allow = payload.allow ? payload.allow : false;
    this.owner = payload.owner    
    this.skillIndex = skill ? skill : 0
  }
};
