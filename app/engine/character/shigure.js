let constructor = require('../constructor.js')
let library = require('../library/status.js')
let skill = require('../library/skill.js')
let helper = require('../helper.js')

let info = {
  id: 'shigure',
  name: 'Shigure',
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
    val: 4
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
    name: 'Umbrella Toss',
    type: 'attack',
    val: 0,
    cooldown: 0,
    classes: ['instant', 'strategic'],
    harmful: false,
    energy: {},
    target: 'self',
    description:
      'Shigure tosses his umbrellas into the air, gaining four Umbrella Counters. During this time, Shigure can use this skill again to remove all Umbrella Counters and gain 10 points of damage reduction for each Umbrella Counter for 1 turn.',
    move: function(payload, self) {
      let check = skill.checkStatus({
        subject: payload.offense,
        onStatus: 'onState',
        statusType: 'charge',
        statusName: 'Umbrella Toss'
      })
      if (!check) {
        skill.pushStatus({
          subject: payload.offense,
          onStatus: 'onState',
          status: status.charge,
          inherit: this
        })
      } else {
        let protect = status.protect
        let charge = payload.offense.status.onState.filter(
          x => x.type === 'charge' && x.name === 'Umbrella Toss'
        )[0]
        protect.val = protect.val * charge.val

        skill.pushStatus({
          subject: payload.offense,
          onStatus: 'onReceive',
          status: status.protect,
          inherit: this
        })
        skill.removeStatus({
          subject: payload.offense,
          onStatus: 'onState',
          statusType: 'charge',
          statusName: 'Umbrella Toss'
        })
      }
    }
  },
  skill2: {
    name: 'Senbon Shower',
    type: 'attack',
    val: 15,
    cooldown: 0,
    description:
      "Shigure unleashes needles over all enemies, dealing 15 damage to all enemies. This skill can't be countered or reflected. This skill takes up one Umbrella Counter.",
    classes: ['instant', 'physical'],
    energy: {
      r: 1
    },
    target: 'allenemy',
    move: function(payload, self) {
      if (payload.recursive === 0) {
        let check = skill.checkStatus({
          subject: payload.offense,
          onStatus: 'onState',
          statusType: 'charge',
          statusName: 'Umbrella Toss'
        })
        if (check) {
          console.log(check)
          let charge = payload.offense.status.onState.filter(
            x => x.type === 'charge' && x.name === 'Umbrella Toss'
          )[0]
          console.log(charge)
          if (charge.val > 0) {
            charge.val -= 1
            if (payload.offense.skill[2].energy.r > 0) {
              payload.offense.skill[2].energy.r -= 1
            }
          }
        }
      }

      skill.damage({
        subject: payload.target,
        val: payload.val
      })
    }
  },
  skill3: {
    name: 'Senbon Barrage',
    type: 'attack',
    val: 0,
    cooldown: 0,
    description:
      "Shigure deals 15 damage to one enemy for each Umbrella Counter. This skill will cost 1 less random for each Umbrella Counter used, and will remove all Umbrella Counters when used. The cost and damage of this skill will reset when 'Umbrella Toss' is used.",
    target: 'enemy',
    classes: ['instant', 'physical'],
    energy: {
      r: 4
    },
    move: function(payload, self) {
      let bleed = status.bleed

      let check = skill.checkStatus({
        subject: payload.offense,
        onStatus: 'onState',
        statusType: 'charge',
        statusName: 'Umbrella Toss'
      })
      if (check) {
        let charge = payload.offense.status.onState.filter(
          x => x.type === 'charge' && x.name === 'Umbrella Toss'
        )[0]
        if (charge.val > 0) {
          bleed.val = 15 * charge.val
        }
        skill.removeStatus({
          subject: payload.offense,
          onStatus: 'onState',
          statusType: 'charge',
          statusName: 'Umbrella Toss'
        })
        self.energy.r = 4
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
    name: 'Umbrella Block',
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
