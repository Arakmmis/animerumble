let constructor = require('../constructor.js')
let library = require('../library/status.js')
let skill = require('../library/skill.js')
let helper = require('../helper.js')

let info = {
  id: 'shizune',
  name: 'Shizune',
  anime: 'Naruto',
  author: '',
  pictures: ''
}

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  protect: library.protect({
    val: 15,
    active: 4
  }),
  bleed: library.bleed({
    val: 10,
    active: 3
  }),
  state: library.state({
    active: 3
  }),
  boost: library.boost({
    val: 10,
    active: 4,
    modify: function(payload, self) {
      if (payload.skill.name === 'Uzumaki Naruto Combo') {
        payload.val += this.val
      }
    }
  }),
  required: {
    active: 4,
    type: 'allow',
    effect: 'allow',
    description: 'Rasengan',
    modify: function(payload, self) {
      let index = payload.offense.skill.findIndex(x => x.name === 'Rasengan')
      if (index !== -1) {
        if (payload.active > 1) {
          payload.offense.skill[index].required = false
          console.log('ZERO', payload.active)
        } else if (payload.active === 1) {
          payload.offense.skill[index].required = true
          console.log('LAST', payload.active)
        }
      }
    }
  }
}

let skills = {
  skill1: {
    name: 'Prepared Needle Shot',
    type: 'attack',
    val: 15,
    cooldown: 0,
    classes: ['instant', 'physical'],
    energy: {
      r: 1
    },
    description:
      'Shizune shoots hidden needles at one enemy dealing 15 damage to them.',
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      })
    }
  },
  skill2: {
    name: 'Poison Mist',
    type: 'attack',
    val: 0,
    cooldown: 1,
    marking: true,
    description:
      'Shizune breathes a poison cloud on one enemy who takes 10 affliction damage for 3 turns. This skill may not be used on an enemy currently affected.',
    classes: ['instant', 'affliction'],
    energy: {
      r: 1
    },
    target: 'enemy',
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onState',
        status: status.state,
        inherit: this
      })
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onSelf',
        status: status.bleed,
        inherit: this
      })
    }
  },
  skill3: {
    name: 'Healing Resuscitation Regeneration',
    type: 'heal',
    harmful: false,
    val: 35,
    cooldown: 1,
    description:
      'Using this advanced healing technique Shizune heals one ally for 35 health and removes all enemy afflictions from them.',
    target: 'ally',
    classes: ['instant', 'strategic'],
    energy: {
      r: 2
    },
    move: function(payload, self) {
      skill.heal({
        subject: payload.target,
        val: payload.val
      })
      skill.removeStatus(
        {
          subject: payload.target,
          onStatus: 'onSelf'
        },
        'affliction'
      )
    }
  },
  skill4: {
    name: 'Shizune Dodge',
    type: 'invulnerable',
    val: 0,
    cooldown: 4,
    description: 'This skill makes Shizune invulnerable for 1 turn.',
    target: 'self',
    classes: ['instant', 'strategic'],
    energy: {
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onState',
        status: status.invulnerable,
        inherit: this
      })
      // payload.target.status.onState.push(
      //   new constructor.status(status.invulnerable, this, 4)
      // );
    }
  }
}

let character = {
  name: info.name,
  id: info.id,
  anime: info.anime,
  credit: {
    author: info.author,
    pictures: info.pictures
  },
  hp: 100,
  skill: [skills.skill1, skills.skill2, skills.skill3, skills.skill4]
}

module.exports = character
