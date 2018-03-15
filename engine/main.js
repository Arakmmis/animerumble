let sequence = require('./sequence.js')
let constructor = require('./constructor.js')
let heroes = require('./heroes.js')

function main(payload, callback) {
    //Define
    let action = {}    

    //Set State
    let boost = new modifier({
        val: 10,
        type: 'skill',
        modify: function (payload, callback) {
            console.log('stat')
            payload.damage = payload.damage + this.val
            console.log(payload)
            callback(payload)
        }
    })

    let protect = new modifier({
        val: 10,
        type: 'skill',
        modify: function (payload, callback) {            
            console.log('protect', payload.damage)
            payload.damage = payload.damage - this.val
            console.log('protect', payload.damage)
            console.log(payload)
            callback(payload)
        }
    })

    let poison = new status({
        val: 10,
        type: 'self',
        modify: function (payload) {                        
            payload.offense.hp = payload.offense.hp - this.val            
            console.log(payload)            
        }
    })

    let attack = new skill({
        type: 'attack',
        damage: 10,
        move: function (payload) {
            console.log('inside', payload.target.name, payload.target.hp, payload.damage)
            payload.target.hp = payload.target.hp - payload.damage
            return payload.target
        }
    })
    let hurt = new skill({
        type: 'attack',
        damage: 20,
        apply: function (payload) {
            console.log('inside', payload.target.name, payload.target.hp, this.damage)
            payload.target.hp = payload.target.hp - this.damage
            return payload.target
        }
    })
    let heal = new skill({
        type: 'heal',
        damage: 20,
        val: 20,
        apply: function (payload) {
            console.log('inside', payload.target.name, payload.target.hp, this.damage)
            payload.target.hp = payload.target.hp + this.val
            return payload.target
        }
    })
    let protection = new skill({
        type: 'protection',
        damage: 20,
        apply: function (payload) {
            console.log('inside', payload.target.name, payload.target.hp, this.damage)
            payload.target.status.push = payload.target.hp + this.damage
            return payload.target
        }
    })    
    let state = {
        teamA: [
            new constructor.character(character.playerOne),
            new constructor.character(character.heroOne),
            new constructor.character(character.heroTwo),
        ],
        teamB: [
            new constructor.character(character.playerTwo),
            new constructor.character(character.heroTwo),
            new constructor.character(character.playerThree),
        ],
        turn: 1,
        myTeam: ''
    }
    state.teamA.forEach((x, i) => x.id = i)
    state.teamB.forEach((x, i) => x.id = i)
    let store = [state]
    action.store = store[store.length - 1]    
    action.sequence = sequence
    callback(action)
}