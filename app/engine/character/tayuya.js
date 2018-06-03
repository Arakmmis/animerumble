let constructor = require('../constructor.js')
let library = require('../library/status.js')
let skill = require('../library/skill.js')
let helper = require('../helper.js')

let info = {
  id: 'tayuya',
  name: 'Tayuya',
  anime: 'Naruto',
  author: '',
  pictures: ''
}

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  protect: library.protect({
    val: 10,
    active: 2
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
    active: 3,
    type: 'allow',
    effect: 'allow',
    description: 'Demonic Flute: Phantom Wave',
    modify: function(payload, self) {
      let index = payload.offense.skill.findIndex(
        x => x.name === 'Demonic Flute: Phantom Wave'
      )
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
    name: 'Summoning: Doki',
    type: 'attack',
    val: 0,
    cooldown: 1,
    classes: ['instant', 'physical'],
    energy: {
      w: 1,
      r: 1
    },
    target: 'allenemy',
    description:
      'Tayuya summons the Doki Demons. The Doki Demons will deal 15 damage to all enemies for 2 turns. The following 2 turns, Tayuya will have 10 points of damage reduction. During this time, Demonic Flute: Phantom Wave can be used.',
    move: function(payload, self) {
      if (payload.recursive === 0) {
        skill.pushStatus({
          subject: payload.offense,
          onStatus: 'onReceive',
          status: status.protect,
          inherit: this
        })
        skill.pushStatus({
          subject: payload.offense,
          onStatus: 'onSelf',
          status: status.required,
          inherit: this
        })
      }
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onSelf',
        status: status.bleed,
        inherit: this
      })
    }
  },
  skill2: {
    name: 'Demonic Flute: Phantom Wave',
    type: 'attack',
    val: 10,
    cooldown: 0,
    description:
      'Illusionary ghosts come out of the Doki dealing 10 affliction damage to one enemy and removing one random energy. Requires Summoning: Doki to be active on Tayuya.',
    required: true,
    classes: ['instant', 'affliction'],
    energy: {
      r: 1
    },
    target: 'enemy',
    move: function(payload, self) {
      skill.damage({
        subject: payload.target,
        val: payload.val
      })
      skill.removeEnergy({
        theirEnergy: payload.theirEnergy,
        myEnergy: payload.myEnergy,
        amount: 1
      })
    }
  },
  skill3: {
    name: 'Demonic Flute',
    type: 'attack',
    val: 0,
    cooldown: 4,
    description:
      'Playing a genjutsu melody on her flute, Tayuya stuns all enemies skills for 1 turn.',
    target: 'allenemy',
    classes: ['instant', 'strategic'],
    energy: {
      w: 1,
      r: 1
    },
    move: function(payload, self) {
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onState',
        status: status.stun,
        inherit: this
      })
    }
  },
  skill4: {
    name: 'Insight',
    type: 'invulnerable',
    val: 0,
    cooldown: 4,
    description: 'This skill makes Tayuya invulnerable for 1 turn.',
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
