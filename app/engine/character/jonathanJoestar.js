let constructor = require('../constructor.js')
let library = require('../library/status.js')
let skill = require('../library/skill.js')
let helper = require('../helper.js')

let info = {
  id: 'jonathanJoestar',
  name: 'Jonathan Joestar',
  anime: 'Jojo Bizzare Adventure',
  author: 'Principal Monokuma',
  pictures: 'Principal Monokuma'
}

let status = {
  invulnerable: library.invulnerable({}),
  stun: library.stun({}),
  protect: library.protect({
    val: 10,
    active: 2
  }),
  heal: library.heal({
    val: 10,
    active: 2
  }),
  heal2: library.heal({
    val: 10,
    active: 1
  }),
  selfCharge: {
    type: 'self',
    active: 2,
    modify: function(payload, self) {
      let index = payload.offense.status.onState.findIndex(
        x => x.type === 'charge'
      )
      if (index > -1) {
        payload.offense.status.onState[index].val += 1
      }
    }
  },
  bleed: library.bleed({
    val: 15,
    active: 1
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
  charge: library.charge({
    val: 2
  }),
  dd: library.dd({
    active: -1,
    val: 5
  })
}

let skills = {
  skill1: {
    name: 'Hamon Breathing',
    type: 'heal',
    val: 0,
    cooldown: 3,
    classes: ['control', 'strategic'],
    harmful: false,
    energy: {
      r: 1
    },
    target: 'self',
    description:
      'Using a special breathing technique, Jonathan gains 2 charges of Hamon, and gains 1 green energy. For the next two turns, Jonathan is healed for 10 health, and gains 1 charge of Hamon.',
    move: function(payload, self) {
      let index = payload.offense.status.onState.findIndex(
        x => x.type === 'charge'
      )
      if (index > -1) {
        payload.offense.status.onState[index].val += 2
      } else {
        skill.pushStatus({
          subject: payload.offense,
          onStatus: 'onState',
          status: status.charge,
          inherit: this
        })
      }

      //Gain Green
      payload.myEnergy.a += 1

      skill.pushStatus({
        subject: payload.offense,
        onStatus: 'onSelf',
        status: status.heal,
        inherit: this
      })
      skill.pushStatus({
        subject: payload.offense,
        onStatus: 'onState',
        status: status.selfCharge,
        inherit: this
      })
    }
  },
  skill2: {
    name: 'Luck and Pluck',
    type: 'attack',
    val: 20,
    piercing: true,
    cooldown: 1,
    description:
      'Jonathan targets one enemy, remove all DD and then deal 20 piercing damage to that enemy. If that enemy had damage reduction, or, DD before the application of this effect, remove 1 stack of Hamon.',
    classes: ['instant', 'physical'],
    energy: {
      a: 1
    },
    target: 'enemy',
    move: function(payload, self) {
      payload.target.status.onReceive = payload.target.status.onReceive.filter(
        x => x.type !== 'dd'
      )

      let check = payload.target.status.onReceive.some(
        x => x.type === 'dd' || x.type === 'protect'
      )
      if (check) {
        let index = payload.offense.status.onState.findIndex(
          x => x.type === 'charge'
        )
        if (index > -1) {
          payload.offense.status.onState[index].val -= 1
        }
      }

      skill.damage({
        subject: payload.target,
        val: payload.val
      })
    }
  },
  skill3: {
    name: 'Sunlight Yellow Overdrive',
    type: 'attack',
    val: 0,
    cooldown: 2,
    description:
      'This skill deals 10 affliction damage to all enemies, and heals all allies by 10. Each stack of Hamon adds 5 affliction damage, and 5 to the healing effect of this skill.',
    target: 'allenemy',
    classes: ['instant', 'affliction'],
    energy: {
      a: 1,
      w: 1
    },
    move: function(payload, self) {
      let charge = 0
      let index = payload.offense.status.onState.findIndex(
        x => x.type === 'charge'
      )
      if (index > -1) {
        charge = payload.offense.status.onState[index].val
      }

      let bleed = status.bleed
      bleed.val = 10 + 5 * charge

      let heal = status.heal2
      heal.val = 10 + 5 * charge

      if (payload.recursive === 0) {
        payload.state[payload.myTurn].forEach(x => {
          skill.pushStatus({
            subject: x,
            onStatus: 'onSelf',
            status: status.heal,
            inherit: this
          })
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
  skill4: {
    name: 'Life Magnetism Overdrive',
    type: 'invulnerable',
    val: 0,
    cooldown: 4,
    description:
      'This skill causes Jonathan to become invulnerable for 1 turn, and gain 5 DD per Hamon charge for 2 turns (these charges are not consumed).',
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
      let charge = 0
      let dd = status.dd

      let index = payload.offense.status.onState.findIndex(
        x => x.type === 'charge'
      )
      if (index > -1) {
        charge = payload.offense.status.onState[index].val
      }
      dd.val = 5 + 5 * charge
      skill.pushStatus({
        subject: payload.target,
        onStatus: 'onReceive',
        status: status.dd,
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
