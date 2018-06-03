let constructor = require('../constructor.js')
let library = require('../library/status.js')
let skill = require('../library/skill.js')
let helper = require('../helper.js')

let info = {
  id: 'noharaRin',
  name: 'Nohara Rin',
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
  heal: library.heal({
    val: 10,
    active: 3
  }),
  heal2: library.heal({
    val: 10,
    active: 3
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
    active: 3,
    modify: function(payload, self) {
      if (payload.skill.type === 'heal') {
        payload.val += self.val
      }
    }
  }),
  onAttack: {
    modify: function(payload, self) {
      payload.offense.hp -= 15
    }
  },
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
    name: 'Pit Trap',
    type: 'attack',
    val: 15,
    piercing: true,
    ignoreInvul: true,
    cooldown: 0,
    classes: ['instant', 'physical'],
    energy: {
      w: 1
    },
    description:
      'Rin traps one enemy. For 1 turn, Rin will gain 15 points of damage reduction, and that enemy will take 15 piercing damage that ignores invulnerability at the end of their turn. If that enemy uses a new skill they will take another 15 damage. The target of this skill is invisible.',
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      })
      skill.pushStatus({
        subject: payload.offense,
        onStatus: 'onReceive',
        status: status.protect,
        inherit: this
      })
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onAttack',
        status: status.onAttack,
        inherit: this
      })
    }
  },
  skill2: {
    name: 'Rin Mystical Palm Healing',
    type: 'heal',
    val: 25,
    cooldown: 0,
    harmful: false,
    description:
      'Rin heals a team mate or herself 25 health and removes all harmful afflictions on that ally.',
    classes: ['instant', 'affliction'],
    energy: {
      s: 1
    },
    target: 'ally',
    move: function(payload, self) {
      skill.heal({
        subject: payload.target,
        val: payload.val
      })
      skill.removeStatus(
        {
          subject: payload.target
        },
        'harmful'
      )

      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onSelf',
        status: status.bleed,
        inherit: this
      })
    }
  },
  skill3: {
    name: 'Medical Kit',
    type: 'heal',
    harmful: false,
    val: 0,
    cooldown: 3,
    description:
      'Rin gives her medical kit to herself or an ally. For 3 turns, that character will heal 10 health. During this time, any healing skills used by that character will be increased by 10 points.',
    target: 'ally',
    classes: ['instant', 'strategic'],
    energy: {
      r: 2
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onSelf',
        status: status.heal,
        inherit: this
      })
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onAttack',
        status: status.boost,
        inherit: this
      })
    }
  },
  skill4: {
    name: 'Flee',
    type: 'invulnerable',
    val: 0,
    cooldown: 4,
    description: 'This skill makes Nohara Rin invulnerable for 1 turn.',
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
